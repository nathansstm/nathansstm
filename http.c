#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <signal.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/socket.h>

#define DEFAULT_PORT 80
#define BUFFER_SIZE 1024
#define WEB_ROOT "/var/www/html"

void handle_client(int client_sock);
void serve_file(int client_sock, const char *filename);
void daemonize();
void print_usage(char *prog_name);

int main(int argc, char *argv[]) {
    int server_sock, client_sock;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_len = sizeof(client_addr);
    int port = DEFAULT_PORT;
    int daemon = 0;
    char *bind_address = "0.0.0.0";

    // Parse command-line options
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-d") == 0) {
            daemon = 1;
        } else if (strcmp(argv[i], "-u") == 0) {
            bind_address = "127.0.0.1";
        } else if (strcmp(argv[i], "-p") == 0) {
            if (i + 1 < argc) {
                port = atoi(argv[++i]);
            } else {
                fprintf(stderr, "Option -p requires an argument.\n");
                print_usage(argv[0]);
                exit(EXIT_FAILURE);
            }
        } else if (strcmp(argv[i], "--help") == 0) {
            print_usage(argv[0]);
            exit(EXIT_SUCCESS);
        } else {
            // Run with default settings
        }
    }

    if (daemon) {
        daemonize();
    }

    // Create a socket
    server_sock = socket(AF_INET, SOCK_STREAM, 0);
    if (server_sock < 0) {
        perror("socket");
        exit(EXIT_FAILURE);
    }

    // Configure server address
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = inet_addr(bind_address);
    server_addr.sin_port = htons(port);

    // Bind the socket to the specified port and address
    if (bind(server_sock, (struct sockaddr *) &server_addr, sizeof(server_addr)) < 0) {
        perror("bind");
        close(server_sock);
        exit(EXIT_FAILURE);
    }

    // Listen for incoming connections
    if (listen(server_sock, 10) < 0) {
        perror("listen");
        close(server_sock);
        exit(EXIT_FAILURE);
    }

    printf("Server listening on %s:%d\n", bind_address, port);

    // Main loop to handle incoming connections
    while (1) {
        client_sock = accept(server_sock, (struct sockaddr *) &client_addr, &client_len);
        if (client_sock < 0) {
            perror("accept");
            continue;
        }
        handle_client(client_sock);
        close(client_sock);
    }

    close(server_sock);
    return 0;
}

void handle_client(int client_sock) {
    char buffer[BUFFER_SIZE];
    int bytes_read;

    // Read the request
    bytes_read = read(client_sock, buffer, sizeof(buffer) - 1);
    if (bytes_read < 0) {
        perror("read");
        return;
    }
    buffer[bytes_read] = '\0';

    // Simple request parsing (assume GET request)
    if (strncmp(buffer, "GET /index.html", 15) == 0) {
        serve_file(client_sock, WEB_ROOT "/index.html");
    } else if (strncmp(buffer, "GET /post.html", 14) == 0) {
        serve_file(client_sock, WEB_ROOT "/post.html");
    } else {
        // Serve default response
        const char *response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!";
        write(client_sock, response, strlen(response));
    }
}

void serve_file(int client_sock, const char *filename) {
    char buffer[BUFFER_SIZE];
    FILE *file = fopen(filename, "r");

    if (file == NULL) {
        // File not found, send 404 response
        const char *response = "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\n\r\n404 Not Found";
        write(client_sock, response, strlen(response));
        return;
    }

    // Send HTTP headers
    const char *header = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n";
    write(client_sock, header, strlen(header));

    // Send file contents
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        write(client_sock, buffer, strlen(buffer));
    }

    fclose(file);
}

void daemonize() {
    pid_t pid;

    pid = fork();
    if (pid < 0) {
        perror("fork");
        exit(EXIT_FAILURE);
    }

    if (pid > 0) {
        // Parent process
        exit(0);
    }

    // Child process becomes session leader
    if (setsid() < 0) {
        perror("setsid");
        exit(EXIT_FAILURE);
    }

    // Change working directory to root
    if (chdir("/") < 0) {
        perror("chdir");
        exit(EXIT_FAILURE);
    }

    // Close standard file descriptors
    close(STDIN_FILENO);
    close(STDOUT_FILENO);
    close(STDERR_FILENO);
}

void print_usage(char *prog_name) {
    printf("Usage: %s [-d] [-u] [-p port] [--help]\n", prog_name);
    printf("  -d          Daemonize the server\n");
    printf("  -u          Bind to 127.0.0.1 (loopback address)\n");
    printf("  -p port     Bind to the specified port (default is 80)\n");
    printf("  --help      Display this help message\n");
}

