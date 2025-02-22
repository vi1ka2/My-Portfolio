const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path=require('path');
// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Allow frontend requests
app.use(express.json()); // Parse JSON body
//static files
app.use(express.static(path.join(__dirname,'./client/build')));

// Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
 
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
  
})

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio API!");
});

// Global Error Handler (Optional)
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT ${PORT}`);
});
