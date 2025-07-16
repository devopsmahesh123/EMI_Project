let's deploy it directly to your AWS EC2 instance. Here's the full step-by-step guide that includes cloning the repo, setting up the server, and going live:

🚀 Full Deployment of EMI_Project to AWS EC2

🛠️ Prerequisites
- You’ve launched an EC2 Ubuntu instance with HTTP (port 80) and SSH (port 22) allowed.
- You have your `.pem` key file downloaded for SSH access.


✅ Step 1: SSH Into Your EC2 Instance

ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip

Make sure your `.pem` file is secure:

chmod 400 /path/to/your-key.pem


---

✅ Step 2: Install Nginx and Git

sudo apt update
sudo apt - y install nginx 

Ensure Nginx is running:

sudo systemctl enable nginx
sudo systemctl start nginx

✅ Step 3: Clone Your Repository

git clone https://github.com/devopsmahesh123/EMI_Project.git

---
✅ Step 4: Deploy Your Project

Remove default welcome page:

sudo rm /var/www/html/index.nginx-debian.html

Copy your files to Nginx's default web directory:

sudo cp EMI_Project/* /var/www/html/


Restart Nginx to serve your files:

sudo systemctl restart nginx

✅ Step 5: Test Your Website

Open your browser and visit:

http://your-ec2-public-ip

You should now see your EMI Project in action!


