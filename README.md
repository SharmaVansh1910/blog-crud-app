# 📝 TrendWise — Full-Stack Blog CRUD App

TrendWise is a modern, minimal blog platform built using **Next.js 14**, **MongoDB**, and **Tailwind CSS v4**. It features a sleek interface, full blog CRUD functionality, and SEO-ready pages — ideal for learning full-stack development or showcasing your skills.

---

## 🚀 Features

- ✅ Create, edit, and delete blog posts
- ✅ Rich text editing with React Quill
- ✅ SEO-friendly pages with dynamic metadata
- ✅ Clean, responsive UI with Tailwind CSS v4
- ✅ MongoDB + Mongoose integration
- ✅ Auto-generated slugs
- ✅ Confirmation prompt before deleting

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Editor:** React Quill
- **Styling:** Tailwind CSS v4, Inter font
- **Backend:** Node.js 20 + API Routes
- **Database:** MongoDB with Mongoose

---

## 📁 Folder Structure

ultimate-blog-crud-app/
├── app/
│ ├── blog/[slug]/page.tsx
│ ├── create/page.tsx
│ ├── edit/[slug]/page.tsx
│ ├── components/
│ │ ├── Header.tsx
│ │ └── Footer.tsx
│ ├── layout.tsx
│ └── page.tsx
├── lib/db.ts
├── models/Post.ts
├── pages/api/posts/
│ ├── index.ts
│ └── [slug].ts
├── styles/globals.css
├── public/
├── .env.local
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md


## 🧠 How It Works

- Posts are stored in MongoDB with auto-generated slugs
- Pages are rendered using Next.js App Router
- React Quill is used for rich content editing
- API Routes handle backend CRUD logic

---




📄 License
This project is open source and available under the MIT License.

