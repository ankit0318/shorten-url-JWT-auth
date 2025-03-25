const { nanoid } = require("nanoid");

const URL = require("../models/url.js");
async function handleShortenUrl(req, res) {
  const shortId = nanoid(8);
  if (!req.body) return res.status(400).json({ msg: "need url" });
  const url = req.body?.url || req.query?.url ;
  if (!url) {
    return res.status(400).json({ msg: "correct URL is required" });
  }
  const existingUrl=await URL.findOne({redirectUrl:url});
 if (existingUrl)
 {
  return res.json({
    shortUrl:`http://localhost:3000/url/${existingUrl.shortId}`,
    message: "URL already shortened previously"
  })
 }
  await URL.create({ shortId: shortId, redirectUrl: url, visitHistory: [] });
  res.status(201).render("home",{ shortUrl:`http://localhost:3000/url/${shortId}` })
  
  
}
const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  if (!result) return res.status(401).json({ msg: "enter correct url" });
  res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory.map((visit) => ({
      ...visit,
      // Ensure visit.timeStamp is valid before formatting
timeStamp: visit.timeStamp && !isNaN(new Date(visit.timeStamp).getTime()) 
  ? new Date(visit.timeStamp).toISOString() 
  : 'Invalid Date',
    })),
  });
};
const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;
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
};
module.exports = { handleShortenUrl, handleGetAnalytics, handleRedirectUrl };
