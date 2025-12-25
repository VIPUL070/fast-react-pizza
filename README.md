# 🍕 Fast React Pizza Co

A modern pizza ordering application built with React, Redux Toolkit, and Tailwind CSS. Order your favorite pizzas with ease, track your orders in real-time, and enjoy a seamless user experience.

## ✨ Features

- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **🛒 Cart Management** - Add, remove, and update pizza quantities with ease
- **📍 Geolocation** - Auto-fill delivery address using your current location
- **🚀 Priority Orders** - Mark your order as priority for faster delivery
- **🔍 Order Tracking** - Track your order status with a unique order ID
- **💰 Simple Checkout** - Payment on delivery - no complex payment processing needed
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and build times
- **🎨 Modern UI** - Beautiful interface styled with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **State Management:** Redux Toolkit
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Code Quality:** ESLint + Prettier
- **Form Handling:** React Router Form Actions
- **Data Fetching:** React Router Loaders

## 📦 Installation

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

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## 📂 Project Structure

```
fast-react-pizza/
├── src/
│   ├── features/         # Feature-based modules
│   │   ├── cart/        # Shopping cart logic
│   │   ├── menu/        # Pizza menu display
│   │   ├── order/       # Order creation & tracking
│   │   └── user/        # User information
│   ├── ui/              # Reusable UI components
│   ├── services/        # API calls and external services
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main app component
│   └── store.js         # Redux store configuration
├── public/              # Static assets
├── index.html           # HTML entry point
└── package.json         # Project dependencies
```

## 🎯 Key Features Explained

### Cart Management
The cart feature allows users to:
- Add pizzas to cart with quantity selection
- Update quantities directly from cart
- Remove items individually
- Clear entire cart
- View real-time cart total and item count

### Order System
- **Create Order:** Select pizzas, provide delivery details, and place order
- **Order Tracking:** Each order gets a unique ID for tracking
- **Priority Option:** Add priority to existing orders for faster delivery
- **Order History:** View complete order details including status and estimated delivery

### Smart Address Filling
- One-click geolocation to auto-fill delivery address
- Manual address entry option
- Address validation before order placement

## 🌐 API Integration

This application uses a backend API for:
- Fetching pizza menu data
- Creating new orders
- Retrieving order details
- Updating order priority

## 🎨 Design Philosophy

Fast React Pizza Co. follows modern web design principles:
- **Mobile-First:** Responsive design that works beautifully on all devices
- **User-Centric:** Intuitive navigation and minimal clicks to complete actions
- **Performance:** Optimized loading and smooth interactions
- **Accessibility:** Semantic HTML and keyboard navigation support

## 🔮 Future Enhancements

- [ ] User authentication and accounts
- [ ] Order history and favorites
- [ ] Real-time order tracking with map
- [ ] Multiple payment methods
- [ ] Custom pizza builder
- [ ] Promo codes and discounts
- [ ] User reviews and ratings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Vipul**

- GitHub: [@VIPUL070](https://github.com/VIPUL070)

## 🙏 Acknowledgments

- Pizza menu data provided by external API
- Icons and images from various open-source resources
- Inspired by modern food delivery applications

---

⭐ If you found this project helpful, please consider giving it a star!
