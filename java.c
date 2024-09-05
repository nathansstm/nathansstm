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

// Define the structure for token mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} TokenNoWhiteMapping;


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

// Predefined token mappings
TokenNoWhiteMapping token_no_white_map[] = {
    {","},
    {"."},
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
    {"~"},
    {"`"}
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

// Define the structure for input mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} TokenInputMapping;

// Predefined input mappings
TokenInputMapping token_input_map[] = {
    {"#"},
    {"\\"}
    // Add more mappings as necessary
};

// Define the structure for missing mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} MissingMapping;

// Predefined missing mappings
MissingMapping missing_map[] = {
    {"/"}
    // Add more mappings as necessary
};

// Define the structure for border mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} BorderMapping;

// Predefined border mappings
BorderMapping border_map[] = {
    {"\"\""},
    {"''"},
    {"``"}
    // Add more mappings as necessary
};

// Define the structure for border mapping
typedef struct {
    const char* type;
} SuffixBorderMapping;

// Predefined border mappings
SuffixBorderMapping suffix_border_map[] = {
    {"\"\""},
    {"''"},
    {"``"}
    // Add more mappings as necessary
};

// Define the structure for suffix mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} SuffixInputMapping;

// Predefined border mappings
SuffixInputMapping suffix_input_map[] = {
    {"="},
    {"%"},
    {"^"},
    {"`"},
    {">"},
    {"<"},
    {"|"},
    {"["},
    {"."},
    {","},
    {"?"},
    {"-"},
    {"+"},
    {"("},
    {"&"},
    {"%"},
    {"/"},
    {"*"}
    // Add more mappings as necessary
};

// Define the structure for border mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} SuffixInvalidMapping;

// Predefined suffix mappings
SuffixInvalidMapping suffix_invalid_map[] = {
    {"@"},
    {"#"},
    {"\""},
    {"'"}
    // Add more mappings as necessary
};

// Define the structure for border mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} SuffixTokenMapping;

// Predefined suffix mappings
SuffixTokenMapping suffix_token_map[] = {
    {"}"},
    {"{"},
    {"]"},
    {")"},
    {"!"}
    // Add more mappings as necessary
};

// Define the structure for prefix mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} PrefixInputMapping;

// Predefined border mappings
PrefixInputMapping prefix_input_map[] = {
    {"="},
    {"%"},
    {"^"},
    {"`"},
    {"\""},
    {"'"},
    {">"},
    {"<"},
    {"|"},
    {"]"},
    {"["},
    {"."},
    {","},
    {"?"},
    {"!"},
    {"#"},
    {":"},
    {";"},
    {"-"},
    {"+"},
    {")"},
    {"("},
    {"}"},
    {"{"},
    {"&"},
    {"/"},
    {"\\"},
    {"*"},
    {"@"}
    // Add more mappings as necessary
};

// Define the structure for prefix mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} PrefixEndMapping;

// Predefined prefix mappings
PrefixEndMapping prefix_end_map[] = {
    {"{"},
    {"("},
    {"["},
    {";"}
    // Add more mappings as necessary
};

// Define the structure for prefix mapping
typedef struct {
    char type[MAX_LINE_LENGTH];
} PrefixEndMissMapping;

// Predefined prefix mappings
PrefixEndMissMapping prefix_end_miss_map[] = {
    {"{"},
    {"("},
    {"["},
    {";"}
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
void error_eight(const char* command);
void error_nine(const char* command);
void error_ten(const char* command);
void error_eleven(const char* command);
void error_twelve(const char* command);
void error_thirteen(const char* command);
void error_fourteen(const char* command);
void error_fifteen(const char* command);
void error_sixteen(const char* command);


// Define the error handling functions
void error_one(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught ReferenceError: %s is not defined\n", command, command);
} // not defined

void error_two(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected string\n", command);
} // string

void error_three(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
} // end of input


void error_four(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
} // end of input

void error_five(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected token\n", command);
} // token

void error_six(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
} // end of input

void error_seven(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected token\n", command);
} // token

void error_eight(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected token\n", command);
} // token

void error_nine(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Invalid or unexpected token\n", command);
} // or unexpected token

void error_ten(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Invalid regular expression: missing %s\n", command, command);
} // missing 

void error_eleven(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
} // end of input

void error_twelve(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Invalid or unexpected token\n", command);
} // or unexpected token

void error_thirteen(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected token\n", command);
} // token

// Define the error handling functions
void error_fourteen(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught ReferenceError: %s is not defined\n", command, command);
} // not defined

void error_fifteen(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
} // end of input

void error_sixteen(const char* command) {
    printf("Command: %s -> Error on line 1: Uncaught SyntaxError: Unexpected end of input\n", command);
} // end of input


void lookup_error(const char* input) {
    int input_length = strlen(input);
    int has_whitespace = 0;
    int has_type = 0;
    int has_suffix = 0;
    int has_prefix = 0;
    int has_white_prefix = 0;
    int has_no_white_prefix = 0;
    int has_input = 0;
    int has_token_input = 0;
    int has_missing = 0;
    int has_border = 0;
    int has_suffix_input = 0;
    int has_suffix_border = 0;
    int has_suffix_invalid = 0;
    int has_suffix_token = 0;
    int balance = 0;
    int has_token_balance = 0;
    int has_prefix_input = 0;
    int has_boundary = 0;
    int has_prefix_end = 0;
    int has_suffix_end = 0;
    int has_prefix_end_miss = 0;
    int has_prefix_end_found = 0;
    
    const char* last_char_ptr = NULL;
    const char* first_char_ptr = NULL;
    //char first_char_str[2] = {0};  // A small string to hold the first character
    char first_char_str[2];
    char first_no_char_str[2];
    const char* input_ptr = NULL;
    char input_char_str[2];

    
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
    
    if (input_length > 0) {
        //first_char_str[0] = input[0];
        first_no_char_str[0] = input[0];  // Example character
        first_no_char_str[1] = '\0'; // Null terminator
    }

    if (input_length > 0) {
        input_ptr = input;
        // Use input_ptr as needed
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
    
    // If input matches any in TokenMapping
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
    
    // If input matches any in TokenNoWhiteMapping
    for (int i = 0; i < sizeof(token_no_white_map) / sizeof(TokenNoWhiteMapping); i++) {
        //printf("Checking token: %c\n", token_no_white_map[i]);
        if (strcmp(first_char_str, token_no_white_map[i].type) == 0) {
            has_no_white_prefix = 1;
        //printf("Setting has_no_white_prefix: %d\n", has_white_prefix);
        }
    }
    
    // If input matches any in InputMapping
    for (int i = 0; i < sizeof(input_map) / sizeof(InputMapping); i++) {
        if (strcmp(first_char_ptr, input_map[i].type) == 0) {
            has_input = 1;
        }
    }
    
    // If input matches any in TokenInputMapping
    for (int i = 0; i < sizeof(token_input_map) / sizeof(TokenInputMapping); i++) {
        if (strcmp(first_char_ptr, token_input_map[i].type) == 0) {
            has_token_input = 1;
        }
    }
    
    // If input matches any in MissingMapping
    for (int i = 0; i < sizeof(missing_map) / sizeof(MissingMapping); i++) {
        if (strcmp(first_char_ptr, missing_map[i].type) == 0) {
            has_missing = 1;
        }
    }
    
    // If input matches any in BorderMapping
    for (int i = 0; i < sizeof(border_map) / sizeof(BorderMapping); i++) {
        if (strcmp(input_ptr, border_map[i].type) == 0) {
            has_border = 1;
        }
    }
    
    // If input matches any in SuffixBorderMapping
    for (int i = 0; i < sizeof(suffix_border_map) / sizeof(SuffixBorderMapping); i++) {
        if (strcmp(&input[input_length - 2], suffix_border_map[i].type) == 0) {
            has_suffix_border = 1;
        }
    }
    
    // If input matches any in SuffixInputMapping
    for (int i = 0; i < sizeof(suffix_input_map) / sizeof(SuffixInputMapping); i++) {
        if (strcmp(last_char_ptr, suffix_input_map[i].type) == 0) {
            has_suffix_input = 1;
        }
    }
    
    // If input matches any in SuffixInvalidMapping
    for (int i = 0; i < sizeof(suffix_invalid_map) / sizeof(SuffixInvalidMapping); i++) {
        if (strcmp(last_char_ptr, suffix_invalid_map[i].type) == 0) {
            has_suffix_invalid = 1;
        }
    }
    
    // If input matches any in SuffixTokenMapping
    for (int i = 0; i < sizeof(suffix_token_map) / sizeof(SuffixTokenMapping); i++) {
        if (strcmp(last_char_ptr, suffix_token_map[i].type) == 0) {
            has_suffix_token = 1;
        }
    }
    
    // If input matches any in PrefixInputMapping
    for (int i = 0; i < sizeof(prefix_input_map) / sizeof(PrefixInputMapping); i++) {
        if (strcmp(first_char_str, prefix_input_map[i].type) == 0) {
            has_prefix_input = 1;
        }
    }
    
    // If input matches any in PrefixEndMapping
    for (int i = 0; i < sizeof(prefix_end_map) / sizeof(PrefixEndMapping); i++) {
        if (strcmp(first_char_str, prefix_end_map[i].type) == 0) {
            has_prefix_end = 1;
        }
    }
    
    // If input matches any in PrefixEndMissMapping
    for (int i = 0; i < input_length; i++) {
            input_char_str[0] = input[i];  // Example character
            input_char_str[1] = '\0'; // Null terminator
//printf("Checking character: %s\n", input_char_str);
        for (int n = 0; n < sizeof(prefix_end_miss_map) / sizeof(PrefixEndMissMapping); n++) {
            if (strcmp(input_char_str, prefix_end_miss_map[n].type) == 0) {
                has_prefix_end_found = 1;
            }
        }
            if (!has_prefix_end_found) {
                has_prefix_end_miss = 1;
            }
                has_prefix_end_found = 0;
    }
    
    // If input matches any in TypeMapping
    //if (has_type == 1) {
        //type_one(input);
        //return;
    //}
    
    for (int i = 0; input[i] != '\0'; ++i) {
        if (input[i] == '(') {
            balance++;
        } else if (input[i] == ')') {
            balance--;
        }
        if (input[i] == '(' || input[i] == ')') {
            has_boundary = 1;
        }
        // If balance goes negative, it means there's a closing parenthesis without a matching opening parenthesis.
        if (balance < 0) {
            break;
        }
    }
    
    // If balance is 0, all parentheses are properly enclosed.
    if (balance == 0 && has_boundary) {
        has_token_balance = 1;
    }

    // If balance is 0, all parentheses are properly enclosed.
    //if (has_token_balance && has_suffix_token) {
    //if (balance && has_boundary && has_suffix_token) {
//printf("Checking balance: %d\n", balance);
        //has_token_balance = 0;
    //}
    
    
    // If input has no white space and no quotations and no suffix match, call error_one
    if (!has_whitespace && !has_type && !has_suffix && !has_prefix && !has_white_prefix && !has_input && !has_token_input && !has_missing && !has_border && !has_prefix_input && !has_suffix_input && !has_suffix_invalid && !has_suffix_token && strchr(input, '"') == NULL && strchr(input, ';') == NULL) {
        error_one(input);
        return;
    } // not defined, value

    // If input has no white space and suffix equals two quotations, call error_two
    if (!has_whitespace && input_length > 2 && strcmp(&input[input_length - 2], "\"\"") == 0) {
        error_two(input);
        return;
    } // string,n""
//printf("Checking SuffixMapping: %d\n", has_suffix);
    // If input has no white space and has type match, call error_three
    if (!has_whitespace && has_type) {
        error_three(input);
        return;
    } // end of input, TypeMapping
    
    // If input has no white space and suffix match, call error_four
    if (!has_whitespace && has_suffix && input_length >= 1 && strncmp(&input[0], "*", 1) != 0) {
//printf("Checking SuffixMapping: %d\n", strcmp(&input[0], "*"));
//printf("Checking PrefixInputMissMapping: %d\n", has_prefix_end_miss);
        error_four(input);
        return;
    } // end of input, SuffixMapping
    
    // If input has no white space and prefix match, call error_five
    if (!has_whitespace && has_prefix && input_length >= 1) {
        error_five(input);
        return;
    } // token, TokenMapping
//printf("Checking InputMapping: %d\n", has_input);
    // If input has no white space and input match, call error_six
    if (!has_whitespace && has_input && input_length >= 1) {
        error_six(input);
        return;
    } // end of input, InputMapping
    
    // If input has white space and prefix match, call error_seven
    if (has_whitespace && has_white_prefix && input_length >= 1) {
        error_seven(input);
        return;
    } // token, TokenWhiteMapping
    
    // If input has no white space and prefix match, call error_eight
    if (!has_whitespace && has_no_white_prefix && input_length >= 1) {
        error_eight(input);
        return;
    } // token, TokenNoWhiteMapping
    
    // If input has no white space and input match, call error_nine
    if (!has_whitespace && has_token_input && input_length >= 1) {
        error_nine(input);
        return;
    } // or unexpected token, TokenInputMapping
    
    // If input has no white space and input match, call error_ten
    if (!has_whitespace && has_missing && input_length >= 1) {
        error_ten(input);
        return;
    } // missing, MissingMapping
    
    // If input has no white space and suffix match, call error_eleven
    if (!has_whitespace && has_suffix_input && !has_border && !has_suffix_border && !has_prefix_input && input_length > 2) {
//printf("Checking PrefixInputMapping: %d\n", has_prefix_input);
        error_eleven(input);
        return;
    } // end of input, SuffixInputMapping
    
    // If input has no white space and suffix match, call error_twelve
    if (!has_whitespace && has_suffix_invalid && !has_border && !has_suffix_border && input_length >= 2) {
        error_twelve(input);
        return;
    } // or unexpected token
//printf("Checking SuffixTokenMapping: %d\n", has_token_balance);

    // If input has no white space and suffix match, call error_thirteen
    if (!has_whitespace && has_suffix_token && !has_border && !has_suffix_border && !has_prefix_input && !has_token_balance && input_length >= 2) {
//printf("Checking SuffixTokenMapping: %d\n", has_token_balance);
//printf("Checking PrefixInputMapping: %d\n", has_prefix_input);
        error_thirteen(input);
        return;
    } // token, SuffixTokenMapping
    
    // If input has no white space and no quotations and no suffix match, call error_one
    if (!has_whitespace && !has_prefix_input && has_token_balance && input_length >= 2) {
//printf("Checking SuffixTokenMapping: %d\n", has_token_balance);
        error_fourteen(input);
        return;
    } // not defined
    
    // If input has no white space and input match, call error_fifteen
    if (!has_whitespace && has_prefix_end && !has_token_balance && input_length > 2) {
//printf("Checking SuffixTokenMapping: %d\n", has_token_balance);
        error_fifteen(input);
        return;
    } // end of input, InputMapping
    
//printf("Checking PrefixInputMissMapping: %d\n", has_prefix_end_miss);
    // If input has no white space and input match, call error_fifteen
    if (!has_whitespace && !has_prefix_end_miss && has_prefix_end && input_length >= 2 && strncmp(&input[0], "*", 1) != 0) {
//printf("Checking PrefixInputMissMapping: %d\n", has_prefix_end_miss);
//printf("Checking SuffixTokenMapping: %d\n", has_token_balance);
        error_sixteen(input);
        return;
    } // end of input, InputMapping


        //printf("Checking SuffixInputMapping: \n");

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
