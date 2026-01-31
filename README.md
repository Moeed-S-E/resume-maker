# 📄 ATS-Friendly Resume Builder

A modern **ATS-optimized Resume Builder** built with **React** and **Tailwind CSS**.
It provides **live resume preview**, **clean print/PDF export**, and ensures resumes remain **Applicant Tracking System (ATS) friendly** — no icons, no graphics, no tables.

---

## 🚀 Features

- ✍️ **Live Resume Preview** (real-time updates)
- 📄 **Print / Save as PDF** (clean print view)
- 🎯 **ATS-Friendly Layout**
- 🧼 No icons, no images, no tables
- 🖨️ Print-only resume (no buttons, URLs, or UI elements)
- 💾 Resume data saved using **Local Storage**
- 🎨 Styled with **Tailwind CSS**
- 📱 Responsive and minimal design

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **LocalStorage API**
- **HTML5 Print Media Queries**

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Input.jsx          # Resume form
│   ├── Output.jsx         # Live preview
│   ├── FinalResume.jsx    # Print-ready resume
│
│── App.jsx
│── main.jsx
│── index.css
│
public/
│── index.html
```

---

## 🧠 How It Works

1. User fills the resume form
2. Data updates live in preview
3. On submit, data is saved in `localStorage`
4. Final resume is rendered in a **print-only format**
5. User clicks **Print / Save PDF**
6. Browser exports a clean, ATS-friendly resume

---

## 🖨️ Print Optimization

- Print button is hidden during printing
- Backgrounds, shadows, and UI removed
- Only resume content appears in PDF
- No website URL, navbar, or footer printed

Uses Tailwind’s `print:` utilities:

```css
print:hidden
print:bg-white
print:shadow-none
```

---

## 📌 ATS Guidelines Followed

✔ Single column layout
✔ Standard fonts
✔ Clear headings
✔ Bullet points
✔ No graphics or icons
✔ Text-based PDF output

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Moeed-S-E/resume-maker.git
cd resume-maker
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the App

```bash
npm run dev
```

---

## 📄 Usage

1. Fill in your personal, education, and project details
2. Preview your resume live
3. Click **Print / Save PDF**
4. Save as PDF (disable browser headers & footers)

---

## 🔮 Future Improvements

- Multiple resume templates
- Section reordering
- Skill tags instead of text
- PDF export via `jsPDF`
- Authentication & cloud storage

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Muhammad Moeed Sajid**
