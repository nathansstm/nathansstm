#!/bin/sh
RETVAL=0
# To start the firewall
start() { 
  echo -n "Iptables rules creation: " 
/etc/StartIptables.sh
RETVAL=0
}
# To stop the firewall
stop() { 
  echo -n "Removing all iptables rules: " 
/etc/FlushIptables.sh
RETVAL=0
}
case $1 
in 
  start) 
start
    ;;
  stop) 
stop
    ;;
  restart) 
stop 
start
    ;;
  status) 
/sbin/iptables -L 
/sbin/iptables -t nat -L 
RETVAL=0
    ;;
  *) 
echo "Usage: firewalls 
    {start|
stop|restart|status}" 
RETVAL=1
esac 
exit


