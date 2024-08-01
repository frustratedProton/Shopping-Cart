# React Router Shopping Cart

React Router Shopping Cart project.

## Project Overview

This project is a shopping cart application built with React and React Router. It includes:
- Product listing and details
- Shopping cart management
- Checkout process
- Navigation between pages using React Router

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-router-shopping-cart.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd react-router-shopping-cart
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   Access the app at `http://localhost:5173`.

## Project Structure

Here’s an overview of the `src` directory:

- **`App.jsx`**: Main app component with routing.
- **`assets/`**: Images and icons.
- **`components/`**: Reusable components (`Footer`, `Navbar`, `ProductCard`, `ProductList`).
- **`context/`**: Context for managing cart state (`CartContext.jsx`).
- **`hooks/`**: Custom hooks for fetching products and managing local storage.
- **`index.css`**: Global styles.
- **`main.jsx`**: Entry point of the application.
- **`routes/`**: Page components for routing (`Cart`, `ErrorPage`, `Home`, `ProductDetails`, `Shop`).

> The project is in the process of integrating Tailwind CSS:
> This project is part of TheOdinProject curriculum. 