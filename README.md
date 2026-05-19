<div align="center">

# 🌾 KisanBazaar

### *Fresh from Farm to Your Table — No Middlemen, Just Real Food*

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

<br/>

> **KisanBazaar** is a full-stack mobile marketplace that directly connects **local farmers** with **buyers** — eliminating middlemen and ensuring fair prices for everyone.

<br/>

---

</div>

## 📱 App Screenshots

<div align="center">

### 🚀 Onboarding & Auth

| Splash Screen | Login | Register |
|:---:|:---:|:---:|
|<img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 16 02 PM" src="https://github.com/user-attachments/assets/99a982f6-d4f3-48d3-a2d9-25813e7de7a2" /> | <img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 16 07 PM" src="https://github.com/user-attachments/assets/46721e32-4bd9-4d1c-89e0-2dcb17a2f36b" /> |<img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 16 04 PM" src="https://github.com/user-attachments/assets/dc09d5c0-6e2c-4178-abda-bb8cc9aa4f37" /> |
| Role selection screen | Secure phone + password login | Buyer or Farmer registration |

### 🛒 Buyer Experience

| Browse | Cart | Orders |
|:---:|:---:|:---:|
| <img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 16 12 PM" src="https://github.com/user-attachments/assets/16d98875-787a-4194-a833-12956262c686" /> | <img width="1260" height="2800" alt="WhatsApp Image 2026-05-19 at 1 16 08 PM" src="https://github.com/user-attachments/assets/4ef6b599-ba08-489b-bf59-e68ede60f681" /> | <img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 16 09 PM" src="https://github.com/user-attachments/assets/b5d66921-063d-42e8-8d9d-bfa242d1cdf6" />|
| Fresh products from local farmers | Add items & place orders | Track all your purchases |

### 👨‍🌾 Farmer Experience

| My Farm | Chat | KisanBot |
|:---:|:---:|:---:|
|<img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 15 58 PM" src="https://github.com/user-attachments/assets/16ea5683-1df1-438d-8f94-b352ffe050be" /> |<img width="1260" height="2800" alt="WhatsApp Image 2026-05-19 at 1 16 10 PM" src="https://github.com/user-attachments/assets/d85d241f-98be-41d0-b82a-55fe2819830f" /> |<img width="576" height="1280" alt="WhatsApp Image 2026-05-19 at 1 15 59 PM" src="https://github.com/user-attachments/assets/ab95d5ad-7688-498b-beb3-b7690c695475" /> |
| Manage listings & view earnings | Chat with buyers directly | 24/7 AI support assistant |

</div>

---

## ✨ Features

### 🛒 For Buyers
- Browse fresh produce from local farmers
- Filter by category (Vegetables, Fruits, Grains, Dairy)
- Search products by name or farm
- Add to cart & place orders with delivery address
- Track order status in real-time (Pending → Confirmed → In Transit → Delivered)
- Chat directly with farmers
- **KisanBot** — 24/7 in-app support chatbot with quick replies

### 👨‍🌾 For Farmers
- List produce with custom emoji, price & quantity
- Manage active listings (add/delete)
- Receive and confirm incoming orders
- Update order status (Confirm → Ship → Deliver)
- Chat with buyers directly
- View farm dashboard with total listings & quantity

### 🤖 KisanBot (AI Chatbot)
- Built-in support assistant powered by Claude AI
- Answers questions about buying, selling, orders, payments
- Quick reply suggestions (What is this app? / How to buy / How to sell / Track order)
- Always available — instant responses

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 📱 **Frontend** | Flutter (Dart) |
| 🎨 **UI** | Google Fonts (Nunito Sans + Playfair Display) |
| 🔄 **State Management** | Provider |
| 🌐 **Backend** | Node.js + Express.js |
| 🗄️ **Database** | MongoDB Atlas + Mongoose |
| 🔐 **Auth** | JWT (JSON Web Tokens) + bcrypt |
| 📡 **API** | RESTful API |
| 💬 **Real-time** | Socket.IO |
| 🤖 **AI Chatbot** | Claude API (Anthropic) |
| ☁️ **Deployment** | Render (Backend) + MongoDB Atlas |

