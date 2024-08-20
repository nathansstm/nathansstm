#!/bin/sh
# No spoofing
if [ -e /proc/sys/net/ipv4/conf/all/rp_filter ] 
then 
for filtre in /proc/sys/net/ipv4/conf/*/rp_filter 
do 
echo 1 > $filtre 
done 
fi
# No icmp
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all 
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts
#load some modules you may need
modprobe ip_tables 
modprobe ip_nat_ftp 
modprobe ip_nat_irc 
modprobe iptable_filter 
modprobe iptable_nat 
modprobe ip_conntrack_irc 
modprobe ip_conntrack_ftp
# Remove all rules and chains
iptables -F 
iptables -X
# first set the default behaviour => accept 
# connections
iptables -P INPUT ACCEPT 
iptables -P OUTPUT ACCEPT 
iptables -P FORWARD ACCEPT
# Create 2 chains, it allows to write a clean script
iptables -N FIREWALL 
iptables -N TRUSTED
# Allow ESTABLISHED and RELATED incoming connection
iptables -A FIREWALL -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT
#SSH
iptables -A FIREWALL -i eth0 -p tcp -m tcp --dport 9922 -m state --state NEW -j ACCEPT
iptables -A FIREWALL -i eth0 -p tcp -m tcp --sport 9922 -m state --state NEW -j ACCEPT
iptables -A FIREWALL -i eth0 -p udp -m udp --dport 9922 -m state --state NEW -j ACCEPT
iptables -A FIREWALL -i eth0 -p udp -m udp --sport 9922 -m state --state NEW -j ACCEPT
#WEB
iptables -A FIREWALL -i eth0 -p tcp -m tcp --dport 8080 -m state --state NEW -j ACCEPT
iptables -A FIREWALL -i eth0 -p tcp -m tcp --sport 8080 -m state --state NEW -j ACCEPT
iptables -A FIREWALL -i eth0 -p udp -m udp --dport 8080 -m state --state NEW -j ACCEPT
iptables -A FIREWALL -i eth0 -p udp -m udp --sport 8080 -m state --state NEW -j ACCEPT
# Allow loopback traffic
iptables -A FIREWALL -i lo -j ACCEPT
# Send all package to the TRUSTED chain
iptables -A FIREWALL -j TRUSTED
# DROP all other packets
iptables -A FIREWALL -j DROP
# DROP INCOMING MALFORMED XMAS PACKETS
iptables -A INPUT -p tcp --tcp-flags ALL ALL -j DROP
# DROP INVALID
iptables -A INPUT -m state --state INVALID -j DROP
# DROP INCOMING MALFORMED NULL PACKETS
iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
# Send all INPUT packets to the FIREWALL chain
iptables -A INPUT -j FIREWALL
# DROP all forward packets, we don't share internet 
# connection in this example
iptables -A FORWARD -j DROP
# Allow loopback interface traffic
iptables -A TRUSTED -i lo -j ACCEPT 
iptables -A TRUSTED -o lo -j ACCEPT
# Allow amule 
#iptables -A TRUSTED -i eth0 -p udp -m udp --dport 5349 -j ACCEPT 
#iptables -A TRUSTED -i eth0 -p udp -m udp --dport 5351 -j ACCEPT 
#iptables -A TRUSTED -i eth0 -p tcp -m tcp --dport 5348 -j ACCEPT
# Allow bittorrent 
#iptables -A TRUSTED -i eth0 -p tcp -m tcp --dport 6881:6889 -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 21 -m state --state NEW,ESTABLISHED -j ACCEPT
#FTP
iptables -A TRUSTED -p tcp -m tcp --dport 21 -m state --state NEW,ESTABLISHED -j ACCEPT 
iptables -A TRUSTED -p tcp -m tcp --sport 20 -m state --state ESTABLISHED,RELATED -j ACCEPT
#SSH
iptables -A TRUSTED -p tcp -m tcp --dport 22 -m state --state NEW,ESTABLISHED -j DROP
#DNS
iptables -A TRUSTED -p tcp -m tcp --dport 53 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p udp -m udp --dport 53 -m state --state NEW,ESTABLISHED -j DROP
#HTTP
iptables -A TRUSTED -p tcp -m tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT 
iptables -A TRUSTED -p tcp -m tcp --sport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
#HTTPS
iptables -A TRUSTED -p tcp -m tcp --dport 443 -m state --state NEW,ESTABLISHED -j ACCEPT 
iptables -A TRUSTED -p tcp -m tcp --sport 443 -m state --state NEW,ESTABLISHED -j ACCEPT 
iptables -A TRUSTED -p tcp -m tcp --dport 3306 -m state --state NEW,ESTABLISHED -j ACCEPT 
iptables -A TRUSTED -p tcp -m tcp --dport 110 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 465 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 485 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 587 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 995 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 8443 -m state --state NEW,ESTABLISHED -j DROP 
iptables -A TRUSTED -p tcp -m tcp --dport 8447 -m state --state NEW,ESTABLISHED -j DROP
#SSH
iptables -A TRUSTED -p tcp -m tcp --dport 9922 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A TRUSTED -p tcp -m tcp --sport 9922 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A TRUSTED -p udp -m udp --dport 9922 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A TRUSTED -p udp -m udp --sport 9922 -m state --state NEW,ESTABLISHED -j ACCEPT
#WEB
iptables -A TRUSTED -p tcp -m tcp --dport 8080 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A TRUSTED -p tcp -m tcp --sport 8080 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A TRUSTED -p udp -m udp --dport 8080 -m state --state NEW,ESTABLISHED -j ACCEPT
iptables -A TRUSTED -p udp -m udp --sport 8080 -m state --state NEW,ESTABLISHED -j ACCEPT

# End message
echo " [End iptables rules setting]"


