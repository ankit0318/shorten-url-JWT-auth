const { verifyToken, getUserFromToken } = require("../service/auth");

function authenticateUser(req) {
  const userToken = req.cookies.token;
  if (!userToken) return null;

  if (!verifyToken(userToken)) return null;
  return getUserFromToken(userToken);
}

function restrictToLoggedUserOnly(req, res, next) {
  const user = authenticateUser(req);
  if (!user) return res.redirect("/user/login");
   
  req.user = user;
  next();
}

function restrictAuth(req, res, next, roles = ["admin","employee"]) {
  const user = authenticateUser(req);
  if (!user) return res.redirect("/user/login");

  if (roles.length > 0 && !roles.includes(user.role)) {
    return res.status(403).send("You are not authorized");
  }

  req.user = user;
  next();
}``

module.exports = { restrictToLoggedUserOnly, restrictAuth };