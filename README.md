# Fast React Pizza Co

A modern pizza ordering application built with React, Redux Toolkit, and Tailwind CSS.
Users can order pizzas seamlessly, track orders in real time, and enjoy a smooth and responsive user experience.

---

## Features

* Responsive design for mobile, tablet, and desktop
* Cart management with add, remove, and quantity updates
* Geolocation-based address auto-fill
* Priority order option for faster delivery
* Order tracking using a unique order ID
* Simple checkout with payment on delivery
* Fast performance using Vite
* Clean and modern UI built with Tailwind CSS

---

## Tech Stack

* Frontend Framework: React 18+
* State Management: Redux Toolkit
* Routing: React Router v6
* Styling: Tailwind CSS
* Build Tool: Vite
* Code Quality: ESLint and Prettier
* Form Handling: React Router Form Actions
* Data Fetching: React Router Loaders

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/VIPUL070/fast-react-pizza.git
cd fast-react-pizza
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the application in your browser:

```text
http://localhost:5173
```

---

## Available Scripts

* npm run dev – Start the development server
* npm run build – Build for production
* npm run preview – Preview the production build
* npm run lint – Run ESLint checks
* npm run format – Format code using Prettier

---

## Project Structure

```text
fast-react-pizza/
├── src/
│   ├── features/
│   │   ├── cart/        Cart logic and state
│   │   ├── menu/        Pizza menu features
│   │   ├── order/       Order creation and tracking
│   │   └── user/        User-related state
│   ├── ui/              Reusable UI components
│   ├── services/        API and external services
│   ├── utils/           Helper utilities
│   ├── App.jsx          Main application component
│   └── store.js         Redux store configuration
├── public/              Static assets
├── index.html           Application entry point
└── package.json         Project dependencies
```

---

## Key Features Explained

### Cart Management

The cart functionality allows users to:

* Add pizzas with selected quantities
* Update item quantities directly in the cart
* Remove individual items
* Clear the entire cart
* View real-time total price and item count

### Order System

* Create orders by selecting pizzas and entering delivery details
* Track orders using a unique order ID
* Add priority to existing orders
* View complete order details including status and estimated delivery time

### Smart Address Filling

* One-click geolocation to auto-fill delivery address
* Manual address entry support
* Address validation before order submission

---

## API Integration

The application integrates with a backend API to:

* Fetch pizza menu data
* Create new orders
* Retrieve order details
* Update order priority status

---

## Design Philosophy

Fast React Pizza Co follows modern web application principles:

* Mobile-first responsive design
* User-centric and intuitive workflows
* Optimized performance and smooth interactions
* Accessibility-focused semantic HTML and keyboard support

---

## Future Enhancements

* User authentication and accounts
* Order history and favorites
* Real-time order tracking with maps
* Multiple payment methods
* Custom pizza builder
* Promo codes and discounts
* User reviews and ratings

---

## Contributing

Contributions are welcome.

Steps to contribute:

1. Fork the repository
2. Create a feature branch
   `git checkout -b feature/YourFeature`
3. Commit your changes
   `git commit -m "Add YourFeature"`
4. Push to the branch
   `git push origin feature/YourFeature`
5. Open a Pull Request

---

## Author

Vipul

GitHub: [https://github.com/VIPUL070](https://github.com/VIPUL070)

---

## Acknowledgments

* Pizza menu data provided by an external API
* Icons and assets from open-source resources
* Inspired by modern food delivery applications

---

If you found this project useful, consider giving it a star on GitHub.
