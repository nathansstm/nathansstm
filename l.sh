#!/bin/bash

                                 
 #      #####       ####  #    # 
 #      #    #     #      #    # 
 #      #####       ####  ###### 
 #      #    # ###      # #    # 
 #      #    # ### #    # #    # 
 ###### #####  ###  ####  #    # 

  #####    ###    #####  #       
 #     #  #   #  #     # #    #  
       # #     #       # #    #  
  #####  #     #  #####  #    #  
 #       #     # #       ####### 
 #        #   #  #            #  
 #######   ###   #######      #  



# Function to print items with a box
print_box() {
  local item="$1"
  local value="$2"
  printf "| %-20s | %-47s\n" "$item" "$value"
}

# Function to print multiline values with a box
print_multiline_box() {
  local item="$1"
  local value="$2"
  local line
  printf "| %-20s | %-47s\n" "$item" "$(echo "$value" | head -n 1)"
  echo "$value" | tail -n +2 | while IFS= read -r line; do
    printf "| %-20s | %-47s\n" "" "$line"
  done
}

# Function to print separator line
print_separator() {
  printf "+----------------------+\n"
}

# Function to test network speed to a given URL using wget
test_network_speed() {
  local region="$1"
  local url="$2"
  # Check if output is being redirected to a file
  if [ -t 1 ]; then
    # Terminal output
    printf "| %-20s | " "$region"
    printf "Progress: 0%%\r"
    wget --progress=dot "$url" 2>&1 | \
    grep --line-buffered "%" | \
    awk -v region="$region" '
      {
        split($0, a, /%/);
        progress = a[1];
        gsub(/.* /, "", progress);
        printf "\r| %-20s | Progress: %-3s", region, progress "%";
        fflush(stdout);
      }
      END {
        printf "\r| %-20s | Progress: 100%%\n", region;
      }
    '
  else
    # Output to file
    {
      wget --progress=dot "$url" 2>&1 | \
      grep --line-buffered "%" | \
      awk -v region="$region" '
        END {
          printf "| %-20s | Progress: 100%%\n", region;
        }
      '
    }
  fi
}

# Collecting system information
hostname=$(hostname)
#os=$(lsb_release -d | awk -F"\t" '{print $2}')
os=$([ -x /usr/bin/lsb_release ] && lsb_release -d | awk -F"\t" '{print $2}' || echo "")

