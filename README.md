# 🚀 URL Shortener

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## 📌 Overview

This project implements a URL shortening service built with Node.js, Express, and MongoDB. It features both a clean web interface and API endpoints to create shortened URLs, redirect to original URLs, and view analytics for each shortened URL.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for creating robust APIs
- **MongoDB**: NoSQL database for storing URL data
- **Mongoose**: ODM library for MongoDB and Node.js
- **Nanoid**: Library for generating unique short IDs
- **EJS**: Templating engine for rendering dynamic HTML pages
- **CSS**: Custom styling with responsive design
- **MVC Architecture**: Model-View-Controller design pattern

## 🏗️ Project Structure

```
shorten-url/
├── controllers/
│   └── controllers.js     # Controllers for handling URL shortening requests
├── models/
│   └── url.js             # Mongoose schema and model for URLs
├── public/
│   └── styles.css         # CSS styling for the web interface
├── routes/
│   └── userRoutes.js      # Express routes for URL endpoints
├── view/
│   └── home.ejs           # EJS template for the home page
├── connection.js          # MongoDB connection setup
├── index.js               # Main application entry point
└── README.md              # Project documentation
```

## 🌐 Web Interface

The application provides a user-friendly web interface where users can:
- Enter a URL to be shortened
- View and copy the shortened URL
- Access the original URL by clicking the shortened link

The interface is fully responsive and styled with a modern, clean design.

## 🔄 API Endpoints

| Method | Endpoint             | Description                           |
|--------|----------------------|---------------------------------------|
| GET    | /url                 | Render the home page                  |
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

5. **Access the application**
   ```
   The web interface will be available at http://localhost:3000/url
   ```

## 💻 Features

### Web Interface
- Clean, responsive design
- Form validation for URL input
- Visual feedback for successful URL shortening
- Animated UI elements for better user experience

### URL Shortening
- Generate short 8-character unique IDs
- Prevent duplicate URLs by returning existing short URLs
- Validate URL input format

### URL Redirection
- Fast redirection to original URLs
- Track each visit with timestamps

### Analytics
- Count total clicks for each shortened URL
- View timestamp history for each visit

## 🔧 Skills Demonstrated

- ✅ Full-stack web development with Node.js
- ✅ Front-end design with EJS templating and CSS
- ✅ MVC architectural pattern implementation
- ✅ MongoDB database integration with Mongoose
- ✅ Express.js middleware usage
- ✅ Error handling in asynchronous Node.js code
- ✅ HTTP redirects and status codes
- ✅ Analytics tracking and reporting
- ✅ Modular code organization
- ✅ Responsive web design

## 📝 Future Enhancements

- User authentication and personal URL management
- Custom short URL support
- QR code generation for shortened URLs
- Link expiration options
- Comprehensive test coverage
- Advanced analytics with geographical data
- Dark mode support
- Copy-to-clipboard functionality


