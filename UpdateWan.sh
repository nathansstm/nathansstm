#!/bin/bash

# Get the current IP address of wlan0
IP=$(ifconfig | grep -A1 'wlan0' | grep 'inet ' | awk '{print $2}')

# Update the server_name directive in the nginx config
sudo sed -i "s/server_name .*/server_name $IP;/" /etc/nginx/sites-available/default

# Reload nginx to apply the changes
sudo /usr/sbin/nginx -s reload