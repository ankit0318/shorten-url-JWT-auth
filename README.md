# 🚀 URL Shortener API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📌 Overview

This project implements a URL shortening service built with Node.js, Express, and MongoDB. It allows users to create shortened URLs, redirect to original URLs, and view analytics for each shortened URL.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for creating robust APIs
- **MongoDB**: NoSQL database for storing URL data
- **Mongoose**: ODM library for MongoDB and Node.js
- **Nanoid**: Library for generating unique short IDs
- **MVC Architecture**: Model-View-Controller design pattern
- **RESTful API Design**: Standard HTTP methods for API operations

## 🏗️ Project Structure

```
shorten-url/
├── controllers/
│   └── controllers.js     # Controllers for handling URL shortening requests
├── models/
│   └── url.js             # Mongoose schema and model for URLs
├── routes/
│   └── userRoutes.js      # Express routes for URL endpoints
├── connection.js          # MongoDB connection setup
├── index.js               # Main application entry point
└── README.md              # Project documentation
```

## 🔄 API Endpoints

| Method | Endpoint             | Description                           |
|--------|----------------------|---------------------------------------|
| POST   | /url                 | Create a shortened URL                |
| GET    | /url/:shortId        | Redirect to the original URL          |
| GET    | /url/analytics/:shortId | Get click analytics for a short URL |

## 📋 Data Model

**URL**:
- `shortId` (String, required): Unique short identifier
- `redirectUrl` (String, required): Original URL to redirect to
- `visitHistory` (Array): Collection of timestamp objects for each visit
- `timestamps`: Automatically track creation and update times

## 🚀 Getting Started

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd shorten-url
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start MongoDB**
   ```
   # Make sure MongoDB is running on your system
   ```

4. **Start the server**
   ```
   npm start
   ```

5. **Access the API**
   ```
   The server will be running at http://localhost:3000
   ```

## 💻 Code Highlights

### URL Shortening with Nanoid
```javascript
const shortId = nanoid(8);
await URL.create({ shortId: shortId, redirectUrl: url, visitHistory: [] });
res.status(201).json({ shortUrl:`http://localhost:3000/url/${shortId}` });
```

### URL Redirection Implementation
```javascript
const entry = await URL.findOneAndUpdate(
  { shortId },
  {
    $push: {
      visitHistory: {
        timeStamp: new Date(),
      },
    },
  }
);
res.redirect(entry.redirectUrl);
```

### URL Analytics Tracking
```javascript
res.json({
  totalClicks: result.visitHistory.length,
  analytics: result.visitHistory.map((visit) => ({
    ...visit,
    timeStamp: visit.timeStamp && !isNaN(new Date(visit.timeStamp).getTime()) 
      ? new Date(visit.timeStamp).toISOString() 
      : 'Invalid Date',
  })),
});
```

## 🔧 Skills Demonstrated

- ✅ URL shortening algorithm implementation
- ✅ MVC architectural pattern implementation
- ✅ MongoDB database integration with Mongoose
- ✅ Express.js middleware usage
- ✅ Error handling in asynchronous Node.js code
- ✅ HTTP redirects and status codes
- ✅ Analytics tracking and reporting
- ✅ Modular code organization

## 📝 Future Enhancements

- Custom short URL support
- User authentication and personal URL management
- QR code generation for shortened URLs
- Link expiration options
- Comprehensive test coverage
- Advanced analytics with geographical data
- API documentation with Swagger


