#include <stdio.h>
#include <string.h>

// Maximum size of input strings
#define MAX_LINE_LENGTH 256

// Define the structure for type mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} TypeMapping;

// Predefined type mappings
TypeMapping type_map[] = {
    {"var"},
    {"new"},
    {"function"},
    {"typeof"}
    // Add more mappings as necessary
};

// Define the structure for type mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} SuffixMapping;

// Predefined type mappings
SuffixMapping suffix_map[] = {
    {"("}
    // Add more mappings as necessary
};

// Declare the error functions before using them
void error_one(const char* command);
void error_two(const char* command);
void error_three(const char* command);
void error_four(const char* command);


// Define the error handling functions
void error_one(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught ReferenceError: %s is not defined\n", command, command);
}

void error_two(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected string\n", command);
}

void error_three(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
}


void error_four(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
}


void lookup_error(const char* input) {
    int input_length = strlen(input);
    int has_whitespace = 0;
    int has_type = 0;
    int has_suffix = 0;
    const char* last_char_ptr = NULL;
    
    if (input_length > 0) {
        last_char_ptr = &input[input_length - 1];
        // Use last_char_ptr as needed
    }
    // Check if input has whitespace
    for (int i = 0; i < input_length; i++) {
        if (input[i] == ' ') {
            has_whitespace = 1;
            break;
        }
    }
    
    // If input matches any in TypeMapping
    for (int i = 0; i < sizeof(type_map) / sizeof(TypeMapping); i++) {
        if (strcmp(input, type_map[i].type) == 0) {
            has_type = 1;
        }
    }
    
    // If input matches any in SuffixMapping
    for (int i = 0; i < sizeof(suffix_map) / sizeof(SuffixMapping); i++) {
        if (strcmp(last_char_ptr, suffix_map[i].type) == 0) {
            has_suffix = 1;
        }
    }
    
    // If input matches any in TypeMapping
    //if (has_type == 1) {
        //type_one(input);
        //return;
    //}


    
    // If input has no white space and no quotations and no suffix match, call error_one
    if (!has_whitespace && !has_type && !has_suffix && strchr(input, '"') == NULL) {
        error_one(input);
        return;
    }

    // If input has no white space and suffix equals two quotations, call error_two
    if (!has_whitespace && input_length >= 2 && strcmp(&input[input_length - 2], "\"\"") == 0) {
        error_two(input);
        return;
    }
    
    // If input has no white space and has type match, call error_three
    if (!has_whitespace && has_type) {
        error_three(input);
        return;
    }

    // If input has no white space and suffix match, call error_four
    if (!has_whitespace && has_suffix && input_length >= 1) {
        error_four(input);
        return;
    }
    
    
    printf("Command: %s -> Not found in the error map.\n", input);
}

int main() {
    char input[MAX_LINE_LENGTH];

    printf("Welcome to the interactive REPL!!!\n");

    while (1) {
        printf("/> ");
        fgets(input, MAX_LINE_LENGTH, stdin);
        input[strcspn(input, "\n")] = 0;

        if (strcmp(input, "exit") == 0) {
            printf("Now leaving the REPL......\n");
            break;
        }

        lookup_error(input);
        printf("Received input, evaluate......\n");
    }

    return 0;
}