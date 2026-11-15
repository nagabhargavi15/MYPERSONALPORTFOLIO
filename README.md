# Personal Portfolio Website - BODLA NAGABHARGAVI

A modern, responsive, and professional personal developer portfolio website designed for **BODLA NAGABHARGAVI**, Aspiring Software Developer and Information Technology undergraduate at **Sridevi Women's Engineering College**.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 👤 Personal Profile Overview

- **Full Name:** BODLA NAGABHARGAVI
- **Professional Title:** Aspiring Software Developer
- **Degree:** B.Tech in Information Technology
- **College:** Sridevi Women's Engineering College
- **CGPA:** 8.99
- **Technical Skills:** HTML, CSS, Python, Java, Basic Data Analytics

---

## 🌟 Implemented Sections & Features

1. **Home / Hero Section**
   - Prominently displays **BODLA NAGABHARGAVI** and title **Aspiring Software Developer**.
   - Professional introduction and status badge.
   - Profile photo placeholder with verified student badge.
   - Quick CTAs: **View Projects** and **Contact Me**.
   - **Download Resume** button with an editable file path (`public/resume.pdf`).

2. **About Me**
   - Background narrative as an Information Technology student.
   - Focus on programming, object-oriented concepts, and analytical problem solving.
   - Cards highlighting technical interests, career goals, and academic performance.

3. **Education**
   - **B.Tech – Information Technology** at Sridevi Women's Engineering College with **CGPA: 8.99**.
   - **Intermediate (10+2)** with **Result: 950 Marks**.
   - **Secondary School Certificate (SSC)** with **Result: 10 GPA**.

4. **Technical Skills**
   - Displays **HTML**, **CSS**, **Python**, **Java**, and **Basic Data Analytics**.
   - Attractive modern cards with icons and descriptions.
   - *Note: No skill percentages or levels were invented.*

5. **Projects**
   - Clean, attractive project cards with title, description, technology tags, GitHub repo link, and live demo buttons.
   - Preserves existing project template cards without inventing completed projects.

6. **Certifications**
   - Certification gallery displaying actual certificates directly from `public/certificates/`:
     - **Introduction to HTML** – Sololearn (07 September, 2025)
     - **Introduction to CSS** – Sololearn (16 September, 2025)
     - **Java Course - Mastering the Fundamentals** – Scaler Topics (01 September 2026)
     - **AI Foundation** – Hexart.In / Hexagon & Li2 Edu (14 Sep 2025)
   - Visual certificate preview cards with direct **View Certificate** buttons that open the original files in a new tab.

7. **Achievements**
   - Displays genuine academic milestone (**8.99 CGPA in B.Tech IT**).
   - Structured editable placeholders for hackathons, coding contests, and technical workshops.
   - *Note: No achievements were invented.*

8. **Contact**
   - Direct contact info cards with college, location, and student credentials.
   - Fully functional contact form with **frontend validation**:
     - Name (minimum 2 characters)
     - Email (RFC-compliant regex validation)
     - Subject (minimum 3 characters)
     - Message (minimum 10 characters with live character counter)
   - Demonstration success banner with option to send another message.
   - *Note: No database or secret keys connected.*

9. **Global Design & UX**
   - **Dark / Light Mode Toggle:** Seamless theme toggle with persistent storage.
   - **Color Palette:** Professional dark navy (`#070b14`, `#0a1122`, `#111e3f`) and vibrant purple (`#8b5cf6`, `#6366f1`) with ambient glow effects.
   - **Smooth Scrolling & Navigation:** Navbar with active-section indicator and mobile responsive drawer menu.
   - **Back to Top Button:** Floating button that appears when scrolling down.

---

## 📁 Project Structure

```text
d:/myportfolio/
├── index.html                   # HTML entry point with fonts & dark mode class
├── package.json                 # TypeScript, Tailwind, Lucide React, Vite
├── tsconfig.json                # TypeScript compiler config
├── tailwind.config.js           # Custom navy & purple palette, dark mode class
├── vite.config.ts               # Vite configuration
├── public/
│   └── resume.pdf               # 📄 EDITABLE RESUME FILE (Place your PDF here)
└── src/
    ├── main.tsx                 # React DOM root mounting
    ├── App.tsx                  # App layout, ambient glow, back-to-top button
    ├── context/
    │   └── ThemeContext.tsx     # Dark / Light theme provider & state
    ├── data/
    │   └── portfolioData.ts     # 🎯 CENTRALIZED DATA & PLACEHOLDERS (Edit here!)
    ├── types/
    │   └── portfolio.ts         # TypeScript type interfaces
    ├── styles/
    │   └── index.css            # Tailwind directives, custom scrollbars & glow mesh
    └── components/
        ├── Navbar.tsx           # Sticky navbar, theme toggle, mobile drawer
        ├── Home.tsx             # Hero section, name, title, CTAs, photo placeholder
        ├── About.tsx            # Background, interests, career objective
        ├── Education.tsx        # B.Tech IT card, CGPA 8.99, timeline
        ├── Skills.tsx           # HTML, CSS, Python, Java, Data Analytics
        ├── Projects.tsx         # Structured project template cards
        ├── Certifications.tsx   # Verified credentials gallery
        ├── Achievements.tsx     # Academic milestone & contest placeholders
        ├── Contact.tsx          # Contact info & validated contact form
        └── Footer.tsx           # Copyright, quick navigation, back to top
```

---

## 🚀 How to Run the Website

### 1. Start the Development Server
From your project directory (`d:\myportfolio`), run:
```powershell
npm run dev
```
Open your browser and navigate to:
👉 **`http://localhost:3000`**

### 2. Build for Production
To compile and bundle with TypeScript check:
```powershell
npm run build
```

---

## ✏️ How to Customize Your Details

Open:  
📄 **`src/data/portfolioData.ts`**

In this single file, you can customize:
1. **Resume File:** Place your actual resume in `public/resume.pdf`. You can change the path in `personalData.resumePath`.
2. **Profile Photo:** Place your photo in the `public/` directory (e.g. `public/my-photo.jpg`) and set `avatarPlaceholderUrl: "/my-photo.jpg"` in `personalData`.
3. **Projects:** Replace the project template titles, descriptions, and GitHub links in `projectPlaceholders`.
4. **Certifications & Achievements:** Add your actual course names, organizations, and certificate URLs in `certificationPlaceholders` and `achievementPlaceholders`.
