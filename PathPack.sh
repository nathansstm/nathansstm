#!/bin/bash

# Intro message
echo "Welcome to the interactive package evaluator script."

# Function to set up and run the command based on directory existence
check_install() {
    local dir_path="$1"
    local package_name="$2"

    if [ -f "$dir_path" ]; then
        echo "Directory exists. Running install for $package_name."
    else
        echo "Missing directory. Installing $package_name."
    fi

    # Run the apt-get install command regardless of directory existence
    apt-get install "$package_name"
}

# Function to ask a Yes/No question
ask_question() {
    local question="$1"
    local dir_path="$2"
    local package_name="$3"
    local attempts=0
    local max_attempts=5
    local answer

    while [ $attempts -lt $max_attempts ]; do
        # Ask the question
        echo ""
        read -p "$question (Y/N): " answer
        case $answer in
            [Yy]) 
                echo "Running command..."
                check_install "$dir_path" "$package_name"
                echo "Cleaning Up"
                break
                ;;
            [Nn])
                echo "Moving on..."
                break
                ;;
            *)
                echo "Invalid response"
                attempts=$((attempts + 1))
                ;;
        esac
    done

    if [ $attempts -ge $max_attempts ]; then
        echo "Max attempts reached. Moving on..."
    fi
}

# Check for the -R flag
read_only_mode=false
if [[ "$1" == "-R" ]]; then
    read_only_mode=true
fi

# List of packages and corresponding directory paths
packages=(
    "/usr/sbin/haproxy haproxy"
    "/path/to/directory libuv1"
    "/path/to/directory libuv1-dev"
    "/path/to/directory libuvc-dev"
    "/path/to/directory libuvc0"
    "/usr/bin/g++ g++"
    "/usr/bin/gcc gcc"
    "/path/to/directory glibc-source"
    "/path/to/directory binutils"
    "/path/to/directory build-essential"
    "/usr/bin/ccache ccache"
    "/usr/bin/cmake cmake"
    "/usr/bin/dnstop dnstop"
    "/path/to/directory dnsutils"
    "/usr/sbin/dmidecode dmidecode"
    "/sbin/ip iproute2"
    "/usr/sbin/iptables iptables"
    "/path/to/directory libc6-dev"
    "/path/to/directory libgccjit-10-dev"
    "/usr/bin/lsb_release lsb-release"
    "/usr/bin/openssl openssl"
    "/usr/bin/rkhunter rkhunter"
    "/usr/bin/pkg-config pkg-config"
    "/usr/bin/python3 python3"
    "/path/to/directory python3-dev"
    "/path/to/directory python3-websockets"
    "/path/to/directory python3-pip"
    "/usr/bin/tcpdump tcpdump"
    "/usr/bin/websocketd websocketd"
    "/usr/bin/whois whois"
    "/path/to/directory libv8-dev"
)

# Process packages
for package_info in "${packages[@]}"; do
    dir_path=$(echo "$package_info" | awk '{print $1}')
    package_name=$(echo "$package_info" | awk '{print $2}')

    if $read_only_mode; then
        echo "Read package path: $dir_path name: $package_name"
    else
        # Ask the question if not in read-only mode
        ask_question "Evaluating $package_name, continue?" "$dir_path" "$package_name"
    fi
done

# Final message
echo "All done. Exiting the script."



