#include <stdio.h>
#include <string.h>

// Maximum size of input strings
#define MAX_LINE_LENGTH 256

// Define the structure for type mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} TypeMapping;

// Define the structure for token mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} TokenMapping;

// Define the structure for token mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} TokenWhiteMapping;


// Define the structure for input mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} InputMapping;

// Predefined type mappings
TypeMapping type_map[] = {
    {"var"},
    {"new"},
    {"function"},
    {"typeof"}
    // Add more mappings as necessary
};

// Predefined token mappings
TokenMapping token_map[] = {
    {","},
    {"."},
    {"("},
    {")"},
    {":"},
    {"*"},
    {"}"},
    {"]"},
    {"|"},
    {"^"},
    {"%"},
    {"="},
    {"<"},
    {">"},
    {"?"}
    // Add more mappings as necessary
};

// Predefined token mappings
TokenWhiteMapping token_white_map[] = {
    {","},
    {"."},
    {"("},
    {")"},
    {":"},
    {"*"},
    {"}"},
    {"]"},
    {"|"},
    {"^"},
    {"%"},
    {"="},
    {"<"},
    {">"},
    {"?"},
    {"&"}
    // Add more mappings as necessary
};


// Predefined input mappings
InputMapping input_map[] = {
    {"!"},
    {"+"},
    {"-"},
    {"~"}
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
void error_five(const char* command);
void error_six(const char* command);
void error_seven(const char* command);


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

void error_five(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected token\n", command);
}

void error_six(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
}

void error_seven(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected token\n", command);
}


void lookup_error(const char* input) {
    int input_length = strlen(input);
    int has_whitespace = 0;
    int has_type = 0;
    int has_suffix = 0;
    int has_prefix = 0;
    int has_white_prefix = 0;
    int has_input = 0;
    const char* last_char_ptr = NULL;
    const char* first_char_ptr = NULL;
    //char first_char_str[2] = {0};  // A small string to hold the first character
    char first_char_str[2];
    
    if (input_length > 0) {
        first_char_ptr = &input[0];
        // Use first_char_ptr as needed
    }
    
    if (input_length > 0) {
        last_char_ptr = &input[input_length - 1];
        // Use last_char_ptr as needed
    }
    
    if (input_length > 0) {
        //first_char_str[0] = input[0];
        first_char_str[0] = input[0];  // Example character
        first_char_str[1] = '\0'; // Null terminator
    }
    
    // Check if input has whitespace
    for (int i = 0; i < input_length; i++) {
        if (input[i] == ' ') {
            //printf("Checking character: %c\n", input[i]);
            has_whitespace = 1;
            //printf("Whitespace found. has_whitespace is now: %d\n", has_whitespace);
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
    
    // If input matches any in SuffixMapping
    for (int i = 0; i < sizeof(token_map) / sizeof(TokenMapping); i++) {
        if (strcmp(first_char_ptr, token_map[i].type) == 0) {
            has_prefix = 1;
        }
    }
    
    // If input matches any in TokenWhiteMapping
    for (int i = 0; i < sizeof(token_white_map) / sizeof(TokenWhiteMapping); i++) {
        //printf("Checking token: %c\n", token_white_map[i]);
        if (strcmp(first_char_str, token_white_map[i].type) == 0) {
            has_white_prefix = 1;
        //printf("Setting has_white_prefix: %d\n", has_white_prefix);
        }
    }
    
    // If input matches any in InputMapping
    for (int i = 0; i < sizeof(input_map) / sizeof(InputMapping); i++) {
        if (strcmp(first_char_ptr, input_map[i].type) == 0) {
            has_input = 1;
        }
    }
    
    // If input matches any in TypeMapping
    //if (has_type == 1) {
        //type_one(input);
        //return;
    //}


    
    // If input has no white space and no quotations and no suffix match, call error_one
    if (!has_whitespace && !has_type && !has_suffix && !has_prefix && !has_white_prefix && !has_input && strchr(input, '"') == NULL) {
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
    
    // If input has no white space and prefix match, call error_five
    if (!has_whitespace && has_prefix && input_length >= 1) {
        error_five(input);
        return;
    }
    
    // If input has no white space and input match, call error_six
    if (!has_whitespace && has_input && input_length >= 1) {
        error_six(input);
        return;
    }
    
    // If input has white space and prefix match, call error_seven
    if (has_whitespace && has_white_prefix && input_length >= 1) {
        error_seven(input);
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