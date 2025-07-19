Project Name: JobCompass - Advanced API Integration with GitHub OAuth
Submitted by: M Boobeshwaran
Date: 10-07-2025

🚀 Project Overview
JobCompass is a powerful and fully responsive job search application built with secure OAuth authentication and third-party API integration. This project showcases full stack development capabilities, GitHub OAuth login flow, rate-limited API interaction, and dynamic UI updates using real-time data from the JSearch API.

It provides a smooth user experience with stylish UI components, advanced error handling, and persistent job bookmarking using localStorage.

🛠️ How to Run

Unzip the folder

Open terminal in the project directory

Run the following commands:

npm install  
node server.js  
Create a .env file in the root with:

GITHUB_CLIENT_ID=your_client_id  
GITHUB_CLIENT_SECRET=your_client_secret  
SESSION_SECRET=your_session_secret  
PORT=3000  

Open your browser and navigate to:
🌐 http://localhost:3000

🌟 Key Features

✅ GitHub OAuth 2.0 authentication
✅ Search jobs using JSearch API
✅ API request rate limiting (10/hour)
✅ Dynamic job results display
✅ Save/bookmark jobs using localStorage
✅ Load more jobs with pagination
✅ Toast notifications for feedback
✅ Responsive UI with Bootstrap 5
✅ Custom animations and transitions
✅ Error handling with fallback messages

🗂️ Project Structure

📁 Task 7 - JobCompass App With Advanced API Integration
├── index.html → Main application UI
├── style.css → Custom styling and responsive layout
├── script.js → Front-end logic and API interaction
├── server.js → Express.js server with GitHub OAuth and routes
├── authMiddleware.js → Middleware for session-based route protection
├── rateLimiter.js → Rate limiter for API calls
├── testApi.js → Optional testing script for API
├── .env → Environment variables
├── package.json → Node.js dependencies
└── Output.png → Image of final outputs

🌐 Tested On
Browsers: ✅ Chrome, ✅ Edge, ✅ Firefox
Devices: ✅ Desktop, ✅ Tablet, ✅ Mobile

📦 Dependencies
✅ Bootstrap 5
✅ Express.js
✅ Axios
✅ dotenv
✅ Passport & passport-github2
✅ express-session
✅ express-rate-limit
✅ Pure HTML, CSS, JS (client-side)

© 2025 Created by M. Boobeshwaran
Full Stack Intern @ Cognifyz Technologies