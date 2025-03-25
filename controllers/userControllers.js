const User = require("../models/user");

const { setUser, generateToken } = require("../service/auth");
async function handleSignUp(req,res)
{
const {username,email,password,role}=req.body;
await User.create({
    username:username,
    email:email,
    password:password,
    role:role
});
return res.redirect("login")
 

}
async function handleLogin(req,res)
{
    const {username,password}=req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
        return res.status(401).send("Invalid username or password");
    
    }
   
    const token=generateToken(user);
    res.cookie("token",token);
 
    res.redirect("/url");  
}
module.exports={handleSignUp,handleLogin};