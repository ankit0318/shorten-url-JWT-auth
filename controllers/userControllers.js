const User = require("../models/user");
const {v4:uuidv4}=require("uuid");
const { setUser } = require("../service/auth");
async function handleSignUp(req,res)
{
const {username,email,password}=req.body;
await User.create({
    username:username,
    email:email,
    password:password
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
    const sessionId=uuidv4();
    setUser(id,user);
    res.cookie("uid",sessionId);
    res.redirect("/url");  
}
module.exports={handleSignUp,handleLogin};