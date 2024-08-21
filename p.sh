#!/bin/bash


# Function to print items with a box
print_box() {
  local item="$1"
  local value="$2"
  printf " %-20s %-47s\n" "$item" "$value"
}

# Function to print multiline values with a box
print_multiline_box() {
  local item="$1"
  local value="$2"
  local line
  printf " %-20s %-47s\n" "$item" "$(echo "$value" | head -n 1)"
  echo "$value" | tail -n +2 | while IFS= read -r line; do
    printf " %-20s %-47s\n" "" "$line"
  done
}

# Function to print separator line
print_separator() {
  printf "+----------------------+---------------------------------------------\n"
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
os=$(lsb_release -d | awk -F"\t" '{print $2}')
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
clock="$(nproc) @ $(awk -F: '/cpu MHz/ {print $2; exit}' /proc/cpuinfo | xargs) MHz"
aesni=$(grep -q "aes" /proc/cpuinfo && echo "Enabled" || echo "Disabled")
vmxav=$(grep -qE "(vmx|svm)" /proc/cpuinfo && echo "Enabled" || echo "Disabled")
vm=$([ -d /proc/vz ] && echo "OpenVZ" || (grep -q "KVM" /proc/cpuinfo && echo "KVM" || (grep -q "QEMU" /proc/cpuinfo && echo "QEMU" || (dmesg | grep -q "Xen" && echo "Xen" || (grep -q "Standard PC (i440FX + PIIX, 1996)" /sys/class/dmi/id/product_name && echo "QEMU" || cat /sys/class/dmi/id/product_name)))))
mainboard=$(sudo dmidecode -t baseboard 2>/dev/null | grep 'Product Name:' | awk -F: '{print $2}' | xargs)
ip_address=$(hostname -I | awk '{print $1}')
interfaces=$(ip -o -4 addr show | awk '{print $2 " - " $4}')

# Disk I/O Benchmark with smaller buffer size
#io_test=$(dd if=/dev/zero of=testfile bs=64M count=16 oflag=direct 2>&1 | grep -o "[0-9.]\+ MB/s")

# Printing the collected information
clear
print_separator
printf "| %-60s\n" "Little Ops Script"
print_separator

print_box "Hostname" "$hostname"
print_box "Operating System" "$os"
print_box "Kernel Version" "$kernel"
print_box "Uptime" "$uptime"
print_box "Memory Usage" "$memory"
print_box "Disk Usage (Root)" "$disk_root"
print_box "CPU Model" "$cpu"
print_box "CPU Vendor" "$vendor"
print_box "CPU Cache" "$cache"
print_box "L2 Cache" "${lcache:-N/A}"
print_box "CPU Clock" "$clock"
print_box "CPU Virtualization" "$virtual"
print_box "CPU Hypervisor" "$hypervisor"
print_box "AES-NI" "$aesni"
print_box "VM-x/AMD-V" "$vmxav"
print_box "VM Type" "$vm"
print_box "Mainboard" "${mainboard:-N/A}"
print_box "IP Address" "$ip_address"
print_multiline_box "Network Interfaces" "$interfaces"
#print_box "Disk I/O Speed" "${io_test:-N/A}"

#print_separator

# Network speed tests
#print_box "Network Test" "Speed to Different Regions"
#print_separator

# Perform each test and update progress
#test_network_speed "North America" "http://speedtest-nyc1.digitalocean.com/10mb.test"
#test_network_speed "South America" "http://speedtest-gru1.digitalocean.com/10mb.test"
#test_network_speed "Africa" "http://speedtest-cpt1.digitalocean.com/10mb.test"
#test_network_speed "Europe" "http://speedtest-ams2.digitalocean.com/10mb.test"
#test_network_speed "Middle East" "http://speedtest-fra1.digitalocean.com/10mb.test"
#test_network_speed "Russia" "http://speedtest-lon1.digitalocean.com/10mb.test"
#test_network_speed "China" "http://speedtest-sgp1.digitalocean.com/10mb.test"
#test_network_speed "Australia" "http://speedtest-syd1.digitalocean.com/10mb.test"

#print_separator

# Function definitions

get_ip_info() {
    IP=$(dig +short myip.opendns.com @resolver1.opendns.com)
    echo "$IP"
}

get_hostname() {
    local ip="$1"
    HOSTNAME=$(dig +short -x "$ip" | sed 's/\.$//')
    if [[ -n "$HOSTNAME" ]]; then
        echo "$HOSTNAME"
    else
        echo "$ip"
    fi
}

get_rdns() {
    local ip="$1"
    RDNS=$(dig +short -x "$ip" | sed 's/\.$//')
    if [[ -n "$RDNS" ]]; then
        echo "$RDNS confirmed"
    else
        reverse_ip=$(echo "$ip" | awk -F. '{print $4"."$3"."$2"."$1}')
        RDNS="$reverse_ip.in-addr.arpa"
        echo "$RDNS unconfirmed"
    fi
}

check_fcrdns() {
    local ip="$1"
    local rdns="$2"
    resolved_ip=$(dig +short "$rdns" | tail -n1)
    if [[ "$resolved_ip" == "$ip" ]]; then
        echo "confirmed"
    else
        reverse_ip=$(echo "$ip" | awk -F. '{print $4"."$3"."$2"."$1}')
        if [[ "$rdns" == "$reverse_ip.in-addr.arpa" ]]; then
            echo "confirmed"
        else
            echo "unconfirmed"
        fi
    fi
}

get_asn_info() {
    local ip="$1"
    ASN=$(whois -h whois.cymru.com " -v $ip" | tail -n1 | awk '{print $1}')
    echo "$ASN"
}

# Main execution
ip=$(get_ip_info)
hostname=$(get_hostname "$ip")
RDNS=$(get_rdns "$ip")
RDNS_NO_STATUS="${RDNS%% *}"
fcrdns=$(check_fcrdns "$ip" "$RDNS_NO_STATUS") # Use RDNS for confirmation check
asn=$(get_asn_info "$ip")
asp=$(whois -h whois.cymru.com " -v $ip" | tail -n1 | awk -F'|' '{print $7}' | xargs)
# Get WHOIS information
WHOIS_INFO=$(whois $ip)

# Capture CustName, if available
ISP=$(echo "$WHOIS_INFO" | grep -i "OrgName\|Org" | head -n 1 | cut -d':' -f2 | xargs)

# If CustName is blank, fall back to capturing NetName
if [ -z "$ISP" ]; then
    ISP=$(echo "$WHOIS_INFO" | grep -i "NetName" | head -n 1 | cut -d':' -f2 | xargs)
fi

ORG=$(echo "$WHOIS_INFO" | grep -i "OrgName" | head -n 1 | cut -d':' -f2 | xargs)
COUNTRY=$(echo "$WHOIS_INFO" | grep -i "Country" | head -n 1 | cut -d':' -f2 | xargs)
ADDRESS=$(echo "$WHOIS_INFO" | grep -i "Address" | head -n 1 | cut -d':' -f2 | xargs)
REGION=$(echo "$WHOIS_INFO" | grep -i "State\|Region\|Province" | head -n 1 | cut -d':' -f2 | xargs)
ssh=$(grep -E '^Port ' /etc/ssh/sshd_config | awk '{print $2}' || echo 22)
mail=$(if [ -x /usr/sbin/sendmail ]; then echo Yes; else echo N/A; fi)
http=$(netstat -tnl | grep -q ':80 ' && echo Yes || echo N/A)
httpalt=$(netstat -tnl | grep -q ':8080 ' && echo Yes || echo N/A)
pop3=$(netstat -tnl | grep -q ':110 ' && echo Yes || echo N/A)
imap=$(netstat -tnl | grep -q ':143 ' && echo Yes || echo N/A)
https=$(netstat -tnl | grep -q ':443 ' && echo Yes || echo N/A)
mysql=$(netstat -tnl | grep -q ':3306 ' && echo Yes || echo N/A)
smtp=$(netstat -tnl | grep -q ':25 ' && echo Yes || echo N/A)
dns=$(netstat -tnl | grep -q ':53 ' && echo Yes || echo N/A)
firewall=$(if [ -x /usr/sbin/iptables ] || [ -x /usr/sbin/ufw ] || [ -x /usr/sbin/firewalld ]; then echo Yes; else echo N/A; fi)
www=$(if [ -d /var/www/html ]; then echo Yes; else echo N/A; fi)
#users=$(getent passwd | awk -F: '{print $1}' | grep -E '^root$|^' | sort | uniq | tr '\n' ' ')
#users=$(getent passwd | awk -F: '{print $1}' | grep -E '^root$|^' | sort | uniq)
users=$(awk -F: '($6 == "/root") {print $1}' /etc/passwd; awk -F: '($6 ~ /^\/home\/[^\/]+$/) {print $1}' /etc/passwd | sort | uniq)
login=$(last -a | head -n 5 | awk '{print $1","$NF}')
ping1=$(ping -c 10 ipv4.download.thinkbroadband.com | tail -1 | awk -F '/' '{if ($5 == "") print "busy"; else print int($5)"ms"}')
ping2=$(ping -c 10 www.baidu.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for China
ping3=$(ping -c 10 www.google.co.in 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for India
ping4=$(ping -c 10 www.akamai.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Middle East (Akamai has a significant presence)
ping5=$(ping -c 10 www.google.com.eg 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Egypt
ping6=$(ping -c 10 www.yandex.ru 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Moscow
ping7=$(ping -c 10 www.google.co.uk 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for London
ping8=$(ping -c 10 www.google.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Los Angeles
ping9=$(ping -c 10 www.google.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Philadelphia
perf1=$(iperf3 -c 160.242.19.254 -p 9201-9240 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec\nAverageTime 0 seconds"}')
perf2=$(iperf3 -c speedtest.myrepublic.net.id -p 9200-9240 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec\nAverageTime 0 seconds"}')
perf3=$(iperf3 -c speedtest.shinternet.ch -p 5200-5209 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec\nAverageTime 0 seconds"}')
perf4=$(iperf3 -c speedtest.sao1.edgoo.net -p 9204-9240 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec\nAverageTime 0 seconds"}')
perf5=$(iperf3 -c speedtest.optusnet.com.au -p 5201-5203 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec\nAverageTime 0 seconds"}')

# Outputting the information in an organized way
#print_separator
print_box "SSH" "$ssh"
print_box "IP Address" "$ip"
print_box "Hostname" "$hostname"
print_box "ASN" "$asn"
print_box "ASP" "$asp"
print_box "ISP" "$ISP"
print_box "Host" "$ORG"
print_box "Region" "$REGION"
print_box "Country" "$COUNTRY"
print_box "Address" "$ADDRESS"
print_box "Reverse DNS" "${RDNS#* }"
print_box "Forward DNS" "$fcrdns"
print_box "DNS" "$dns"
print_box "HTTP" "$http"
print_box "HTTPalt" "$httpalt"
print_box "HTTPS" "$https"
print_box "Sendmail" "$mail"
print_box "SMTP" "$smtp"
print_box "POP3" "$pop3"
print_box "IMAP" "$imap"
print_box "MYSQL" "$mysql"
print_box "Firewall" "$firewall"
print_box "WWW" "$www"
print_multiline_box "Users" "$users"
print_multiline_box "Last Login attempts" "$login"
print_box "Test (China)" "$ping1"
print_box "Test (China)" "$ping2"
print_box "Test (India)" "$ping3"
print_box "Test (Middle East)" "$ping4"
print_box "Test (Egypt)" "$ping5"
print_box "Test (Moscow)" "$ping6"
print_box "Test (London)" "$ping7"
print_box "Test (Los Angeles)" "$ping8"
print_box "Test (Philadelphia)" "$ping9"
print_multiline_box "Iperf (Africa)" "$perf1"
print_multiline_box "Iperf (Asia)" "$perf2"
print_multiline_box "Iperf (Europe)" "$perf3"
print_multiline_box "Iperf (Latin)" "$perf4"
print_multiline_box "Iperf (Oceania)" "$perf5"



#print_separator


print_separator

# Clean up test file
rm -f testfile

