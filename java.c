#include <stdio.h>
#include <string.h>

#define MAX_ERRORS 150
#define MAX_LINE_LENGTH 256

typedef struct {
    char command[MAX_LINE_LENGTH];
    char error_message[MAX_LINE_LENGTH];
} ErrorMapping;

// Predefined error mappings based on the commands provided
//ErrorMapping error_map[MAX_ERRORS] = {
//    {"${single}", "Error on line 1: Uncaught ReferenceError: ${single} is not defined"},
//    {"console.log\"\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
//    {"console.log\"${value}\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
//    {"console.log \"\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
//    {"console.log \"${value}\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
//    {"console.log(\"\");", ""},
    // Add other error mappings here
//    ...
//};
// /> console.log""
// Command: console.log"" -> Error on line 1: Uncaught ReferenceError: console.log""og""og""og""og"
// Received input, evaluate......
// /> console.log"value"
// Command: console.log"value" -> Error on line 1: Uncaught ReferenceError: console.log"value"og"value"og"val
// Received input, evaluate......
// />
// Better with ${single}, ${value}
// ${single} new
// ${value} is working already




// Predefined error mappings based on the commands provided
ErrorMapping error_map[MAX_ERRORS] = {
    {"${single}", "Error on line 1: Uncaught ReferenceError: ${single} is not defined"},
    {"console.log \"Hello, World!\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log 'Hello, World!'", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log \"\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log \"${value}\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log \"\"${value}", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log ${value}\"\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log ''", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log ;", ""},
    {"console.log\"\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log\"\";", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log\"${value}\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log\"${value}\";", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"console.log(\"\");", ""},
    {"console.log('');", ""},
    {"console", ""},
    {"console;", ""},
    {"console.log;", ""},
    {"console.log();", ""},
    {"\"Hello, World!\"", ""},
    {"'Hello, World!'", ""},
    {"document", ""},
    {"document.write", ""},
    {"window", ""},
    {"window.location", ""},
    {"\"\"", ""},
    {"\"\";", ""},
    {"''", ""},
    {"'';", ""},
    {";", ""},
    {"let a", ""},
    {"let a;", ""},
    {"let (a)", "Error on line 1: Uncaught ReferenceError: let is not defined"},
    {"let a()", "Error on line 1: Uncaught SyntaxError: Unexpected token '('"},
    {"let a\"", "Error on line 1: Uncaught SyntaxError: Invalid or unexpected token"},
    {"let a'", "Error on line 1: Uncaught SyntaxError: Invalid or unexpected token"},
    {"let a\"\"", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"let a''", "Error on line 1: Uncaught SyntaxError: Unexpected string"},
    {"let a=", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"let =", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"let", "Error on line 1: Uncaught ReferenceError: let is not defined"},
    {"let a=\"\"", ""},
    {"var a", ""},
    {"var a;", ""},
    {"public a;", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"static a;", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"private a;", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"public let", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'let'"},
    {"public let a;", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'let'"},
    {"private let", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'let'"},
    {"private let a", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'let'"},
    {"static let", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'let'"},
    {"static let a", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'let'"},
    {"const a", "Error on line 1: Uncaught SyntaxError: Missing initializer in const declaration"},
    {"const a;", "Error on line 1: Uncaught SyntaxError: Missing initializer in const declaration"},
    {"const a=\"\"", ""},
    {"const a=\"\";", ""},
    {"static const a", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"static const", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"static const a;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"public const", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"public const;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"private const", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"private const;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"static var", "Error on line 1: Uncaught SyntaxError: Unexpected token 'var'"},
    {"static var;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'var'"},
    {"public var", "Error on line 1: Uncaught SyntaxError: Unexpected token 'var'"},
    {"public var;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'var'"},
    {"private var", "Error on line 1: Uncaught SyntaxError: Unexpected token 'var'"},
    {"private var;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'var'"},
    {"static", "Error on line 1: Uncaught ReferenceError: static is not defined"},
    {"static ;", "Error on line 1: Uncaught ReferenceError: static is not defined"},
    {"class", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"Class", "Error on line 1: Uncaught ReferenceError: Class is not defined"},
    {"class a", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"class a;", "Error on line 1: Uncaught SyntaxError: Unexpected token ';'"},
    {"class a{}", ""},
    {"Class a{}", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"class{}", "Error on line 1: Uncaught SyntaxError: Unexpected token '{'"},
    {"class a{}", ""},
    {"class ;", "Error on line 1: Uncaught SyntaxError: Unexpected token ';'"},
    {"function", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"function a", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"function a;", "Error on line 1: Uncaught SyntaxError: Unexpected token ';'"},
    {"function {}", "Error on line 1: Uncaught SyntaxError: Unexpected token '{'"},
    {"function a{}", "Error on line 1: Uncaught SyntaxError: Unexpected token '{'"},
    {"function ()", "Error on line 1: Uncaught SyntaxError: Function statements require a function name"},
    {"function (){}", "Error on line 1: Uncaught SyntaxError: Function statements require a function name"},
    {"function a(){}", ""},
    {"function a(){}", ""},
    {"public function", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"public function a(){}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"private function", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"private function a(){}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"static function", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"static function a(){}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"var function", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"var function;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"var function a(){}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"let function a(){}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"var a function a(){}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'function'"},
    {"var a=function(){}", ""},
    {"let a=function(){}", ""},
    {"const a=function(){}", ""},
    {"public a=function(){}", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"private a=function(){}", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"static a=function(){}", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"public class", "Error on line 1: Uncaught SyntaxError: Unexpected token 'class'"},
    {"public class a{}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'class'"},
    {"static class", "Error on line 1: Uncaught SyntaxError: Unexpected token 'class'"},
    {"static class a{}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'class'"},
    {"private class", "Error on line 1: Uncaught SyntaxError: Unexpected token 'class'"},
    {"private class a{}", "Error on line 1: Uncaught SyntaxError: Unexpected token 'class'"},
    {"var a=\"\"", ""},
    {"var a=\"\";", ""},
    {"var a=const a;", "Error on line 1: Uncaught SyntaxError: Unexpected token 'const'"},
    {"var a=let a;", "Error on line 1: Uncaught SyntaxError: Unexpected identifier 'a'"},
    {"var a=let;", "Error on line 1: Uncaught ReferenceError: let is not defined"},
    {"var a=null", ""},
    {"=", "Unexpected token '='"},
    {"=\"\"", "Unexpected token '='"},
    {"=;", "Unexpected token '='"},
    {"\"\"=", "Invalid left-hand side in assignment"},
    {"\"\"", ""},
    {"''", ""},
    {"\"\"=\"\"", "Invalid left-hand side in assignment"},
    {"\"\"=\"\";", "Invalid left-hand side in assignment"},
    {"a", "Error on line 1: Uncaught ReferenceError: let is not defined"},
    {"a;", "Error on line 1: Uncaught ReferenceError: let is not defined"},
    {"()", "Error on line 1: Uncaught SyntaxError: Unexpected token ')'"},
    {"{}", ""},
    {"$", "Error on line 1: Uncaught ReferenceError: $ is not defined"},
    {"#", "Error on line 1: Uncaught SyntaxError: Invalid or unexpected token"},
    {",", "Error on line 1: Uncaught SyntaxError: Unexpected token ','"},
    {".", "Error on line 1: Uncaught SyntaxError: Unexpected token '.'"},
    {"_", "Error on line 1: Uncaught ReferenceError: _ is not defined"},
    {"&", "Error on line 1: Uncaught SyntaxError: Unexpected token '&'"},
    {"+", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"*", "Error on line 1: Uncaught SyntaxError: Unexpected token '*'"},
    {"-", "Error on line 1: Uncaught SyntaxError: Unexpected end of input"},
    {"0", ""},
    {"1", ""},
    {"a", "Error on line 1: Uncaught ReferenceError: a is not defined"},
    {"/", "Error on line 1: Uncaught SyntaxError: Invalid regular expression: missing /"}
};



void lookup_error(const char* command) {
    for (int i = 0; i < MAX_ERRORS; i++) {
        // Check for exact match
        if (strcmp(error_map[i].command, command) == 0) {
            printf("Command: %s -> %s\n", command, error_map[i].error_message);
            return;
        }

        // Check for pattern match with ${single} placeholder
        char* single_placeholder = strstr(error_map[i].command, "${single}");
        if (single_placeholder != NULL) {
            // Ensure the command is a single word (no spaces) and matches the pattern exactly
            if (strchr(command, ' ') == NULL && strchr(command, '"') == NULL && strchr(command, '(') == NULL && strchr(command, ')') == NULL) {
                // Replace ${single} in the error message with the actual command
                char error_message[MAX_LINE_LENGTH];
                strncpy(error_message, error_map[i].error_message, MAX_LINE_LENGTH);
                char* single_pos = strstr(error_message, "${single}");
                if (single_pos != NULL) {
                    snprintf(single_pos, MAX_LINE_LENGTH - (single_pos - error_message), "%s%s", command, single_pos + strlen("${single}"));
                }

                printf("Command: %s -> %s\n", command, error_message);
                return;
            }
        }

        // Check for pattern match with ${value} placeholder
        char* value_placeholder = strstr(error_map[i].command, "${value}");
        if (value_placeholder != NULL) {
            // Split the command at the placeholder
            char prefix[MAX_LINE_LENGTH];
            char suffix[MAX_LINE_LENGTH];

            strncpy(prefix, error_map[i].command, value_placeholder - error_map[i].command);
            prefix[value_placeholder - error_map[i].command] = '\0';  // Null-terminate the prefix

            strcpy(suffix, value_placeholder + strlen("${value}"));  // Suffix after ${value}

            // Check if the input matches the pattern (prefix + any value + suffix)
            if (strncmp(command, prefix, strlen(prefix)) == 0 &&
                strcmp(command + strlen(command) - strlen(suffix), suffix) == 0) {
                printf("Command: %s -> %s\n", command, error_map[i].error_message);
                return;
            }
        }
    }

    printf("Command: %s -> Not found in the error map.\n", command);
}


int main() {
    char input[MAX_LINE_LENGTH];

    printf("Welcome to the interactive REPL!!!!!!\n");

    while (1) {
        printf("/> ");
        fgets(input, MAX_LINE_LENGTH, stdin);
        input[strcspn(input, "\n")] = 0;  // Remove trailing newline

        // Check if the input is the "exit" command
        if (strcmp(input, "exit") == 0) {
            printf("Now leaving the REPL......\n");
            break;
        }

        // Lookup error based on input command
        lookup_error(input);

        // Print the received input message if no match found
        printf("Received input, evaluate......\n");
    }

    return 0;
}