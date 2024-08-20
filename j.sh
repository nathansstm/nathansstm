#!/bin/bash

###
### Document: For Commands Functions
###  Required to run this script
###  You can use any package manager to
###  'search' and 'install' 
###
###
### @name      netstat
### @type      command
### @value     Displays network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
### @function  netstat is used to monitor incoming and outgoing network connections.
###
###
### @name      ifconfig
### @type      command
### @value     Configures network interfaces.
### @function  ifconfig is used to configure, control, and query TCP/IP network interface parameters from a command line.
###
###
### @name      lscpu
### @type      command
### @value     Displays information about the CPU architecture.
### @function  lscpu provides detailed information about the CPU and its architecture.
###
###
### @name      dig
### @type      command
### @value     Queries DNS servers for information about domains.
### @function  dig is used for performing DNS lookups and troubleshooting DNS issues.
###
###
### @name      dmidecode
### @type      command
### @value     Dumps a computer's DMI (Desktop Management Interface) table contents in a human-readable format.
### @function  dmidecode retrieves hardware information about the system from the DMI tables.
###
###
### @name      whois
### @type      command
### @value     Retrieves domain ownership and registration information.
### @function  whois queries domain name registries to get information about the domain name owners.
###
###
### @name      ping
### @type      command
### @value     Tests the reachability of a host on an IP network.
### @function  ping sends ICMP echo request packets to network hosts to test their connectivity.
###
###
### @name      iperf3
### @type      command
### @value     Measures the maximum TCP and UDP bandwidth performance between two systems.
### @function  iperf3 is used to test network bandwidth between two hosts.
###
### Additional: 

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
#clock="$(nproc) @ $(awk -F: '/cpu MHz/ {print $2; exit}' /proc/cpuinfo | xargs || echo 'unknown') MHz"
clock="$(nproc) @ $(awk -F: '/cpu MHz/ {print $2; exit}' /proc/cpuinfo | xargs | awk '{if ($1 == "") print "unknown"; else print $1}') MHz"
aesni=$(grep -q "aes" /proc/cpuinfo && echo "Enabled" || echo "Disabled")
vmxav=$(grep -qE "(vmx|svm)" /proc/cpuinfo && echo "Enabled" || echo "Disabled")
vm=$([ -d /proc/vz ] && echo "OpenVZ" || (grep -q "KVM" /proc/cpuinfo && echo "KVM" || (grep -q "QEMU" /proc/cpuinfo && echo "QEMU" || (dmesg 2>&1 | grep -q "Xen" && echo "Xen" || (grep -q "Standard PC (i440FX + PIIX, 1996)" /sys/class/dmi/id/product_name 2>/dev/null && echo "QEMU" || cat /sys/class/dmi/id/product_name 2>/dev/null)))))
#mainboard=$(sudo dmidecode -t baseboard 2>/dev/null | grep 'Product Name:' | awk -F: '{print $2}' | xargs)
mainboard=$([ -x /usr/sbin/dmidecode ] && dmidecode -t baseboard 2>/dev/null | grep 'Product Name:' | awk -F: '{print $2}' | xargs || echo "")
#ip_address=$(hostname -I 2>/dev/null | awk '{print $1}')
ip_address=$(hostname -I 2>/dev/null | awk 'NF > 0 {if ($2 != "") {print $2; exit} print $1; exit} END {if (NR == 0) print "127.0.0.1"}')
#interfaces=$(ip -o -4 addr show | awk '{print $2 " - " $4}')
interfaces=$([ -x /sbin/ip ] && /sbin/ip -o -4 addr show 2>/dev/null | awk '{print $2 " - " $4}' || echo "")

# Disk I/O Benchmark with smaller buffer size
#io_test=$(dd if=/dev/zero of=testfile bs=64M count=16 oflag=direct 2>&1 | grep -o "[0-9.]\+ MB/s")

# Printing the collected information
# Clear the screen only if running in a terminal
if [ -t 1 ]; then
  clear
fi
print_separator
printf "| %-60s\n" "Little Ops Script"
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
#print_box "Disk I/O Speed" "${io_test:-N/a}"

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
    resolved_ip=$([ -x /usr/bin/dig ] && dig +short "$rdns" | tail -n1 || echo "")
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

# Check if whois command exists and assign WHOIS_INFO
WHOIS_INFO=$(if [ -x "/usr/bin/whois" ]; then whois $ip; fi)

