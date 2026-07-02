# 🏥 MediMeet – Healthcare Appointment Management System

A full-stack healthcare platform that connects patients with doctors through a seamless appointment booking system. MediMeet enables secure authentication, doctor profile management, appointment scheduling, availability tracking, and patient record management using the MERN stack.

---

# 📖 About The Project

Finding and scheduling medical appointments can be time-consuming for both patients and healthcare providers. **MediMeet** simplifies this process by providing an intuitive platform where patients can discover doctors, book appointments, and manage their healthcare interactions.

Doctors can maintain their profiles, manage availability, and track appointments, while administrators can efficiently oversee the healthcare ecosystem.

The platform focuses on delivering a secure, responsive, and user-friendly healthcare experience with real-time data management.

---

# ✨ Key Features

- 👨‍⚕️ Doctor registration and profile management
- 👤 Secure patient authentication using JWT
- 🔐 Role-based login system
- 📅 Online appointment booking
- ⏰ Doctor availability management
- 📂 Appointment history tracking
- 📞 Contact & enquiry management
- 📱 Responsive user interface
- ⚡ RESTful API architecture
- ☁️ MongoDB-based cloud data storage

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- React Toastify
- CSS3

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer

## Database

- MongoDB
- Mongoose

## Tools

- Git
- GitHub
- VS Code
- Postman

---

# 🏗️ Project Architecture

```text
                    Patient / Doctor
                           │
                           ▼
                 React Frontend (Vite)
                           │
                    REST API (Axios)
                           │
                           ▼
                  Express.js Backend
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
 Authentication     Appointment API     Doctor API
        │                  │                  │
        └──────────────┬───┴──────────────────┘
                       ▼
                  MongoDB Database
                       │
                       ▼
          Healthcare Management System
```

---

# 📂 Project Structure

```text
MediMeet/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- npm
- MongoDB

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/DECODEXJAYANT/MediMeet.git
```

Navigate to project

```bash
cd MediMeet
```

---

## Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=Your_MongoDB_URI

JWT_SECRET=Your_JWT_Secret
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# 💻 Usage

1. Register as a patient or doctor.
2. Log in securely.
3. Browse available doctors.
4. View doctor profiles.
5. Book appointments.
6. Manage appointment history.
7. Doctors can update availability and manage appointments.

---

# 🔄 Application Workflow

```text
User Registration
        │
        ▼
Secure Login (JWT)
        │
        ▼
Browse Doctors
        │
        ▼
Select Doctor
        │
        ▼
Book Appointment
        │
        ▼
Store in MongoDB
        │
        ▼
Appointment Confirmation
```

---

# 📡 REST API Overview

### Authentication

- Register User
- Login User

### Doctor

- Create Doctor Profile
- Update Doctor Details
- Manage Availability
- View Doctors

### Appointment

- Book Appointment
- View Appointments
- Update Appointment Status
- Cancel Appointment

### Contact

- Submit Contact Form

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Environment Variables
- Input Validation
- Secure API Communication

---

# 🌟 Future Improvements

- 💳 Online Payment Integration
- 📹 Video Consultation
- 📧 Email Notifications
- 📱 Mobile Application
- 🤖 AI Health Assistant
- 📅 Google Calendar Integration
- 🔔 SMS Appointment Reminders
- 📊 Doctor Analytics Dashboard

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# 📸 Screenshots

> Add screenshots of the following pages:

- Home Page
- Login Page
- Doctor Dashboard
- Patient Dashboard
- Appointment Booking
- Doctor Profile
- Contact Page

---

# 👨‍💻 Author

**Jayant Kumar**

- GitHub: https://github.com/DECODEXJAYANT
- Email: kumarjayant087@gmail.com

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

Happy Coding! 🚀
