export const simulatedFileContent = `
    <post-43>
<p>
I have spent time to learn about Pointers in C programs today, including avoiding invalid syntax by using single quotes for single characters and double quotes for string literals, And using const char* ptr = &c to "point" to the memory address of the variable c or if a value such as "Hello" the first character in Read only memory of the letter H.
</p>
    </post-43>
    <post-42>
<p>
I need a way to have yet more control over grep, in some use cases egrep and extended pattern matches, even case insensitive with pipe is not enough to grab the right priority, here is the solution to break on a first match, solving any discrepency where egrep or grep will not prioritized a first match.
</p>
<pre>
priorities=(
"org-name"
"org-kind"
"org-type"
"org-addr"
"org-mail"
)
for priority in "$\{priorities[@]\}"; do
which_priority=$(echo "$priority" | awk '{print $1}')
echo "Checking... $which_priority" 
value_priority=$(echo -e "org:name\\norg-name:value\\norg-kind:kind\\norg-type:which\\norg-addr:mail\\norg-mail:addr" \\
| grep -i "$which_priority" \\
| tail -n 1 \\
| cut -d':' -f2 \\
| xargs
)
if [[ -n $value_priority ]]; then
echo "$value_priority"
break
fi
done
# Here we prefer priorities
# and default to the first
# one we find, the order of
# our input and egrep/grep
# default behavior are not
# affecting matches and the
# first match ends the loop
<button class="copy-btn" data-code="42">&lt;&gt;</button>
</pre>
    </post-42>
    <post-41>
<p>
I have another followup for prioritizing matches, the concept here is that we concentrate on prioritizing matches and allow grep to focus on input and rely on its default behavior, abstracting the priority from the working of grep, using tail to grab each match and head + cut to extract the appropriate field value.
</p>
<pre>
priorities=(
"org-name"
"org-kind"
"org-type"
"org-addr"
"org-mail"
)
for priority in "$\{priorities[@]\}"; do
which_priority=$(echo "$priority" | awk '{print $1}')
echo "Checking... $which_priority" 
echo -e "org:name\\norg-name:value\\norg-kind:kind\\norg-type:which\\norg-addr:mail\\norg-mail:addr" \\
| grep -i "$which_priority" \\
| tail -n 1 \\
| cut -d':' -f2 \\
| xargs
done
# Here we prefer priorities
# and no default priority
# the order of our input and
# the grep default behavior
# are not affecting matches
<button class="copy-btn" data-code="41">&lt;&gt;</button>
</pre>
    </post-41>
    <post-40>
<p>
I have a neat method to share for prioritizing grep output when the pattern order and the initial input are in conflict, Since grep works line by line and its focus is on the input, if your priority match comes after the fallback you can simply use tail -n 1 instead of head to pull the last line instead of the first, a useful trick that you could in theory even combine two matches at a time to always prioritize a second match first.
</p>
<pre>
echo -e "org:name\\norg-name:value" \\
| grep -i "org-name\\|org" \\
| tail -n 1 \\
| cut -d':' -f2 \\
| xargs
# Here we prefer org-name first
# and default to org, despite
# the order of our input and
# the grep default behavior
<button class="copy-btn" data-code="40">&lt;&gt;</button>
</pre>
    </post-40>
    <post-39>
<p>
As I move forward with writing simple programs in C I find that the distinction between "low-level" and "high-level" programming languages can sometimes be nuanced, especially when talking about a language like C, which has characteristics of both.
</p>
    </post-39>
    <post-38>
<p>
I have found some neat information about my new favorite programming language. The official standard for the C language is maintained by ISO. The current standard is ISO/IEC 9899:2018, commonly known as C18. Previous standards include C11 (ISO/IEC 9899:2011), C99 (ISO/IEC 9899:1999), and ANSI C (also known as C89 or C90). The standard defines a set of libraries and headers, such as \`&lt;stdio.h>\`, \`&lt;stdlib.h\>\`, \`&lt;string.h>\`, and others, which provide fundamental functionalities like input/output, memory management, and string handling. These standard libraries are part of the C standard and must be provided by any compliant C compiler.
</p>
    </post-38>
    <post-37>
<p>
The C language and its libraries are standardized by ISO, ensuring consistency across different compilers. GCC, Clang, and other compilers implement the standard and provide the necessary libraries. Extensions and non-standard features offered by compilers are optional and may affect portability. By adhering to the ISO C standard, you can write portable C code that will compile and run on any compliant compiler and platform.
</p>
    </post-37>
    <post-36>
<p>
I have been thinking a lot about my approach to simple written C programs, Use of standard libraries, Dynamic linking, Compiler simplicity, and Avoiding unnecessary Third-Party dependencies. And I have found some great resources: the C standard library (C89/C99/C11), GNU C Library (glibc), POSIX (Portable Operating System Interface), Man pages (man 3 printf, man 2 socket) and the Linux Programmers Manual.
</p>
    </post-36>
    <post-35>
<p>
My approach to programming in C, focusing on standard libraries and keeping the compile command simple, aligns with what is often called minimalist programming. It's a methodology that values simplicity, standardization, and portability—aiming to create reliable, well-behaved programs that avoid unnecessary dependencies on third-party libraries.
</p>
    </post-35>
    <post-34>
<p>
I have some new ideas for a simple Http server written in C. When you run the server without the -d flag (i.e., not in daemon mode), pressing Ctrl + C sends the SIGINT signal to the process, which typically causes the process to terminate immediately. This means that Ctrl + C will generally stop your server and return you to the command line, and you will not need to send a SIGTERM signal in this case. If you want to handle SIGINT for additional cleanup or logging purposes, you can add a handler for SIGINT as a SIGTERM handler in your code.
</p>
    </post-34>
    <post-33>
<p>
We have some considerations regarding the current implementation of a simple Http listener written in C, such as the current version will serve multiple HTTP requests, but it handles one request at a time sequentially. This means that while one request is being processed, other requests must wait, which can lead to poor performance under high load. To handle multiple requests concurrently, you have a few options: Forking: Create a new process for each incoming connection. Multithreading: Create a new thread for each incoming connection. Asynchronous I/O: Use non-blocking I/O and event-driven programming to handle multiple connections within a single process or thread.
</p>
    </post-33>
    <post-32>
<p>
Here is how were building our http.web or http.out from http.c, Save the code as http.c. Compile it using gcc: gcc http.c -o http.web Run the server in the background using the -d flag: ./http.web -d, Alternatively, run the server in the foreground without the -d flag: ./http.web
</p>
<pre>
#include &lt;stdio.h>
#include &lt;stdlib.h>
#include &lt;string.h>
#include &lt;unistd.h>
#include &lt;sys/socket.h>
#include &lt;netinet/in.h>
#include &lt;fcntl.h>
#include &lt;signal.h>

#define PORT 8080
#define BUFFER_SIZE 1024
#define ROOT_DIR "/var/www/html/"

// Function to handle file requests and send responses
void handle_request(int new_socket) {
    char buffer[BUFFER_SIZE] = {0};
    read(new_socket, buffer, BUFFER_SIZE);

    // Extract the requested file path from the HTTP request
    char *method = strtok(buffer, " ");
    char *path = strtok(NULL, " ");
    char file_path[BUFFER_SIZE] = {0};

    // Default response
    const char *response_header = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n";
    char response_body[BUFFER_SIZE] = "Hello, World!";

    if (path != NULL) {
        if (strcmp(path, "/") == 0) {
            path = "/index.html";
        }
        else if (strcmp(path, "/post") == 0) {
            path = "/post.html";
        }

        snprintf(file_path, sizeof(file_path), "%s%s", ROOT_DIR, path);

        int file = open(file_path, O_RDONLY);
        if (file != -1) {
            // Read file content
            ssize_t bytes_read = read(file, response_body, sizeof(response_body) - 1);
            close(file);
            response_body[bytes_read] = '\0';
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n");
        } else {
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 404 Not Found\\r\\nContent-Type: text/html\\r\\n\\r\\n");
            snprintf(response_body, BUFFER_SIZE, "&lt;html>&lt;body>&lt;h1>404 Not Found&lt;/h1>&lt;/body>&lt;/html>");
        }
    }

    // Send response
    char response[BUFFER_SIZE];
    snprintf(response, sizeof(response), "%s%s", response_header, response_body);
    send(new_socket, response, strlen(response), 0);
    close(new_socket);
}

void daemonize() {
    pid_t pid;

    // Fork off the parent process
    pid = fork();

    // If we got a good PID, then we can exit the parent process
    if (pid &lt; 0) {
        exit(EXIT_FAILURE);
    }
    if (pid > 0) {
        exit(EXIT_SUCCESS);
    }

    // On success: The child process becomes the session leader
    if (setsid() &lt; 0) {
        exit(EXIT_FAILURE);
    }

    // Ignore signal sent from child to parent process
    signal(SIGCHLD, SIG_IGN);
    signal(SIGHUP, SIG_IGN);

    // Fork off for the second time
    pid = fork();

    // An error occurred
    if (pid &lt; 0) {
        exit(EXIT_FAILURE);
    }

    // Success: Let the parent terminate
    if (pid > 0) {
        exit(EXIT_SUCCESS);
    }

    // Set new file permissions
    umask(0);

    // Change the working directory to the root directory
    chdir("/");

    // Close all open file descriptors
    for (int x = sysconf(_SC_OPEN_MAX); x >= 0; x--) {
        close(x);
    }
}

int main(int argc, char *argv[]) {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);

    if (argc > 1 && strcmp(argv[1], "-d") == 0) {
        daemonize();
    }

    // Create socket file descriptor
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("socket failed");
        exit(EXIT_FAILURE);
    }

    // Set socket options
    int opt = 1;
    if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT, &opt, sizeof(opt))) {
        perror("setsockopt failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Set up server address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    // Bind socket
    if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) &lt; 0) {
        perror("bind failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_fd, 3) &lt; 0) {
        perror("listen");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d\\n", PORT);

    // Main server loop
    while ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen)) >= 0) {
        handle_request(new_socket);
    }

    // Close server socket
    close(server_fd);
    return 0;
}
<button class="copy-btn" data-code="32">&lt;&gt;</button>
</pre>
    </post-32>
    <post-31>
<p>
Here is how were building our http.web or http.out from http.c, Save the code as http.c. Compile it using gcc: gcc http.c -o http.web Run the server in the background using the -d flag: ./http.web -d, Alternatively, run the server in the foreground without the -d flag: ./http.web
</p>
    </post-31>
    <post-30>
<p>
I have a new feature to add to my Http server written in C, you can run your C program in the background by using the & operator in the shell. However, if you want to add an option to your program to handle this internally (i.e., using a flag to daemonize the process), you can modify your code to handle command-line arguments and fork the process accordingly. Next I will explain how you can modify the main function in http.c to accept a -d flag to run the server as a daemon.
</p>
    </post-30>
    <post-29>
<p>
I want to explain my working Http server/Listener as the project, aside from my work with Java and the Java Virtual Machine, is my primary goal right now. The server listens on port 8080 and accepts incoming connections. It reads the Http request, parses the requested file path, and serves index.html or post.html from /var/www/html/ if requested. If neither file is requested, it responds with "Hello, World!". If the requested file is not found, it sends a 404 Not Found response. The response is formatted with the appropriate Http header.
</p>
    </post-29>
    <post-28>
<p>
Here's a simplified Http server written in C that listens on port 8080, serves index.html or post.html from /var/www/html/ if they are requested, and responds with a simple "Hello, World!" message for any other requests.http.c
</p>
<pre>
#include &lt;stdio.h>
#include &ltstdlib.h>
#include &lt;string.h>
#include &lt;unistd.h>
#include &lt;sys/socket.h>
#include &lt;netinet/in.h>
#include &lt;fcntl.h>

#define PORT 8080
#define BUFFER_SIZE 1024
#define ROOT_DIR "/var/www/html/"

// Function to handle file requests and send responses
void handle_request(int new_socket) {
    char buffer[BUFFER_SIZE] = {0};
    read(new_socket, buffer, BUFFER_SIZE);

    // Extract the requested file path from the HTTP request
    char *method = strtok(buffer, " ");
    char *path = strtok(NULL, " ");
    char file_path[BUFFER_SIZE] = {0};

    // Default response
    const char *response_header = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n";
    char response_body[BUFFER_SIZE] = "Hello, World!";

    if (path != NULL) {
        if (strcmp(path, "/") == 0) {
            path = "/index.html";
        }
        else if (strcmp(path, "/post") == 0) {
            path = "/post.html";
        }

        snprintf(file_path, sizeof(file_path), "%s%s", ROOT_DIR, path);

        int file = open(file_path, O_RDONLY);
        if (file != -1) {
            // Read file content
            ssize_t bytes_read = read(file, response_body, sizeof(response_body) - 1);
            close(file);
            response_body[bytes_read] = '\\0';
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n");
        } else {
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 404 Not Found\\r\\nContent-Type: text/html\\r\\n\\r\\n");
            snprintf(response_body, BUFFER_SIZE, "&lt;html>&lt;body>&lt;h1>404 Not Found&lt;/h1>&lt;/body>&lt;/html>");
        }
    }

    // Send response
    char response[BUFFER_SIZE];
    snprintf(response, sizeof(response), "%s%s", response_header, response_body);
    send(new_socket, response, strlen(response), 0);
    close(new_socket);
}

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);

    // Create socket file descriptor
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("socket failed");
        exit(EXIT_FAILURE);
    }

    // Set socket options
    int opt = 1;
    if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT, &opt, sizeof(opt))) {
        perror("setsockopt failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Set up server address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    // Bind socket
    if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
        perror("bind failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_fd, 3) &lt; 0) {
        perror("listen");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d\\n", PORT);

    // Main server loop
    while ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen)) >= 0) {
        handle_request(new_socket);
    }

    // Close server socket
    close(server_fd);
    return 0;
}
<button class="copy-btn" data-code="28">&lt;&gt;</button>
</pre>
    </post-28>
    <post-27>
<p>
I have used FastCGI with default systemctl fcgiwrap start and enable in conjunction with nginx for a simple way to handle web application programs served from /cgi-bin/. I have listed here a Minimal example of a CGI program written in C.
</p>
<pre>
#include &lt;stdio.h>
#include &lt;stdlib.h>

int main(void) {
    printf("Content-Type: text/html\\n\\n");
    printf("&lt;html>&lt;body>&lt;h1>Hello, World!&lt;/h1>&lt;/body>&lt;/html>\\n");
    return 0;
}
<button class="copy-btn" data-code="27">&lt;&gt;</button>
</pre>
    </post-27>
    <post-26>
<p>
Using C for web development is possible but comes with challenges due to the lower-level nature of the language. However, it can be beneficial for performance-critical applications or for learning purposes. Here are some design patterns and considerations, Follow the design of simple (or complex) Http servers, Take advantage of modular design, Use CGI to write C programs that write web content or manage application serving, Use multi-threading and Consider non-blocking IO or Event driven design patterns.
</p>
    </post-26>
    <post-25>
<p>
I want to step through the functionality our Http listener will take. Socket Creation: The socket() function creates a new socket. Binding: The bind() function binds the socket to an address and port number specified in serv_addr. Listening: The listen() function makes the socket ready to accept incoming connections. Accepting Connections: The accept() function accepts an incoming connection and creates a new socket for communication. Reading from Socket: The read() function reads data from the socket. Writing to Socket: The write() function sends an HTTP response back to the client. Closing Sockets: The close() function closes the sockets when done.
</p>
    </post-25>
    <post-24>
<p>
Were revisiting our Http server in C using standard POSIX libraries, gcc compiler, and Dynamic linking. Here are some of the essential header files we will need: <stdio.h>: Standard input and output functions. <stdlib.h>: Standard library functions, including memory allocation. <string.h>: String handling functions. <unistd.h>: POSIX operating system API, including close, read, and write functions. <sys/types.h>: Data types used in system calls. <sys/socket.h>: Socket programming functions and data structures. <netinet/in.h>: Structures for storing address information. <arpa/inet.h>: Functions for manipulating IP addresses. <netdb.h>: Functions for network database operations.
</p>
    </post-24>
    <post-23>
<p>
Testing with JVM and ByteBuffer for 1000Byte packets, sending 1000 packets x 8Bytes per Bit for 8000000 total Bits, or in one second (divided by 1000000Mbit) a base 8Mbits/sec theoretical throughput, Low end servers have been saturating at approx 30Mbits/sec and high end servers at over 1Gbits/sec or 1000Mbits/sec Average throughput.
</p>
    </post-23>
    <post-22>
<p>
You can send a file's contents to your clipboard directly from the terminal on Debian via SSH. However, the ability to do this will depend on the clipboard support of your SSH client and the setup on your Android device. For this to work directly with your Android device's clipboard, your SSH client app needs to support clipboard sharing. Apps like Termux (with appropriate packages) or JuiceSSH might be configured to handle clipboard operations.
</p>
    </post-22>
    <post-21>
<p>
I want to extract the Vendor ID from the output of lscpu, we can modify the command slightly. The lscpu command provides detailed CPU information, including the vendor ID, which you can extract using grep and awk similarly to the stock lscpu command. Here's the updated command to get the Vendor ID.
</p>
<pre>
lscpu | grep 'Vendor ID:' | awk -F: '{print $2}' | xargs
<button class="copy-btn" data-code="21">&lt;&gt;</button>
</pre>
    </post-21>
    <post-20>
<p>
I have a need to note that from viewpoint as a Service client in many cases my Internet service and Machine are the responsibility of the same entity, It is the Host who in times of peril often feels the need to edify who they believe the ISP is and responsible for Network connectivity, But as my Host is often my only direct contact and managed services may not be available I must choose whether or not to distinguish between the ASP or ISP in order to route my Support requests properly, I choose to identify the Host/ISP then as my only contact all else being equal, they must identify the ASP route theirs as well.
</p>
    </post-20>
    <post-19>
<p>
I found a new point of contention among commonly used terms, I have found it more appropriate to refer to my ISP in terms of identifying the same entity most call the Host or Server provider, and the terms most call the ISP may better be identified as my ASP. Autonomous System Provider (ASP): This term can be appropriate for referring to the entity managing the Autonomous System (AS). It emphasizes their role in handling the network routing and managing IP address blocks within their AS. ISP (Internet Service Provider), Commonly used to refer to companies providing internet connectivity to end-users. 
</p>
    </post-19>
    <post-18>
<p>
Why Mi Exists, The use of "Mi" (Mebi) and similar binary prefixes is to prevent ambiguity. Historically, MB could either mean 1,000,000 bytes (decimal) or 1,048,576 bytes (binary), depending on context, causing confusion in software, hardware specifications, and storage devices. The IEC prefixes like MiB (Mebibyte) address that. The binary prefix system is not specific to a region like Europe or Latin America, but it has been more readily adopted by scientific and technical fields that require precise distinction between binary and decimal measurements. Conclusion, While Mi is an official standard from the IEC and represents a very specific meaning (binary, 1024-based measurement), other abbreviations like Bi or Mbyte remain informal and non-standard. You may encounter them in niche or creative contexts, but they lack formal recognition in data measurement standards. And since the sometimes ambiguous use of MB is a historical fact, Ive decided to continue using the shorter Mi and Bi.
</p>
    </post-18>
    <post-17>
<p>
The “Mi” in MiB is shorthand for Mebi, which comes from the binary prefix system, not from a specific country but from international standards like IEC. Unofficial or Unconventional Byte Shorthands: Bi - While Bi could theoretically be shorthand for Byte, it is not widely accepted in official documentation. It might be used casually, but it could lead to confusion as "Bi" typically isn't used for bytes in formal contexts. Kbyte - A less common shorthand for Kilobyte. Mbyte - Occasionally seen as an alternative to MB, but also rare. Gbyte - Another uncommon form of GB. Tbyte - An unusual shorthand for Terabyte. kBps / KBps - Often used in networking to represent data transfer speeds (Kilobytes per second). MBps / MiBps - Similarly used for Megabytes or Mebibytes per second in speed calculations. 
</p>
    </post-17>
    <post-16>
<p>
I made refinements to my Network utility adding Latency results and some binary path verification for using commands like Whois and Dig which generally require setup and installation even on stock Unix based Systems, also for referenxe here is a continued sample Documentation regarding shorthand Mi and Bi as Ive been using them in my programs to refer to Mbyte and Byte, ensuring that where appropriate logical assertions are clear regarding use of the different value systems around Mbits and Mbytes.  
</p>
    </post-16>
    <post-15>
<p>
The shorthand notation "Mi" that you’re seeing is part of a standardized system called IEC binary prefixes, which differentiates between powers of 1024 (binary) and powers of 1000 (decimal). These notations were introduced by the International Electrotechnical Commission (IEC) in 1998 to avoid confusion between binary and decimal interpretations of data sizes. Here's a breakdown: Standard Byte Shorthands: B = Byte (standard) KB = Kilobyte (1,000 bytes) MB = Megabyte (1,000,000 bytes) GB = Gigabyte (1,000,000,000 bytes) TB = Terabyte (1,000,000,000,000 bytes) IEC Binary Prefixes (unconventional for many users but now official): KiB = Kibibyte (1,024 bytes) MiB = Mebibyte (1,048,576 bytes) GiB = Gibibyte (1,073,741,824 bytes) TiB = Tebibyte (1,099,511,627,776 bytes)
</p>
    </post-15>
    <post-14>
<p>
I have been back and forth with refining my use of Mi and Bi when referring to the actual terms Megabyte and Byte, mostly as shorthand methods for avoiding Mbyte and Byte or MB and B, so I found some Documentation which clarifies these technical customs so I have a more stable base of knowledge should I choose an unconventional way to represent these values. 
</p>
    </post-14>
    <post-13>
<p>
I have become a fan of Java bytecode and using the Java Virtual Machine increasingly for a variety of server side programming, A great way Ive found to accomplish running Java and avoiding the need to javac Compile each time you need to run some Java is to use the latest Java SDK and the bundled jshell command line utility which runs its own Event Read Interpet Loop to handle the task, allowing us to avoid the requirement of compile and/or Applet server which most traditionally would use to process Java bytecode, a simple install command from your favorite package manager for example aptitude install java-sdk is usually enough to return the latest openjdk package versions available from stock repos, here is an example one liner that uses jshell to read and return available Network interface devices.
</p>
<pre>
jshell \<(echo 'import java.net.NetworkInterface; import java.util.Enumeration; Enumeration\<NetworkInterface> networkInterfaces = NetworkInterface.getNetworkInterfaces(); while (networkInterfaces.hasMoreElements()) { NetworkInterface ni = networkInterfaces.nextElement(); String status = ni.isUp() ? "Up" : "Down"; System.out.println(ni.getName() + ", " + status); }' && echo '/exit') -q
<button class="copy-btn" data-code="13">&lt;&gt;</button>
</pre>
    </post-13>
    <post-12>
<p>
In Java, achieving functionality similar to writing to /dev/null—where data is discarded without creating a real file or impacting disk storage—requires using in-memory streams. Here are some methods to simulate /dev/null behavior for I/O benchmarks or testing purposes.  In-Memory Streams: Use ByteArrayOutputStream or a custom OutputStream to discard data in memory. Custom OutputStream: Implement your own OutputStream that ignores written data.  System.out Redirection: Redirect System.out to discard output, though this is more for output redirection than general I/O benchmarking.  NIO Pipes: Advanced method involving ByteBuffer and Pipe for in-memory data handling.  Each method serves different purposes, but for a direct equivalent to /dev/null that doesn’t involve file operations, using ByteArrayOutputStream or a custom OutputStream is typically the simplest and most effective approach.
</p>
    </post-12>
    <post-11>
<p>
I learned a very useful conditional today, when running CGI/Bash programs sometimes we want to use option flags after we escape the command line and send the command off to the System for processing, If we have a program that we run as ./file.sh we can create a built in option that can be used as ./file.sh -R where -R is a built in custom flag that is formatted as -option and check within Bash for the option and process any additional or conditional logic we choose, here is the example.
</p>
<pre>
# Check for the -R flag
read_only_mode=false
if [[ "$1" == "-R" ]]; then
    read_only_mode=true
fi
<button class="copy-btn" data-code="11">&lt;&gt;</button>
</pre>
    </post-11>
    <post-10>
<p>
I had a need to create some detail and Documentation info today for some utility functions inside of a cgi/Bash program, while unconventional I enjoy how the JSDoc format looks for detail and comment related data in my code. I want to list some of these examples here because A) its a quick copy/paste and B) its easier in the future to refer to basic JSDoc comments here than navigating through the Official JSDoc Documentation. I really think all code should contain some JSDoc somewhere, I can only theory that one might forego using it if the code is a core Class or function library that is minified for efficiency.
</p>
<pre>
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
export const add = (a, b) => a + b;
<button class="copy-btn" data-code="10">&lt;&gt;</button>
</pre>
    </post-10>
    <post-9>
<p>
I was expanding on my work for a C based Http server today, first comes my conversation with Gpt regarding transpiling and interpreters, as we consider together using one programming language such as C as a base and methods for efficiently spinning up a proper Listener to serve Http requests as quickly as possible, possibly through another language. Yes, it is possible for a C program to interpret code from other languages, such as Python, and use the output within its own code. However, this typically involves embedding an interpreter for the other language within the C program. For Python, this can be done using the Python/C API. Here's a basic example of how a C program can embed the Python interpreter and run Python code:
</p>
<pre>
#include &lt;Python.h>

int main(int argc, char *argv[]) {
    // Initialize the Python interpreter
    Py_Initialize();

    // Define the Python code to be executed
    const char *pythonCode = "print('Hello from Python!')\\n"
                             "import sys\\n"
                             "sys.stdout.flush()";

    // Run the Python code
    PyRun_SimpleString(pythonCode);

    // Clean up and finalize the Python interpreter
    Py_Finalize();

    return 0;
}
<button class="copy-btn" data-code="9">&lt;&gt;</button>
</pre>
<p>
In this example:The Python interpreter is initialized using Py_Initialize().A string containing Python code is defined.The Python code is executed using PyRun_SimpleString().The Python interpreter is finalized using Py_Finalize().This approach allows a C program to run Python code and capture the output using Python's standard output functions. More complex interactions between C and Python can be achieved by using other functions from the Python/C API to execute Python code, access Python objects, and manipulate them within the C program.
</p>
    </post-9>
    <post-8>
<p>
I was using Gpt today to familirize myself with methods for using programming languages and in essence middleware, here is what we came up with.  The term you're looking for is "transpiler." A transpiler, also known as a source-to-source compiler, is a type of compiler that takes the source code written in one programming language and converts it into another programming language. This is different from an interpreter, which directly executes the instructions written in a programming language without converting them to another language first.
</p>
    </post-8>
    <post-7>
<p>
I made a simple test to check for the existing stock sshd binary and config file, if it does and it should then we can use grep to search for lines that begin specifically with the word Port, ignoring any which are commented out, and pipe stdout to awk using to extract the field value from the matching line, we finish this up by returning the value if 22 if no match is found for any reason as the ssh daemon will then auto default to 22.  You can use the following one-liner in bash to achieve this: ssh=$(grep -E '^Port ' /etc/ssh/sshd_config | awk '{print $2}' || echo 22)  This script does the following:grep -E '^Port ' searches for lines that start with Port  in the /etc/ssh/sshd_config file, ignoring any lines that start with a comment #.  awk '{print $2}' extracts the port number from the matching line.  If no match is found, || echo 22 ensures that the default value 22 is used.
</p>
    </post-7>
    <post-6>
<p>
I finished a Lookingglass test page and program using Fastcgi and runs on nginx with System commands like: Buttons and Form Inputs: Each tool has its own button, which will send a POST request to file.sh. The buttons pass the action (like ping, iperf, traceroute, etc.) to identify which tool to use.POST Handling in file.sh:Ping: This uses ping -c 10 for the specified target.iPerf: This uses iperf3 to test bandwidth between your server and the target.Traceroute: Traces the network path to the target. WhoIs: Returns domain registration details.Dig: Retrieves DNS records for the target.HTTP: Sends a GET request using curl -I to show response headers. 10MiB/100MiB File: Uses wget to download a file, and the script outputs "Success......" or "Failed......" based on the download result, then removes the file.Each tool is implemented with basic error handling and outputs relevant information directly into the browser.
</p>
<label>posted 1702849600</label>

    </post-6>
    <post-5>
<p>
I finished setup of a Machine benchmark utility program, and Network throughput test program using the Java Virtual Machine to test Data port throughput using UDP packets of various Byte sizes including 1000Bi 512Bi and 64Bi for measuring throughput with a Latency test to accompany Iperf3 test results, tested on OrangeVps server and maxed out the Data port speed at 960Mbits/sec on the first test and over 1.1Gbits/sec for the second.
</p>
<label>posted 1723924537</label>

    </post-5>
    <post-4>
<p>
I have put together a list of required header includes for use in C code programs to begin creating a simple Http server. To build a simple HTTP server in C using only the standard libraries that come with your C compiler, you will primarily use POSIX (Portable Operating System Interface) libraries. These libraries provide the necessary functionality for socket programming, file handling, and basic I/O operations. Here are some of the essential header files you will need: \<stdio.h>: Standard input and output functions. \<stdlib.h>: Standard library functions, including memory allocation. \<string.h>: String handling functions. \<unistd.h>: POSIX operating system API, including close, read, and write functions. \<sys/types.h>: Data types used in system calls. \<sys/socket.h>: Socket programming functions and data structures. \<netinet/in.h>: Structures for storing address information. \<arpa/inet.h>: Functions for manipulating IP addresses. \<netdb.h>: Functions for network database operations.
</p>
    </post-4>
    <post-3>
<p>
I have begun learning C programming and taken on the task of creating a simple Http listener for serving Http requests.  To begin a task like this I have created a lisy of useful command line tools and utility programs that can be installed using stock repository and System packages, here is a quick sample list of packages you can install to start using your favorite text editor and simple gcc utility commands to begin creating http.c and http.out programs written in C.
</p>
<pre>
#!/bin/sh -e

aptitude install \\
haproxy \\
libuv1 \\
libuv1-dev \\
libuvc-dev \\
libuvc0 \\
g++ \\
gcc \\
glibc-source \\
binutils \\
build-essential \\
ccache \\
cmake \\
dnstop \\
dnsutils \\
dmidecode \\
iproute2 \\
iptables \\
libc6-dev \\
libgccjit-10-dev \\
lsb-release \\
openssl \\
rkhunter \\
pkg-config \\
python3 \\
python3-dev \\
python3-websockets \\
python3-pip \\
tcpdump \\
websocketd \\
whois \\
libv8-dev 
exit 0
<button class="copy-btn" data-code="3">&lt;&gt;</button>
</pre>
    </post-3>
    <post-2>
<p>
I found the C programming language was invented in 1972 at Bell Labs by Dennis Ritchie. It was developed for the Unix operating system, which was also created at Bell Labs. C was designed to be a simple yet powerful language that could be used to write system software, including the Unix kernel. It evolved from an earlier language called B, which was itself based on the language BCPL. C's development allowed Unix to be rewritten in a high-level language, which made it much more portable.
</p>
    </post-2>
    <post-1>
<p>
Here are some DOM equivalents to the vanilla Js method for Document.write, primarily used to insert content directly into the DOM (Document Object Model) but discouraged and considered outdated due to its blocking behavior and potential to overwrite content, innerHTML textContent createElement appendChild.
</p>
    </post-1>
`;

document.write("the_post.js loaded successfully<br>");

