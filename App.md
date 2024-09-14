# App.md


    # Serve static JavaScript files and other assets from /var/www/apps
    location /apps/ {
        root /var/www;
        try_files $uri $uri/ /apps/index.html;
    }



