# colors-lamp

## Overview

The Colors Lab is a full-stack web application that allows users to create an account, log in securely, and manage a personal collection of saved colors. After logging in, users can add new colors to their account and search through previously saved colors using a simple search feature.

This project demonstrates the setup and deployment of a complete LAMP-stack (Linux, Apache, MySQL, PHP) web application hosted on a remote server (DigitalOcean), including:

- Hosting a live website using Apache
- Creating and populating a MySQL database
- Building backend API endpoints using PHP
- Connecting the frontend interface to the backend API
- Supporting user authentication and color data storage per user

Once completed, the application is accessible through a custom domain and provides a working example of a database-driven web app deployed on a real Linux server.

## Technologies Used

### Front end

- HTML5 – Application structure
- CSS3 – Layout and styling
- JavaScript (ES6) – Client-side logic and API communication

### Back end

- PHP – Server-side API logic
- MySQL – Data persistence

### Other tools

 - Digital Ocean - Server Hosting
 - LAMP Stack - Deployment Environment
 - Github - Repository

## Setup
- Create a DigitalOcean droplet using the LAMP Marketplace image (Ubuntu).

- SSH into the server and confirm Apache/PHP/MySQL are installed.

- Create the COP4331 MySQL database and required tables (Users, Colors, Contacts).

- Create a MySQL user for the web app and grant privileges.

- Upload frontend files (index.html, color.html, css/, js/, images/) to /var/www/html.

- Upload backend API files (Login.php, AddColor.php, SearchColors.php) to /var/www/html/LAMPAPI.

- Update the database connection credentials inside the PHP API files.

- Point your domain DNS record to the droplet’s IP address

## How to Run Application

- Open a browser and go to:

- http://(your-domain) or http://(droplet-ip-address)

- Log in using a valid account stored in the database.

- After logging in, you can add colors and search saved colors linked to your user.

## Structure

colors-lamp/

│

├── api/

│   ├── Login.php

│   ├── SearchColors.php

│   └── AddColor.php

│

├── public/

│   ├── index.html

│   ├── color.html

│   └── js/

│       └── code.js

│

├── README.md

└── LICENSE

 
## AI Usage
AI tools were used during development to assist with:

- Writing and formatting documentation (README)

- Debugging PHP, MySQL, and JavaScript issues

- Assisting with basic server setup and deployment troubleshooting (Apache/DigitalOcean)
