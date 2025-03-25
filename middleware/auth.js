const { getUser } = require("../service/auth");

async function restrictToLoggedUserOnly(req,res,next)
{
const userUid=req.cookies.uid;
if(!userUid)
    return res.redirect("/user/login");

const user=getUser(userId);
if(!user)
    return res.redirect("/user/login");
req.user=user;
next();
}
module.exports={restrictToLoggedUserOnly};