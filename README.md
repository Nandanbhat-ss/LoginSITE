[README.md](https://github.com/user-attachments/files/23453532/README.md)
# 🚀 Login-App (Full Stack Project Deployment on AWS with Docker & MySQL)

A full-stack **Node.js + Express + MySQL** application deployed on **AWS EC2** using **Docker**.  
This project demonstrates how to containerize a backend, connect to a remote MySQL database, and make the app accessible over the internet.

---

## 🧩 Project Overview
This project provides a simple **user registration form** that stores user data (name & email) in a MySQL database.

- **Frontend:** HTML form served via Express  
- **Backend:** Node.js with Express server (`server.js`)  
- **Database:** MySQL (hosted on EC2 or locally)  
- **Containerization:** Docker  
- **Cloud Deployment:** AWS EC2 (Amazon Linux / Ubuntu)

---

## 🛠️ Tech Stack
| Component | Technology Used |
|------------|-----------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Containerization** | Docker |
| **Cloud Hosting** | AWS EC2 |
| **Version Control** | Git & GitHub |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd login-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Update MySQL credentials in `server.js`
```js
const db = mysql.createConnection({
  host: '13.235.8.27',   // EC2 Public IP where MySQL runs
  user: 'tejas',
  password: 'RandomPassword@123',
  database: 'loginDB'
});
```

### 4️⃣ Build and run Docker container
```bash
docker build -t login-app:v1 .
docker run -d --name vk18 -p 3000:3000 login-app:v1
```

### 5️⃣ Access the app
- **Browser:** `http://<EC2-Public-IP>:3000`  
  Example: [http://13.235.8.27:3000](http://13.235.8.27:3000)

---

## 🧠 How It Works
1. The user fills in name and email in a simple web form.  
2. On submission, Express.js handles a `POST /submit` request.  
3. The backend inserts the data into the MySQL `users` table.  
4. You can view the inserted data by connecting to MySQL via:
   ```bash
   mysql -u tejas -h 13.235.8.27 -p
   USE loginDB;
   SELECT * FROM users;
   ```

---

## 🐳 Docker Commands Quick Reference
| Action | Command |
|--------|----------|
| Build image | `docker build -t login-app:v1 .` |
| Run container | `docker run -d --name vk18 -p 3000:3000 login-app:v1` |
| Stop container | `docker stop vk18` |
| Start container | `docker start vk18` |
| View logs | `docker logs -f vk18` |

---

## ☁️ AWS Setup Summary
| Resource | Purpose |
|-----------|----------|
| **EC2 Instance** | Host Node.js app and MySQL |
| **Docker** | Containerized deployment |
| **MySQL (Port 3306)** | Database for storing user data |
| **Security Group** | Open ports `22`, `3000`, `3306` |
| **GitHub Repo** | Source code and version control |

---

## 👨‍💻 Author
**Nandan Bhat**  
💼 DevOps & Cloud Enthusiast  
📧 [Your Email Here]  
🔗 [GitHub Profile](https://github.com/<your-username>)

---

---

## 🧾 License
This project is licensed under the MIT License.  
Feel free to use and modify for learning purposes.