kernel=$(uname -r)
uptime=$(uptime -p)
memory=$(free -h | awk '/Mem:/ {print $3 "/" $2}')
disk_root=$(df -h / | awk 'NR==2 {print $3 "/" $2}')
cpu=$(lscpu | grep 'Model name:' | awk -F: '{print $2}' | xargs)
vendor=$(lscpu | grep 'Vendor ID:' | awk -F: '{print $2}' | xargs)
virtual=$(lscpu | grep 'Virtualization:' | awk -F: '{print $2}' | xargs)
hypervisor=$(lscpu | grep 'Hypervisor vendor:' | awk -F: '{print $2}' | xargs)
lcache=$(lscpu | grep 'L2 cache:' | awk -F: '{print $2}' | xargs)
cache=$(lscpu | grep 'L3 cache:' | awk -F: '{print $2}' | xargs)
#clock="$(nproc) @ $(awk -F: '/cpu MHz/ {print $2; exit}' /proc/cpuinfo | xargs) MHz"
clock="$(nproc) @ $(awk -F: '/cpu MHz/ {print $2; exit}' /proc/cpuinfo | xargs | awk '{if ($1 == "") print "unknown"; else print $1}') MHz"
aesni=$(grep -q "aes" /proc/cpuinfo && echo "Enabled" || echo "Disabled")
vmxav=$(grep -qE "(vmx|svm)" /proc/cpuinfo && echo "Enabled" || echo "Disabled")
#vm=$([ -d /proc/vz ] && echo "OpenVZ" || (grep -q "KVM" /proc/cpuinfo && echo "KVM" || (grep -q "QEMU" /proc/cpuinfo && echo "QEMU" || (dmesg | grep -q "Xen" && echo "Xen" || (grep -q "Standard PC (i440FX + PIIX, 1996)" /sys/class/dmi/id/product_name && echo "QEMU" || cat /sys/class/dmi/id/product_name)))))
vm=$([ -d /proc/vz ] && echo "OpenVZ" || (grep -q "KVM" /proc/cpuinfo && echo "KVM" || (grep -q "QEMU" /proc/cpuinfo && echo "QEMU" || (dmesg 2>&1 | grep -q "Xen" && echo "Xen" || (grep -q "Standard PC (i440FX + PIIX, 1996)" /sys/class/dmi/id/product_name 2>/dev/null && echo "QEMU" || cat /sys/class/dmi/id/product_name 2>/dev/null)))))
#mainboard=$(sudo dmidecode -t baseboard 2>/dev/null | grep 'Product Name:' | awk -F: '{print $2}' | xargs)
mainboard=$([ -x /usr/sbin/dmidecode ] && dmidecode -t baseboard 2>/dev/null | grep 'Product Name:' | awk -F: '{print $2}' | xargs || echo "")
#ip_address=$(hostname -I | awk '{print $1}')
ip_address=$(hostname -I 2>/dev/null | awk 'NF > 0 {if ($2 != "") {print $2; exit} print $1; exit} END {if (NR == 0) print "127.0.0.1"}')
#interfaces=$(ip -o -4 addr show | awk '{print $2 " - " $4}')
interfaces=$([ -x /sbin/ip ] && /sbin/ip -o -4 addr show 2>/dev/null | awk '{print $2 " - " $4}' || echo "")

# Disk I/O Benchmark with smaller buffer size
# io_test=$(dd if=/dev/zero of=testfile bs=64M count=16 oflag=direct 2>&1 | grep -o "[0-9.]\+ MB/s")
io_test=$(dd if=/dev/zero of=testfile bs=64M count=16 oflag=direct 2>&1 | grep -o "[0-9.]\+ [MG]B/s")

# Printing the collected information
# Clear the screen only if running in a terminal
if [ -t 1 ]; then
  clear
fi
print_separator
printf "| %-60s\n" "Little Benchmark Script"
print_separator

print_box "Hostname" "$hostname"
print_box "Operating System" "${os:-N/a}"
print_box "Kernel Version" "$kernel"
print_box "Uptime" "$uptime"
print_box "Memory Usage" "$memory"
print_box "Disk Usage (Root)" "$disk_root"
print_box "CPU Model" "$cpu"
print_box "CPU Vendor" "$vendor"
print_box "CPU Cache" "${cache:-N/a}"
print_box "L2 Cache" "${lcache:-N/a}"
print_box "CPU Clock" "$clock"
print_box "CPU Virtualization" "${virtual:-N/a}"
print_box "CPU Hypervisor" "${hypervisor:-N/a}"
print_box "AES-NI" "$aesni"
print_box "VM-x/AMD-V" "$vmxav"
print_box "VM Type" "${vm:-N/a}"
print_box "Mainboard" "${mainboard:-N/a}"
print_box "IP Address" "${ip_address:-N/a}"
print_multiline_box "Network Interfaces" "${interfaces:-N/a}"
print_box "Disk I/O Speed" "${io_test:-N/A}"

print_separator

# Network speed tests
print_box "Network Test" "Speed to Different Regions"
print_separator

# Perform each test and update progress
test_network_speed "North America" "http://speedtest-nyc1.digitalocean.com/10mb.test"
test_network_speed "South America" "http://speedtest-gru1.digitalocean.com/10mb.test"
test_network_speed "Africa" "http://speedtest-cpt1.digitalocean.com/10mb.test"
test_network_speed "Europe" "http://speedtest-ams2.digitalocean.com/10mb.test"
test_network_speed "Middle East" "http://speedtest-fra1.digitalocean.com/10mb.test"
test_network_speed "Russia" "http://speedtest-lon1.digitalocean.com/10mb.test"
test_network_speed "China" "http://speedtest-sgp1.digitalocean.com/10mb.test"
test_network_speed "Australia" "http://speedtest-syd1.digitalocean.com/10mb.test"

