<div align="center">

# 🌾 KisanBazaar

### *Fresh from Farm to Your Table — No Middlemen, Just Real Food*

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)

<br/>

> **KisanBazaar** is a full-stack mobile marketplace that directly connects **local farmers** with **buyers** — eliminating middlemen and ensuring fair prices for everyone.

<br/>

---

</div>

## ✨ Features

### 🛒 For Buyers
- Browse fresh produce from local farmers
- Filter by category (Vegetables, Fruits, Grains, Dairy)
- Search products by name or farm
- View detailed product info & farmer contact
- Add to cart & place orders
- Track order status in real-time
- Chat directly with farmers
- **KisanBot** — 24/7 in-app support chatbot

### 👨‍🌾 For Farmers
- List produce with custom emoji, price & quantity
- Manage active listings (add/delete)
- Receive and track incoming orders
- Chat with buyers directly
- View farm dashboard with earnings & stats

### 🤖 KisanBot (Chatbot)
- Built-in support assistant
- Answers questions about buying, selling, orders
- Quick reply suggestions
- Always available — no internet needed for bot responses

---

## 📱 App Screenshots

| Browse | Product Detail | My Farm |
|--------|---------------|---------|
| 🛒 Fresh products grid | 📦 Full details + Chat | 👨‍🌾 Farmer dashboard |

| Chat | Orders | KisanBot |
|------|--------|----------|
| 💬 Farmer messaging | 📋 Order tracking | 🤖 Support bot |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 📱 **Frontend** | Flutter (Dart) |
| 🎨 **UI** | Google Fonts, Custom Theme |
| 🔄 **State Management** | Provider |
| 🌐 **Backend** | Node.js + Express.js |
| 🗄️ **Database** | MongoDB + Mongoose |
| 🔐 **Auth** | JWT (JSON Web Tokens) |
| 📡 **API** | RESTful API |
| ☁️ **Deployment** | Render (Backend) + MongoDB Atlas |

---

## 📁 Project Structure

```
KisanBazaar/
│
├── 📱 lib/                          # Flutter App
│   ├── main.dart                    # App entry point
│   ├── models/
│   │   ├── cart_provider.dart       # Cart state management
│   │   └── models.dart              # Data models
│   ├── screens/
│   │   ├── splash_screen.dart       # Splash & role selection
│   │   ├── login_screen.dart        # Auth screen
│   │   ├── home_screen.dart         # Main navigation
│   │   ├── buyer_marketplace_screen.dart  # Browse products
│   │   ├── produce_detail_screen.dart     # Product detail
│   │   ├── farmer_dashboard_screen.dart   # Farmer dashboard
│   │   ├── cart_screen.dart         # Shopping cart
│   │   ├── orders_screen.dart       # Order tracking
│   │   └── chat_screen.dart         # Chat + KisanBot
│   ├── services/
│   │   └── api_service.dart         # API calls
│   └── theme/
│       └── app_theme.dart           # App theme & colors
│
└── 🖥️ kisaanbazzar-backend/         # Node.js Backend
    ├── server.js                    # Server entry point
    ├── middleware/
    │   └── auth.js                  # JWT middleware
    ├── models/
    │   ├── User.js                  # User schema
    │   ├── Product.js               # Product schema
    │   ├── Order.js                 # Order schema
    │   └── Chat.js                  # Chat schema
    └── routes/
        ├── auth.js                  # Register/Login
        ├── products.js              # Product CRUD
        ├── orders.js                # Order management
        └── chat.js                  # Messaging
```

---

## 🚀 Getting Started

### Prerequisites

- Flutter SDK 3.x+
- Node.js 18.x+
- MongoDB (local or Atlas)
- Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/kisanbazaar.git
cd kisanbazaar
```

---

### 2️⃣ Setup Backend

```bash
cd kisaanbazzar-backend
npm install
```

Create a `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/kisaanbazzar
JWT_SECRET=your_secret_key_here
PORT=5000
```

Start the server:
```bash
node server.js
```

> Server runs at `http://localhost:5000`

---

### 3️⃣ Setup Flutter App

```bash
cd ..
flutter pub get
```

Update `lib/services/api_service.dart`:
```dart
// For emulator:
static const String baseUrl = 'http://10.0.2.2:5000/api';

// For real device (use your PC's IP):
static const String baseUrl = 'http://192.168.1.X:5000/api';

// For production:
static const String baseUrl = 'https://your-app.onrender.com/api';
```

Run the app:
```bash
flutter run
```

---

## ☁️ Deployment

### Backend → Render

1. Push backend to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo
4. Set environment variables:
   - `MONGODB_URI` — MongoDB Atlas connection string
   - `JWT_SECRET` — Secret key
   - `PORT` — `10000`
5. Build command: `npm install`
6. Start command: `node server.js`

### Database → MongoDB Atlas

1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Whitelist all IPs: `0.0.0.0/0`
3. Copy connection string to Render env vars

### App → APK Build

```bash
flutter build apk --release
```

APK location:
```
build/app/outputs/flutter-apk/app-release.apk
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/farmer/my` | Get farmer's products |
| POST | `/api/products` | Add new product |
| DELETE | `/api/products/:id` | Delete product |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place order |
| GET | `/api/orders/my` | Get buyer's orders |
| GET | `/api/orders/farmer` | Get farmer's orders |
| PUT | `/api/orders/:id/status` | Update order status |

### Chat
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/chat` | Get chat threads |
| POST | `/api/chat/thread` | Create/get thread |
| GET | `/api/chat/:id/messages` | Get messages |
| POST | `/api/chat/:id/messages` | Send message |

---

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT signing secret | `kisanbazaar_secret` |
| `PORT` | Server port | `5000` |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Built with ❤️ for Indian farmers and buyers.

> *"When farmers prosper, the nation prospers."* 🌾

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/kisanbazaar?style=social)](https://github.com/yourusername/kisanbazaar)

</div>
