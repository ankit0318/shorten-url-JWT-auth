const express=require("express");
const { handleShortenUrl, handleGetAnalytics, handleRedirectUrl } = require("../controllers/controllers");

const router=express.Router();
router.post('/',handleShortenUrl);
router.get('/:shortId',handleRedirectUrl);
router.get("/analytics/:shortId",handleGetAnalytics);
router.get("/",(req,res)=>res.render("home", { shortUrl: null }));
module.exports=router;