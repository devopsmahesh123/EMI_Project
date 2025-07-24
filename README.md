let's deploy it directly to your AWS EC2 instance. Here's the full step-by-step guide that includes cloning the repo, setting up the server, and going live:

🚀 Full Deployment of EMI_Project to AWS EC2

🛠️ Prerequisites
- You’ve launched an EC2 Ubuntu instance with HTTP (port 80) and SSH (port 22) allowed.
- You have your `.pem` key file downloaded for SSH access.


✅ Step 1: SSH Into Your EC2 Instance

Make sure your `.pem` file is secure:
```bash
chmod 400 /path/to/your-key.pem
```
```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

✅ Step 2: Install Nginx and Git
```bash
sudo apt update
sudo apt - y install nginx 
```

✅ Step 3: Clone Your Repository
```bash
git clone https://github.com/devopsmahesh123/EMI_Project.git
```
---
✅ Step 4: Deploy Your Project

Remove default welcome page:
```bash
sudo rm /var/www/html/index.nginx-debian.html
```
Copy your files to Nginx's default web directory:
```bash
sudo cp ~/EMI_Project/* /var/www/html/
```

Restart Nginx to serve your files:
```bash
sudo systemctl restart nginx
```
✅ Step 5: Test Your Website

Open your browser and visit:
```bash
http://your-ec2-public-ip
```
You should now see your EMI Project in action!


## 🚀 Deploy EMI Project on AWS EC2 Using Docker

This guide walks you through deploying a static HTML-based EMI Calculator using Docker and Nginx on an AWS EC2 instance (Free Tier).

---

### 🔹 Step 1: Launch & Configure Your EC2 Instance

1. **Launch EC2 Instance**
   - Use **Ubuntu 22.04 LTS**.
   - Ensure **ports 22 (SSH)** and **80 (HTTP)** are open in the security group.

2. **Connect via SSH**
   ```bash
   chmod 400 /path/to/your-key.pem
   ssh -i /path/to/your-key.pem ubuntu@<your-ec2-public-ip>
   ```

---

### 🔹 Step 2: Install Docker & Clone Project

1. **Update packages**
   ```bash
   sudo apt update -y
   ```

2. **Install Docker**
   ```bash
   curl -fsSL https://get.docker.com -o install-docker.sh
   sudo sh install-docker.sh
   sudo usermod -aG docker $USER
   newgrp docker
   docker --version
   ```

3. **Clone Your EMI Project**
   ```bash
   git clone https://github.com/devopsmahesh123/EMI_Project.git
   cd EMI_Project
   ```

---

### 🔹 Step 3: Create and Build Dockerfile

1. **Create `Dockerfile`**
   ```bash
   vi Dockerfile
   ```

   Press `i` and paste the following code:
   ```Dockerfile
   # Use official Nginx image
   FROM nginx:alpine

   # Copy static files to Nginx default directory
   COPY . /usr/share/nginx/html

   # Expose port 80
   EXPOSE 80
   ```

   Press `Esc`, then type `:wq!` and press Enter to save and exit.

2. **Build Docker Image**
   ```bash
   docker build -t emiapp .
   docker images
   ```

3. **Run Docker Container**
   ```bash
   docker run -dt --name emi -p 80:80 emiapp:latest
   ```

---

### 🔹 Step 4: Test Your Website

- Open your browser and visit:
  ```
  http://<your-ec2-public-ip>
  ```

- You should see the EMI Project live! 🖥️✨