print_separator

# Function definitions

get_ip_info() {
    IP=$([ -x /usr/bin/dig ] && dig +short myip.opendns.com @resolver1.opendns.com || echo "")
    if [[ -n "$IP" ]]; then
        echo "$IP"
    else
        echo "127.0.0.1"
    fi
}

get_hostname() {
    local ip="$1"
    HOSTNAME=$([ -x /usr/bin/dig ] && dig +short -x "$ip" | sed 's/\.$//' || echo "")
    if [[ -n "$HOSTNAME" ]]; then
        echo "$HOSTNAME"
    else
        echo "$ip"
    fi
}

get_rdns() {
    local ip="$1"
    RDNS=$([ -x /usr/bin/dig ] && dig +short -x "$ip" | sed 's/\.$//' || echo "")
    if [[ -n "$RDNS" ]]; then
        echo "$RDNS (confirmed)"
    else
        reverse_ip=$(echo "$ip" | awk -F. '{print $4"."$3"."$2"."$1}')
        RDNS="$reverse_ip.in-addr.arpa"
        echo "$RDNS (unconfirmed)"
    fi
}

check_fcrdns() {
    local ip="$1"
    local rdns="$2"
    resolved_ip=$([ -x /usr/bin/dig ] && dig +short "$rdns" | tail -n1 || echo "")
    if [[ "$resolved_ip" == "$ip" ]]; then
        echo "(confirmed)"
    else
        reverse_ip=$(echo "$ip" | awk -F. '{print $4"."$3"."$2"."$1}')
        if [[ "$rdns" == "$reverse_ip.in-addr.arpa" ]]; then
            echo "(confirmed)"
        else
            echo "(unconfirmed)"
        fi
    fi
}

get_asn_info() {
    local ip="$1"
    ASN=$(if [ -x "/usr/bin/whois" ]; then whois -h whois.cymru.com " -v $ip" | tail -n1 | awk '{print $1}'; else echo "N/a"; fi)
    echo "$ASN"
}

# Main execution
ip=$(get_ip_info)
hostname=$(get_hostname "$ip")
RDNS=$(get_rdns "$ip")
RDNS_NO_STATUS="${RDNS%% *}"
fcrdns=$(check_fcrdns "$ip" "$RDNS_NO_STATUS") # Use RDNS for confirmation check
asn=$(get_asn_info "$ip")
#asp=$(whois -h whois.cymru.com " -v $ip" | tail -n1 | awk -F'|' '{print $7}' | xargs)
asp=$(if [ -x "/usr/bin/whois" ]; then whois -h whois.cymru.com " -v $ip" | tail -n1 | awk -F'|' '{print $7}' | xargs; else echo "N/a"; fi)

# Get WHOIS information
#WHOIS_INFO=$(whois $ip)
WHOIS_INFO=$(if [ -x "/usr/bin/whois" ]; then whois $ip; fi)


# Capture CustName, if available
ISP=$(echo "$WHOIS_INFO" | grep -i "OrgName\|org-name" | head -n 1 | cut -d':' -f2 | xargs)

# If CustName is blank, fall back to capturing NetName
if [ -z "$ISP" ]; then
    ISP=$(echo "$WHOIS_INFO" | grep -i "Org\|NetName" | head -n 1 | cut -d':' -f2 | xargs)
fi