---

## 📁 Project Structure

```
KisanBazaar/
│
├── 📱 lib/                                    # Flutter App
│   ├── main.dart                              # App entry point
│   ├── models/
│   │   ├── cart_provider.dart                 # Cart state management
│   │   └── models.dart                        # Data models
│   ├── screens/
│   │   ├── splash_screen.dart                 # Splash & role selection
│   │   ├── login_screen.dart                  # Auth screen
│   │   ├── home_screen.dart                   # Main navigation (role-based)
│   │   ├── buyer_marketplace_screen.dart      # Browse products
│   │   ├── produce_detail_screen.dart         # Product detail
│   │   ├── farmer_dashboard_screen.dart       # Farmer dashboard
│   │   ├── cart_screen.dart                   # Shopping cart + checkout
│   │   ├── orders_screen.dart                 # Order tracking
│   │   └── chat_screen.dart                   # Chat + KisanBot
│   ├── services/
│   │   └── api_service.dart                   # All API calls
│   └── theme/
│       └── app_theme.dart                     # App theme & colors
│
└── 🖥️ kisaanbazzar-backend/                   # Node.js Backend
    ├── server.js                              # Server entry point
    ├── middleware/
    │   └── auth.js                            # JWT middleware
    ├── models/
    │   ├── User.js                            # User schema
    │   ├── Product.js                         # Product schema
    │   ├── Order.js                           # Order schema
    │   └── Chat.js                            # Chat schema
    └── routes/
        ├── auth.js                            # Register/Login
        ├── products.js                        # Product CRUD
        ├── orders.js                          # Order management
        ├── cart.js                            # Cart (client-side)
        └── chat.js                            # Messaging
```

---

## 🚀 Getting Started

### Prerequisites

- Flutter SDK 3.x+
- Node.js 18.x+
- MongoDB Atlas account (free)
- Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sahilmore469/kisaanbazzar-backend.git
cd kisaanbazzar-backend
```

---

### 2️⃣ Setup Backend

```bash
npm install
```

Create a `.env` file:
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/kisaanbazzar?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
PORT=5000
```

Start the server:
```bash
npm run dev
```

> Server runs at `http://localhost:5000`

---

### 3️⃣ Setup Flutter App

```bash
flutter pub get
```

Update `lib/services/api_service.dart`:
```dart
// For emulator:
static const String baseUrl = 'http://10.0.2.2:5000/api';

// For real device (use your PC's IP):
static const String baseUrl = 'http://192.168.1.X:5000/api';

// For production:
static const String baseUrl = 'https://kisaanbazzar-backend.onrender.com/api';
```

Run the app:
```bash
flutter run
```

---

### 4️⃣ Build APK

```bash
flutter build apk --release
```

APK location:
```
build/app/outputs/flutter-apk/app-release.apk
```

---

## ☁️ Deployment

### Backend → Render (Live ✅)

- **URL:** https://kisaanbazzar-backend.onrender.com
- Build command: `npm install`
- Start command: `node server.js`
- Environment variables: `MONGO_URI`, `JWT_SECRET`, `PORT=10000`

### Database → MongoDB Atlas (Live ✅)

- Free M0 cluster
- Region: Mumbai (ap-south-1)
- Collections: users, products, orders, chats

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/farmer/my` | Get farmer's products |
| POST | `/api/products` | Add new product |
| PUT | `/api/products/:id` | Update product |
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
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT signing secret | `kisaanbazzar_secret` |
| `PORT` | Server port | `10000` |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sahil More**

Built with ❤️ for Indian farmers and buyers.

> *"When farmers prosper, the nation prospers."* 🌾

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/Sahilmore469/kisaanbazzar-backend?style=social)](https://github.com/Sahilmore469/kisaanbazzar-backend)

**🌐 Live Backend:** https://kisaanbazzar-backend.onrender.com

</div>
