# 🚗 Uber Clone

A full-stack Uber clone application built with React, Node.js, and MongoDB.

## 🏗️ Project Structure

```
├── backend/           # Node.js backend
│   ├── controllers/   # Route controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   └── README.md      # API documentation
│
└── frontend/          # React frontend
    ├── src/
    │   ├── components/# React components
    │   ├── pages/     # Page components
    │   └── ...
    └── ...
```

## 🚀 Features

### Implemented Features
- **Dummy UI only:** The current frontend is a static, non-functional demo. You can view the UI in mobile view for demonstration purposes.
- User authentication (register, login, logout)
- Captain (driver) authentication
- Basic UI components and layouts
- Responsive design with Tailwind CSS
- Smooth animations using GSAP

### Pending Features (Not Fully Functional)
- Real-time location tracking
- Dynamic map integration
- Address search with suggestions
- Distance and time calculation
- Vehicle selection
- Ride booking system
- Real-time ride tracking
- Payment integration

## ⚠️ Important Notes

### 1. Google Maps API Integration Issue

The following features are currently not working due to Google Maps API key restrictions:
- Location search and suggestions
- Dynamic map display
- Distance and time calculations
- Route visualization
- Real-time location tracking

To make these features work:

1. Get a valid Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
   - Distance Matrix API
3. Add the API key to your `.env` file:
   ```
   GOOGLE_MAPS_API=your_api_key_here
   ```

### 2. Frontend Limitations

The frontend currently has the following limitations:
- **Only a dummy UI is available.**
- Static UI components without real-time functionality
- Placeholder data for ride booking
- No actual payment processing
- Limited user interaction with maps
- No real-time updates for ride status

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Google Maps APIs

### Frontend
- React
- Tailwind CSS
- GSAP (Animations)
- Axios
- React Icons
- Google Maps React Components (pending API key)

## 📝 API Documentation

Detailed API documentation is available in the `backend/README.md` file.

## 🔧 Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd frontend
   npm install
   ```
3. Set up environment variables:
   - Create `.env` file in backend directory
   - Add required environment variables (see `.env.example`)
4. Start the development servers:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   npm run dev
   ```

## 🔐 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret
GOOGLE_MAPS_API=your_google_maps_api_key
```

## 🎯 Future Improvements

1. Implement real-time location tracking
2. Add dynamic map integration
3. Enable address search functionality
4. Implement ride booking system
5. Add payment gateway integration
6. Implement real-time ride tracking
7. Add driver matching algorithm
8. Implement ride history and ratings

## 📄 License

This project is licensed under the MIT License.