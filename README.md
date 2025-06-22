# 🛍️ Simple E-Commerce Product Listing (Next.js)

This is a basic e-commerce product listing web application built using **Next.js**. It fetches products from the [FakeStoreAPI](https://fakestoreapi.in) and displays them in a responsive layout. The project features components such as headers, sidebars, product cards, pagination, and skeleton loading for enhanced user experience.

## 🔗 Live API Used

- [Fake Store API](https://fakestoreapi.in): A free public REST API for testing and prototyping e-commerce applications.

---

## 📁 Project Structure

```
src/
└── app/
    ├── components/
    │   ├── fallback/               # Fallback UIs for loading/error
    │   ├── footer/                 # Footer component
    │   ├── header/                 # Header with sidebar
    │   │   └── sidebar/           # Mobile/Desktop sidebar navigation
    │   ├── product/
    │   │   ├── card/              # Product card UI
    │   │   └── list/              # Product list layout
    │   │       └── sidebar/       # Filters sidebar
    │   └── skeleton/
    │       └── product/           # Skeleton loader for product cards
    ├── context/                   # App-level context providers (e.g., sidebar toggle)
    ├── products/                  # Page or route to display all products
    ├── types/                     # TypeScript interfaces and types
    └── utils/                     # API handlers and utility functions
```

---

## 🚀 Features

- ⚛️ Built with **Next.js** (App Router)
- 🎨 Responsive UI using **CSS Modules**
- 🗂️ Sidebar filters (static or dynamic)
- ⏳ Product card **skeleton loaders**
- 🧠 **Context API** for global sidebar state
- 🔁 Pagination support
- 🔗 Consumes external REST API

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Omkarcode11/appscrip-task-omkar-sonawane.git
cd appscrip-task-omkar-sonawane

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run the development server
npm run dev
# or
yarn dev
```

Then open your browser and go to: `http://localhost:3000`

---

## 📸 Screenshots

> Add some screenshots or screen recordings here if available (desktop + mobile views)

---

## 🧠 Learning Points

- Understanding how to fetch and render data using `useEffect` or Next.js data fetching
- Building reusable UI components
- Managing layout using flexbox/grid
- Global state management using React Context
- Mobile-first responsive design with conditionally rendered sidebars

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript / JavaScript
- **Styling**: CSS Modules
- **State Management**: React Context
- **API**: [https://fakestoreapi.in](https://fakestoreapi.in)

---

## 👨‍💻 Author

**Omkar Sonawane**  
🎓 BCA Student, Uttaranchal University  
🔗 [GitHub](https://github.com/Omkarcode11)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
