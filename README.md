<div align="center">
  <br />
  <a href="https://youtu.be/lie0cr3wESQ" target="_blank">
    <img src="public/readme/hero.png" alt="Project Banner">
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">StoreIt - File Storage and Sharing Platform</h3>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🔗 [Assets](#assets)  
6. 🚀 [More](#more)

---

## 🤖 Introduction

**StoreIt** is a file storage and sharing platform that allows users to upload, organize, manage, and share files seamlessly. Built using Next.js 15 and Appwrite SDK, it supports modern features, performance, and scalability.

---

## ⚙️ Tech Stack

- React 19  
- Next.js 15  
- Appwrite  
- TailwindCSS  
- ShadCN  
- TypeScript  

---

## 🔋 Features

- ✅ **User Authentication (Signup/Login/Logout)** with Appwrite  
- ✅ **Upload Files** – Documents, images, videos, audio  
- ✅ **Preview, Rename & Delete** uploaded files  
- ✅ **Download** files directly from the platform  
- ✅ **File Sharing** via shareable links  
- ✅ **Dashboard Overview** – Storage stats, recent uploads  
- ✅ **Global Search** across user files  
- ✅ **Sorting Options** – Sort by name, date, size  
- ✅ **Fully Responsive UI** with a clean, modern look  

---

## 🤸 Quick Start

### Prerequisites

Make sure you have:

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

### Clone the Repository

```bash
git clone https://github.com/GaurangMundhra/StoreIt.git
cd StoreIt
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up &
creating a new project on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="links">🔗 Assets</a>

- Assets used in the project can be found [here](https://jsm.dev/gdrive-kit)

<a href="https://jsm.dev/gdrive-kit">
  <img src="public/readme/videokit.png" alt="Video Kit Banner">
</a>