# Capture CustName, if available
ISP=$(echo "$WHOIS_INFO" | grep -i "OrgName\|org-name" | head -n 1 | cut -d':' -f2 | xargs)
# ISP=$(echo "$WHOIS_INFO" | awk -F':' '/org-name/ { print $2; exit } /Org/ { print $2; exit }' | xargs)
# echo -e "org:orgname\norg-name:name" | grep -i "org-name\|Org" | head -n 1 | cut -d':' -f2 | xargs

# If CustName is blank, fall back to capturing NetName
if [ -z "$ISP" ]; then
    ISP=$(echo "$WHOIS_INFO" | grep -i "Org\|NetName" | head -n 1 | cut -d':' -f2 | xargs)
fi


ORG=$(echo "$WHOIS_INFO" | grep -i "OrgName\|org-name" | head -n 1 | cut -d':' -f2 | xargs)
COUNTRY=$(echo "$WHOIS_INFO" | grep -i "Country" | head -n 1 | cut -d':' -f2 | xargs)
ADDRESS=$(echo "$WHOIS_INFO" | grep -i "Address" | head -n 1 | cut -d':' -f2 | xargs)
REGION=$(echo "$WHOIS_INFO" | grep -i "State\|Region\|Province\|country" | head -n 1 | cut -d':' -f2 | xargs)
#ssh=$(grep -E '^Port ' /etc/ssh/sshd_config | awk '{print $2}' || echo 22)
ssh=$(if [ -f /etc/ssh/sshd_config ]; then grep -E '^Port ' /etc/ssh/sshd_config | awk '{print $2}' || echo 22; else echo 22; fi)
mail=$(if [ -x /usr/sbin/sendmail ]; then echo Yes; else echo N/a; fi)
#http=$(netstat -tnl | grep -q ':80 ' && echo Yes || echo N/a)
http=$(netstat -tnl 2>/dev/null | grep -q ':80 ' && echo Yes || echo N/a)
httpalt=$(netstat -tnl 2>/dev/null | grep -q ':8080 ' && echo Yes || echo N/a)
pop3=$(netstat -tnl 2>/dev/null | grep -q ':110 ' && echo Yes || echo N/a)
imap=$(netstat -tnl 2>/dev/null | grep -q ':143 ' && echo Yes || echo N/a)
https=$(netstat -tnl 2>/dev/null | grep -q ':443 ' && echo Yes || echo N/a)
mysql=$(netstat -tnl 2>/dev/null | grep -q ':3306 ' && echo Yes || echo N/a)
smtp=$(netstat -tnl 2>/dev/null | grep -q ':25 ' && echo Yes || echo N/a)
dns=$(netstat -tnl 2>/dev/null | grep -q ':53 ' && echo Yes || echo N/a)
firewall=$(if [ -x /usr/sbin/iptables ] || [ -x /usr/sbin/ufw ] || [ -x /usr/sbin/firewalld ]; then echo Yes; else echo N/A; fi)
www=$(if [ -d /var/www/html ]; then echo Yes; else echo N/A; fi)
#users=$(getent passwd | awk -F: '{print $1}' | grep -E '^root$|^' | sort | uniq | tr '\n' ' ')
#users=$(getent passwd | awk -F: '{print $1}' | grep -E '^root$|^' | sort | uniq)
users=$(awk -F: '($6 == "/root") {print $1}' /etc/passwd; awk -F: '($6 ~ /^\/home\/[^\/]+$/) {print $1}' /etc/passwd | sort | uniq)
login=$(last -a | head -n 5 | awk '{print $1","$NF}')
ping1=$(ping -c 10 ipv4.download.thinkbroadband.com 2>&1 | tail -1 | awk -F '/' '{if ($5 == "") print "busy"; else print int($5)"ms"}')
ping2=$(ping -c 10 www.baidu.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for China
ping3=$(ping -c 10 www.google.co.in 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for India
ping4=$(ping -c 10 www.akamai.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Middle East (Akamai has a significant presence)
ping5=$(ping -c 10 www.google.com.eg 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Egypt
ping6=$(ping -c 10 www.yandex.ru 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Moscow
ping7=$(ping -c 10 www.google.co.uk 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for London
ping8=$(ping -c 10 www.google.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Los Angeles
ping9=$(ping -c 10 www.google.com 2>&1 | tail -1 | awk -F '/' '{if ($5 ~ /^[0-9.]+$/) print int($5)"ms"; else print "busy"}')  # Example for Philadelphia

# https://github.com/esnet/iperf/releases/tag/3.16
perf1=$(iperf3 -c 160.242.19.254 -p 9201-9240 2>&1 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec"}')
perf2=$(iperf3 -c speedtest.myrepublic.net.id -p 9200-9240 2>&1 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec"}')
perf3=$(iperf3 -c speedtest.shinternet.ch -p 5200-5209 2>&1 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec"}')
perf4=$(iperf3 -c speedtest.sao1.edgoo.net -p 9204-9240 2>&1 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec"}')
perf5=$(iperf3 -c speedtest.optusnet.com.au -p 5201-5203 2>&1 | awk '/sender/ {send=$7} /receiver/ {recv=$7} END {print "Send " int(send) "Mbits/sec\nRecv " int(recv) "Mbits/sec"}')

iping1=$(ping -c 10 160.242.19.254 | awk -F'/' '/^rtt/ {printf "%.0fms\n", $5}')
iping2=$(ping -c 10 speedtest.myrepublic.net.id | awk -F'/' '/^rtt/ {printf "%.0fms\n", $5}')
iping3=$(ping -c 10 speedtest.shinternet.ch | awk -F'/' '/^rtt/ {printf "%.0fms\n", $5}')
iping4=$(ping -c 10 speedtest.sao1.edgoo.net | awk -F'/' '/^rtt/ {printf "%.0fms\n", $5}')
iping5=$(ping -c 10 speedtest.optusnet.com.au | awk -F'/' '/^rtt/ {printf "%.0fms\n", $5}')

# jshell1=$(jshell <(echo 'import java.net.NetworkInterface; import java.util.Enumeration; Enumeration<NetworkInterface> networkInterfaces = NetworkInterface.getNetworkInterfaces(); while (networkInterfaces.hasMoreElements()) { NetworkInterface ni = networkInterfaces.nextElement(); String status = ni.isUp() ? "Up" : "Down"; System.out.println(ni.getName() + ", " + status); }' && echo '/exit') -q)
# jshell2=$(jshell <(echo 'import java.net.InetSocketAddress; import java.nio.ByteBuffer; import java.nio.channels.DatagramChannel; import java.util.concurrent.Executor; import java.util.concurrent.Executors; import java.util.concurrent.atomic.AtomicLong; AtomicLong totalPackets = new AtomicLong(); DatagramChannel ch = DatagramChannel.open(); ch.bind(new InetSocketAddress(5555)); ch.configureBlocking(false); Executor pool = Executors.newCachedThreadPool(); Runnable sendLoop = () -> { try { ByteBuffer buf = ByteBuffer.allocateDirect(1000); InetSocketAddress remoteAddr = new InetSocketAddress("127.0.0.1", 5556); while (true) { buf.clear(); ch.send(buf, remoteAddr); totalPackets.incrementAndGet(); } } catch (Exception e) { e.printStackTrace(); } }; for (int i = 0; i < 10; i++) { pool.execute(sendLoop); } long startTime = System.currentTimeMillis(); Thread.sleep(3000); totalPackets.set(0); Thread.sleep(5000); long endTime = System.currentTimeMillis(); long totalPacketsSent = totalPackets.get(); long elapsedTimeMs = endTime - startTime; double elapsedTimeSec = elapsedTimeMs / 1000.0; long totalBitsSent = totalPacketsSent * 8000; double mbps = totalBitsSent / (elapsedTimeSec * 1_000_000.0); System.out.println(totalPacketsSent + " packets Sent " + elapsedTimeMs + " ms " + String.format("%.2f", mbps) + " Mbits/sec");' && echo '/exit') -q)

jshell1=$(jshell <(echo '
import java.net.NetworkInterface; 
import java.util.Enumeration; 
Enumeration<NetworkInterface> networkInterfaces = NetworkInterface.getNetworkInterfaces(); 
while (networkInterfaces.hasMoreElements()) { 
NetworkInterface ni = networkInterfaces.nextElement(); 
String status = ni.isUp() ? "Up" : "Down"; 
System.out.println(ni.getName() + ", " + status); 
}
' && echo '/exit') -q)
jshell2=$(jshell <(echo '
import java.net.InetSocketAddress; 
import java.nio.ByteBuffer; 
import java.nio.channels.DatagramChannel; 
import java.util.concurrent.Executor; 
import java.util.concurrent.Executors; 
import java.util.concurrent.atomic.AtomicLong; 
AtomicLong totalPackets = new AtomicLong(); 
DatagramChannel ch = DatagramChannel.open(); 
ch.bind(new InetSocketAddress(5555)); 
ch.configureBlocking(false); 
Executor pool = Executors.newCachedThreadPool(); 
long bufferSize = 1000;
Runnable sendLoop = () -> {
try { 
ByteBuffer buf = ByteBuffer.allocateDirect((int) bufferSize); 
InetSocketAddress remoteAddr = new InetSocketAddress("127.0.0.1", 5556); 
while (true) { 
buf.clear(); 
ch.send(buf, remoteAddr); 
totalPackets.incrementAndGet(); 
} 
} catch (Exception e) { 
e.printStackTrace(); 
} 
}; 
for (int i = 0; i < 10; i++) { 
pool.execute(sendLoop); 
} 
long startTime = System.currentTimeMillis(); 
Thread.sleep(3000); 
totalPackets.set(0); 
Thread.sleep(5000); 
long endTime = System.currentTimeMillis(); 
long totalPacketsSent = totalPackets.get(); 
long elapsedTimeMs = endTime - startTime; 
double elapsedTimeSec = elapsedTimeMs / 1000.0; 
long totalBitsSent = totalPacketsSent * 8000; 
double mbps = totalBitsSent / (elapsedTimeSec * 1_000_000.0); 
System.out.println(totalPacketsSent + " " + bufferSize + "Bi packets Sent " + elapsedTimeMs + " ms " + String.format("%.2f", mbps) + " Mbits/sec");
' && echo '/exit') -q)

jshell3=$(jshell <(echo '
import java.net.InetSocketAddress; 
import java.nio.ByteBuffer; 
import java.nio.channels.DatagramChannel; 
import java.util.concurrent.Executor; 
import java.util.concurrent.Executors; 
import java.util.concurrent.atomic.AtomicLong; 
AtomicLong totalPackets = new AtomicLong(); 
DatagramChannel ch = DatagramChannel.open(); 
ch.bind(new InetSocketAddress(5555)); 
ch.configureBlocking(false); 
Executor pool = Executors.newCachedThreadPool(); 
long bufferSize = 512;
Runnable sendLoop = () -> {
try { 
ByteBuffer buf = ByteBuffer.allocateDirect((int) bufferSize); 
InetSocketAddress remoteAddr = new InetSocketAddress("127.0.0.1", 5556); 
while (true) { 
buf.clear(); 
ch.send(buf, remoteAddr); 
totalPackets.incrementAndGet(); 
} 
} catch (Exception e) { 
e.printStackTrace(); 
} 
}; 
for (int i = 0; i < 10; i++) { 
pool.execute(sendLoop); 
} 
long startTime = System.currentTimeMillis(); 
Thread.sleep(3000); 
totalPackets.set(0); 
Thread.sleep(5000); 
long endTime = System.currentTimeMillis(); 
long totalPacketsSent = totalPackets.get(); 
long elapsedTimeMs = endTime - startTime; 
double elapsedTimeSec = elapsedTimeMs / 1000.0; 
long totalBitsSent = totalPacketsSent * 8000; 
double mbps = totalBitsSent / (elapsedTimeSec * 1_000_000.0); 
System.out.println(totalPacketsSent + " " + bufferSize + "Bi packets Sent " + elapsedTimeMs + " ms " + String.format("%.2f", mbps) + " Mbits/sec");
' && echo '/exit') -q)

jshell4=$(jshell <(echo '
import java.net.InetSocketAddress; 
import java.nio.ByteBuffer; 
import java.nio.channels.DatagramChannel; 
import java.util.concurrent.Executor; 
import java.util.concurrent.Executors; 
import java.util.concurrent.atomic.AtomicLong; 
AtomicLong totalPackets = new AtomicLong(); 
DatagramChannel ch = DatagramChannel.open(); 
ch.bind(new InetSocketAddress(5555)); 
ch.configureBlocking(false); 
Executor pool = Executors.newCachedThreadPool(); 
long bufferSize = 256;
Runnable sendLoop = () -> {
try { 
ByteBuffer buf = ByteBuffer.allocateDirect((int) bufferSize); 
InetSocketAddress remoteAddr = new InetSocketAddress("127.0.0.1", 5556); 
while (true) { 
buf.clear(); 
ch.send(buf, remoteAddr); 
totalPackets.incrementAndGet(); 
} 
} catch (Exception e) { 
e.printStackTrace(); 
} 
}; 
for (int i = 0; i < 10; i++) { 
pool.execute(sendLoop); 
} 
long startTime = System.currentTimeMillis(); 
Thread.sleep(3000); 
totalPackets.set(0); 
Thread.sleep(5000); 
long endTime = System.currentTimeMillis(); 
long totalPacketsSent = totalPackets.get(); 
long elapsedTimeMs = endTime - startTime; 
double elapsedTimeSec = elapsedTimeMs / 1000.0; 
long totalBitsSent = totalPacketsSent * 8000; 
double mbps = totalBitsSent / (elapsedTimeSec * 1_000_000.0); 
System.out.println(totalPacketsSent + " " + bufferSize + "Bi packets Sent " + elapsedTimeMs + " ms " + String.format("%.2f", mbps) + " Mbits/sec");
' && echo '/exit') -q)

jshell5=$(jshell <(echo '
import java.net.InetSocketAddress; 
import java.nio.ByteBuffer; 
import java.nio.channels.DatagramChannel; 
import java.util.concurrent.Executor; 
import java.util.concurrent.Executors; 
import java.util.concurrent.atomic.AtomicLong; 
AtomicLong totalPackets = new AtomicLong(); 
DatagramChannel ch = DatagramChannel.open(); 
ch.bind(new InetSocketAddress(5555)); 
ch.configureBlocking(false); 
Executor pool = Executors.newCachedThreadPool(); 
long bufferSize = 64;
Runnable sendLoop = () -> {
try { 
ByteBuffer buf = ByteBuffer.allocateDirect((int) bufferSize); 
InetSocketAddress remoteAddr = new InetSocketAddress("127.0.0.1", 5556); 
while (true) { 
buf.clear(); 
ch.send(buf, remoteAddr); 
totalPackets.incrementAndGet(); 
} 
} catch (Exception e) { 
e.printStackTrace(); 
} 
}; 
for (int i = 0; i < 10; i++) { 
pool.execute(sendLoop); 
} 
long startTime = System.currentTimeMillis(); 
Thread.sleep(3000); 
totalPackets.set(0); 
Thread.sleep(5000); 
long endTime = System.currentTimeMillis(); 
long totalPacketsSent = totalPackets.get(); 
long elapsedTimeMs = endTime - startTime; 
double elapsedTimeSec = elapsedTimeMs / 1000.0; 
long totalBitsSent = totalPacketsSent * 8000; 
double mbps = totalBitsSent / (elapsedTimeSec * 1_000_000.0); 
System.out.println(totalPacketsSent + " " + bufferSize + "Bi packets Sent " + elapsedTimeMs + " ms " + String.format("%.2f", mbps) + " Mbits/sec");
' && echo '/exit') -q)

# Outputting the information in an organized way
#print_separator
print_box "SSH" "${ssh:-N/a}"
print_box "IP Address" "${ip:-N/a}"
print_box "Hostname" "${hostname:-N/a}"
print_box "ASN" "${asn:-N/a}"
print_box "ASP" "${asp:-N/a}"
print_box "ISP" "${ISP:-N/a}"
print_box "Host" "${ORG:-N/a}"
print_box "Address" "${ADDRESS:-N/a}"
print_box "Region" "${REGION:-N/a}"
print_box "Country" "${COUNTRY:-N/a}"
# print_box "Address" "${ADDRESS:-N/a}"
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
print_multiline_box "Iperf (Africa)" "$perf1 Latency $iping1"
print_multiline_box "Iperf (Asia)" "$perf2 Latency $iping2"
print_multiline_box "Iperf (Europe)" "$perf3 Latency $iping3"
print_multiline_box "Iperf (Latin)" "$perf4 Latency $iping4"
print_multiline_box "Iperf (Oceania)" "$perf5 Latency $iping5"

print_multiline_box "JVM:" "$jshell1"
print_box "JVM:" "$jshell2"
print_box "JVM:" "$jshell3"
print_box "JVM:" "$jshell4"
print_box "JVM:" "$jshell5"

#print_separator


print_separator

# Clean up test file
rm -f testfile







