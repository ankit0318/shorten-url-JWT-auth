const jwt = require("jsonwebtoken");

const SECRET_KEY = "opensesame"; // Replace with a secure key

function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username ,role: user.role}, SECRET_KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        console.error("Invalid token:", err);
        return null;
    }
}

function getUserFromToken(token) {
    const decoded = verifyToken(token);
    if (!decoded) return null;
    return { id: decoded.id, username: decoded.username ,role:decoded.role};
}

module.exports = { generateToken, verifyToken, getUserFromToken };