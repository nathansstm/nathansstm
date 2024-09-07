#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_LINE_LENGTH 1024
#define MAX_TOKENS 100

typedef enum {
    TOKEN_IDENTIFIER,
    TOKEN_NUMBER,
    TOKEN_OPERATOR,
    TOKEN_KEYWORD,
    TOKEN_UNKNOWN
} TokenType;

typedef struct {
    TokenType type;
    char value[256];
} Token;

// Function to skip whitespace
void skip_whitespace(char **current) {
    while (isspace(**current)) {
        (*current)++;
    }
}

// Function to recognize identifiers (and possibly keywords later)
void recognize_identifier(char **current, Token *tokens, int *token_count) {
    char *start = *current;
    while (isalnum(**current) || **current == '_') {
        (*current)++;
    }
    size_t length = *current - start;
    strncpy(tokens[*token_count].value, start, length);
    tokens[*token_count].value[length] = '\0';
    tokens[*token_count].type = TOKEN_IDENTIFIER;
    (*token_count)++;
}

// Function to recognize numbers
void recognize_number(char **current, Token *tokens, int *token_count) {
    char *start = *current;
    while (isdigit(**current)) {
        (*current)++;
    }
    size_t length = *current - start;
    strncpy(tokens[*token_count].value, start, length);
    tokens[*token_count].value[length] = '\0';
    tokens[*token_count].type = TOKEN_NUMBER;
    (*token_count)++;
}

// Function to recognize operators
void recognize_operator(char **current, Token *tokens, int *token_count) {
    tokens[*token_count].value[0] = **current;
    tokens[*token_count].value[1] = '\0';
    tokens[*token_count].type = TOKEN_OPERATOR;
    (*token_count)++;
    (*current)++;
}

// Function to recognize unknown tokens
void recognize_unknown(char **current, Token *tokens, int *token_count) {
    tokens[*token_count].value[0] = **current;
    tokens[*token_count].value[1] = '\0';
    tokens[*token_count].type = TOKEN_UNKNOWN;
    (*token_count)++;
    (*current)++;
}

// The main tokenization function that uses the helper functions
void tokenize(char *input, Token tokens[], int *token_count) {
    char *current = input;
    *token_count = 0;

    while (*current != '\0') {
        skip_whitespace(&current);

        if (isalpha(*current)) {
            recognize_identifier(&current, tokens, token_count);
        } else if (isdigit(*current)) {
            recognize_number(&current, tokens, token_count);
        } else if (*current == '+' || *current == '-' || *current == '*' || *current == '/') {
            recognize_operator(&current, tokens, token_count);
        } else {
            recognize_unknown(&current, tokens, token_count);
        }
    }
}

void print_tokens(Token tokens[], int token_count) {
    for (int i = 0; i < token_count; i++) {
        printf("Token: %s, Type: %d\n", tokens[i].value, tokens[i].type);
    }
}

int main() {
    char input[MAX_LINE_LENGTH];
    Token tokens[MAX_TOKENS];
    int token_count;

    printf("Welcome to the interactive REPL!!!\n");

    while (1) {
        printf("/> ");
        fgets(input, MAX_LINE_LENGTH, stdin);
        input[strcspn(input, "\n")] = 0;

        if (strcmp(input, "exit") == 0) {
            printf("Now leaving the REPL......\n");
            break;
        }

        tokenize(input, tokens, &token_count);
        print_tokens(tokens, token_count);
    }

    return 0;
}
