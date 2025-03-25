# 🚀 URL Shortener

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## 📌 Overview

This project implements a URL shortening service built with Node.js, Express, and MongoDB. It features both a clean web interface and API endpoints to create shortened URLs, redirect to original URLs, and view analytics for each shortened URL. Additionally, it includes user authentication for secure access.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for creating robust APIs
- **MongoDB**: NoSQL database for storing URL and user data
- **Mongoose**: ODM library for MongoDB and Node.js
- **Nanoid**: Library for generating unique short IDs
- **UUID**: Library for generating session IDs
- **EJS**: Templating engine for rendering dynamic HTML pages
- **CSS**: Custom styling with responsive design
- **MVC Architecture**: Model-View-Controller design pattern
- **Cookie-Parser**: Middleware for parsing cookies in requests

## 🏗️ Project Structure

```
shorten-url/
├── controllers/
│   ├── urlController.js    # Controllers for handling URL shortening requests
│   └── userControllers.js  # Controllers for user authentication
├── middleware/
│   └── auth.js             # Middleware for user authentication and session restriction
├── models/
│   ├── url.js              # Mongoose schema and model for URLs
│   └── user.js             # Mongoose schema and model for users
├── public/
│   ├── styles.css          # CSS styling for the home page
│   ├── styles-login.css    # CSS styling for the login page
│   └── styles-signup.css   # CSS styling for the signup page
├── routes/
│   ├── urlRoute.js         # Express routes for URL endpoints
│   └── userRoutes.js       # Express routes for user authentication
├── service/
│   └── auth.js             # Service for managing user sessions
├── view/
│   ├── home.ejs            # EJS template for the home page
│   ├── login.ejs           # EJS template for the login page
│   └── sign-up.ejs         # EJS template for the signup page
├── connection.js           # MongoDB connection setup
├── index.js                # Main application entry point with middleware setup
└── README.md               # Project documentation
```

## 🌐 Web Interface

The application provides a user-friendly web interface where users can:
- Enter a URL to be shortened
- View and copy the shortened URL
- Access the original URL by clicking the shortened link
- Sign up and log in to manage their sessions

The interface is fully responsive and styled with a modern, clean design.

## 🔄 API Endpoints

| Method | Endpoint                  | Description                           |
|--------|---------------------------|---------------------------------------|
| GET    | /url                      | Render the home page                  |
| POST   | /url                      | Create a shortened URL                |
| GET    | /url/:shortId             | Redirect to the original URL          |
| GET    | /url/analytics/:shortId   | Get click analytics for a short URL   |
| GET    | /user/login               | Render the login page                 |
| POST   | /user/login               | Log in a user                         |
| GET    | /user/signup              | Render the signup page                |
| POST   | /user/signup              | Register a new user                   |

## 📋 Data Models

### **URL**
- `shortId` (String, required): Unique short identifier
- `redirectUrl` (String, required): Original URL to redirect to
- `visitHistory` (Array): Collection of timestamp objects for each visit
- `timestamps`: Automatically track creation and update times

### **User**
- `username` (String, required): Unique username
- `email` (String, required): User's email address
- `password` (String, required): User's password
- `timestamps`: Automatically track creation and update times

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shorten-url
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on your system
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the application**
   ```bash
   The web interface will be available at http://localhost:3000/url
   ```

## 💻 Features

### Web Interface
- Clean, responsive design
- Form validation for URL input
- Visual feedback for successful URL shortening
- Animated UI elements for better user experience

### User Authentication
- Secure signup and login functionality
- Session management using cookies
- Middleware to restrict access to logged-in users

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

### Middleware Enhancements
- **Restrict Access**: Added middleware to restrict access to logged-in users for URL-related routes.
- **Cookie Parsing**: Corrected cookie-parser usage to ensure proper session handling.
- **JSON Middleware**: Included JSON middleware for handling API requests.

## 🔧 Skills Demonstrated

- ✅ Full-stack web development with Node.js
- ✅ Front-end design with EJS templating and CSS
- ✅ MVC architectural pattern implementation
- ✅ MongoDB database integration with Mongoose
- ✅ Express.js middleware usage
- ✅ User authentication and session management
- ✅ Error handling in asynchronous Node.js code
- ✅ HTTP redirects and status codes
- ✅ Analytics tracking and reporting
- ✅ Modular code organization
- ✅ Responsive web design

## 📝 Future Enhancements

- Custom short URL support
- QR code generation for shortened URLs
- Link expiration options
- Comprehensive test coverage
- Advanced analytics with geographical data
- Dark mode support
- Copy-to-clipboard functionality


![image](https://github.com/user-attachments/assets/f7eec4f4-ecd4-4421-8cd9-ffcbc1e85838)