ORG=$(echo "$WHOIS_INFO" | grep -i "OrgName\|org-name" | head -n 1 | cut -d':' -f2 | xargs)
COUNTRY=$(echo "$WHOIS_INFO" | grep -i "Country" | head -n 1 | cut -d':' -f2 | xargs)
ADDRESS=$(echo "$WHOIS_INFO" | grep -i "Address" | head -n 1 | cut -d':' -f2 | xargs)
REGION=$(echo "$WHOIS_INFO" | grep -i "State\|Region\|Province\|country" | head -n 1 | cut -d':' -f2 | xargs)


# Outputting the information in an organized way
print_separator
print_box "IP Address" "${ip:-N/a}"
print_box "Hostname" "${hostname:-N/a}"
print_box "ASN" "${asn:-N/a}"
print_box "ASP" "${asp:-N/a}"
print_box "ISP" "${ISP:-N/a}"
print_box "Host" "${ORG:-N/a}"
print_box "Address" "${ADDRESS:-N/a}"
print_box "Region" "${REGION:-N/a}"
print_box "Country" "${COUNTRY:-N/a}"
print_box "Reverse DNS" "$RDNS"
print_box "FCrDNS" "$fcrdns"

print_separator

# Function to calculate 4K block size read speed
read_4k() {
    # Run the dd command to read 4K block size
    echo $(dd if=/dev/zero of=/dev/null bs=4k count=256k 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
}

# Function to calculate 4K block size write speed
write_4k() {
    # Run the dd command to write 4K block size
    echo $(dd if=/dev/zero of=tempfile bs=4k count=256k conv=fdatasync 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
    rm -f tempfile
}

# Function to calculate IOPS for 4K block size
calculate_iops_4k() {
    # Extract MB/s value and calculate IOPS
    local read_value=$(echo $READ4K | grep -oP '^\d+\.\d+' || echo "0.0")
    local write_value=$(echo $WRITE4K | grep -oP '^\d+\.\d+' || echo "0.0")

    local read_iops=$(awk "BEGIN { print ($read_value * 1024) / 4 }")
    local write_iops=$(awk "BEGIN { print ($write_value * 1024) / 4 }")

    echo $(awk "BEGIN { print $read_iops + $write_iops }")
}

READ4K=$(read_4k)
WRITE4K=$(write_4k)
IOPS4K=$(calculate_iops_4k)

# Printing all tests
print_box "4K Read Speed" "${READ4K:-N/a}"
print_box "4K Write Speed" "${WRITE4K:-N/a}"
print_box "4K IOPS" "${IOPS4K:-N/a} IOPS"

print_separator

# Function to calculate 6K block size read speed
read_6k() {
    # Run the dd command to read 4K block size
    echo $(dd if=/dev/zero of=/dev/null bs=6k count=256k 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
}

# Function to calculate 6K block size write speed
write_6k() {
    # Run the dd command to write 4K block size
    echo $(dd if=/dev/zero of=tempfile bs=6k count=256k conv=fdatasync 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
    rm -f tempfile
}

# Function to calculate IOPS for 4K block size
calculate_iops_6k() {
    # Extract MB/s value and calculate IOPS
    local read_value=$(echo $READ6K | grep -oP '^\d+\.\d+' || echo "0.0")
    local write_value=$(echo $WRITE6K | grep -oP '^\d+\.\d+' || echo "0.0")

    local read_iops=$(awk "BEGIN { print ($read_value * 1024) / 4 }")
    local write_iops=$(awk "BEGIN { print ($write_value * 1024) / 4 }")

    echo $(awk "BEGIN { print $read_iops + $write_iops }")
}

READ6K=$(read_6k)
WRITE6K=$(write_6k)
IOPS6K=$(calculate_iops_6k)

# Printing all tests
print_box "6K Read Speed" "${READ6K:-N/a}"
print_box "6K Write Speed" "${WRITE6K:-N/a}"
print_box "6K IOPS" "${IOPS6K:-N/a} IOPS"

print_separator

# Function to calculate 6K block size read speed
read_64k() {
    # Run the dd command to read 4K block size
    echo $(dd if=/dev/zero of=/dev/null bs=64k count=256k 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
}

# Function to calculate 6K block size write speed
write_64k() {
    # Run the dd command to write 4K block size
    echo $(dd if=/dev/zero of=tempfile bs=64k count=256k conv=fdatasync 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
    rm -f tempfile
}

# Function to calculate IOPS for 4K block size
calculate_iops_64k() {
    # Extract MB/s value and calculate IOPS
    local read_value=$(echo $READ64K | grep -oP '^\d+\.\d+')
    local write_value=$(echo $WRITE64K | grep -oP '^\d+\.\d+')

    local read_iops=$(awk "BEGIN { print ($read_value * 1024) / 4 }")
    local write_iops=$(awk "BEGIN { print ($write_value * 1024) / 4 }")

    echo $(awk "BEGIN { print $read_iops + $write_iops }")
}

READ64K=$(read_64k)
WRITE64K=$(write_64k)
IOPS64K=$(calculate_iops_64k)

# Printing all tests
print_box "64K Read Speed" "${READ64K:-N/a}"
print_box "64K Write Speed" "${WRITE64K:-N/a}"
print_box "64K IOPS" "${IOPS64K:-N/a} IOPS"

print_separator

# Function to calculate 6K block size read speed
read_512k() {
    # Run the dd command to read 4K block size
    echo $(dd if=/dev/zero of=/dev/null bs=512k count=256k 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
}

# Function to calculate 6K block size write speed
write_512k() {
    # Run the dd command to write 4K block size
    echo $(dd if=/dev/zero of=tempfile bs=512k count=256k conv=fdatasync 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
    rm -f tempfile
}

# Function to calculate IOPS for 4K block size
calculate_iops_512k() {
    # Extract MB/s value and calculate IOPS
    local read_value=$(echo $READ512K | grep -oP '^\d+\.\d+')
    local write_value=$(echo $WRITE512K | grep -oP '^\d+\.\d+')

    local read_iops=$(awk "BEGIN { print ($read_value * 1024) / 4 }")
    local write_iops=$(awk "BEGIN { print ($write_value * 1024) / 4 }")

    echo $(awk "BEGIN { print $read_iops + $write_iops }")
}

READ512K=$(read_512k)
WRITE512K=$(write_512k)
IOPS512K=$(calculate_iops_512k)

# Printing all tests
print_box "512K Read Speed" "${READ512K:-N/a}"
print_box "512K Write Speed" "${WRITE512K:-N/a}"
print_box "512K IOPS" "${IOPS512K:-N/a} IOPS"

print_separator

# Function to calculate 6K block size read speed
read_1m() {
    # Run the dd command to read 4K block size
    echo $(dd if=/dev/zero of=/dev/null bs=1M count=256k 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
}

# Function to calculate 6K block size write speed
write_1m() {
    # Run the dd command to write 4K block size
    echo $(dd if=/dev/zero of=tempfile bs=1M count=256k conv=fdatasync 2>&1 | grep -oP '\d+\.\d+ \w+/s' | tail -1)
    rm -f tempfile
}

# Function to calculate IOPS for 4K block size
calculate_iops_1m() {
    # Extract MB/s value and calculate IOPS
    local read_value=$(echo $READ1M | grep -oP '^\d+\.\d+')
    local write_value=$(echo $WRITE1M | grep -oP '^\d+\.\d+')

    local read_iops=$(awk "BEGIN { print ($read_value * 1024) / 4 }")
    local write_iops=$(awk "BEGIN { print ($write_value * 1024) / 4 }")

    echo $(awk "BEGIN { print $read_iops + $write_iops }")
}

READ1M=$(read_1m)
WRITE1M=$(write_1m)
IOPS1M=$(calculate_iops_1m)

# Printing all tests
print_box "1Mi Read Speed" "${READ1M:-N/a}"
print_box "1Mi Write Speed" "${WRITE1M:-N/a}"
print_box "1Mi IOPS" "${IOPS1M:-N/a} IOPS"

print_separator

# Clean up test file
rm -f testfile

