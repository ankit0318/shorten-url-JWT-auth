# 🚀 Node.js REST API Practice

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📌 Overview

This project demonstrates a RESTful API built with Node.js, Express, and MongoDB. It implements a user management system with CRUD operations and follows MVC architecture pattern.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for creating robust APIs
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM library for MongoDB and Node.js
- **MVC Architecture**: Model-View-Controller design pattern
- **RESTful API Design**: Standard HTTP methods for CRUD operations

## 🏗️ Project Structure

```
node-practice/
├── controllers/
│   └── controllers.js     # User controllers for handling requests
├── model/
│   └── User.js            # Mongoose schema and model for users
├── router/
│   └── userRoutes.js      # Express routes for user endpoints
├── connection.js          # MongoDB connection setup
├── index.js               # Main application entry point
└── README.md              # Project documentation
```

## 🔄 API Endpoints

| Method | Endpoint   | Description                |
|--------|------------|----------------------------|
| GET    | /user      | Retrieve all users         |
| POST   | /user      | Create a new user          |
| GET    | /user/:id  | Retrieve a specific user   |
| PATCH  | /user/:id  | Update a specific user     |

## 📋 Data Model

**User**:
- `name` (String, required): User's full name
- `email` (String, required): User's email address
- `gender` (String, optional): User's gender
- `timestamps`: Automatically track creation and update times

## 🚀 Getting Started

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd node-practice
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

### Clean Routing with Express Router
```javascript
router.get("/", getAllUsers);
router.post("/", createUser);

router
    .route("/:id")
    .get(getUserById)
    .patch(updateUserById);
```

### Mongoose Schema Design
```javascript
const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      gender: { type: String }
    },
    { timestamps: true }
);
```

### MVC Pattern Implementation
- **Models**: Database schemas and data logic
- **Controllers**: Request handling and business logic
- **Routes**: Endpoint definitions and HTTP method handling

## 🔧 Skills Demonstrated

- ✅ RESTful API development
- ✅ MVC architectural pattern implementation
- ✅ MongoDB database integration with Mongoose
- ✅ Express.js middleware usage
- ✅ Error handling in asynchronous Node.js code
- ✅ HTTP status codes for proper API responses
- ✅ Modular code organization

## 📝 Future Enhancements

- Authentication and authorization
- Input validation
- Pagination for listing endpoints
- Comprehensive test coverage
- API documentation with Swagger

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Made with ❤️ by [Your Name]
</p>
