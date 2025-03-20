# 📌 Task Manager – Mini Project  

This is a **mini project** on **Task Manager**, a web application designed to **learn and practice Node.js, Express.js, and EJS**. It allows users to **create, view, and edit task names**, while the UI has been enhanced with **AI-assisted design improvements using Tailwind CSS** for a better look.  

---

## 🚀 Features  
✅ **Create & List Tasks** – Users can add tasks with a title and description.  
✅ **Edit Task Name** – Modify task names easily through the UI.  
✅ **Enhanced UI** – Optimized design with AI-driven Tailwind CSS improvements.  
✅ **File-Based Storage** – Tasks are stored as `.txt` files inside the `Files/` folder.  

---

## 📂 Folder Structure  

### 📂 **Files**  
- Contains all **task files** as `.txt` documents.  

### 📂 **public** (Static Assets)  
- Stores **CSS, JavaScript, and images** used in the frontend.  
- `style.css` improves UI using **Tailwind CSS**.  
- `script.js` contains any **frontend interactions** if needed.  

### 📂 **views** (EJS Templates)  
- `index.ejs` – Displays the **task form** and **task list**.  
- `show.ejs` – Displays **task details** when clicking "Read More".  
- `edit.ejs` – **Edit task name** through a form.  

### 📂 **routes** (Express.js Routes)  
- `tasks.js` – Handles **creating, viewing, editing, and deleting tasks**.  

### **Other Files:**  
- `.gitignore` – Prevents `.txt` files in `Files/` from being committed.  
- `server.js` – **Main entry point** to run the Node.js server.  
- `package.json` – Lists **dependencies and scripts**.  
- `README.md` – This documentation file.  
---
