Lead Capture Dashboard with Webhook Integration

A full-stack MERN web application for capturing leads and triggering automation workflows using webhooks.
Built as part of the MERN / Automation Developer Screening Assignment.

📌 Features

✅ Lead capture form with validation

✅ Lead dashboard with search & filtering

✅ Lead detail view page

✅ Webhook trigger on lead creation

✅ Webhook success/failure tracking

✅ Modern UI with dark mode toggle

✅ Responsive design (Mobile + Desktop)

✅ Error handling & loading states

✅ Clean API architecture

🛠 Tech Stack
Frontend

React (Vite)

React Router DOM

Axios

Custom CSS (Modern UI + Dark Mode)

Backend

Node.js

Express.js

MongoDB (Mongoose)

Axios (Webhook calls)

dotenv

Tools

MongoDB Atlas

Webhook.site (Webhook testing)

GitHub

📁 Project Structure
lead-capture-dashboard/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── lead-dashboard/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/aasiyabegamvijay/lead-capture-dashboard
cd lead-capture-dashboard

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend/:

PORT=5000
MONGO_URI=mongodb+srv://admin:K5t7cVJ52VpJd2Lw@cakedb.p50hzai.mongodb.net/leadDashboardDB?retryWrites=true&w=majority
WEBHOOK_URL=https://webhook.site/d284ea1b-23ac-4aec-8e15-bf329025a6d9



Start backend:

npm start


Server runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd ../lead-dashboard
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔌 API Endpoints
Method	Endpoint	Description
POST	/api/leads	Create new lead
GET	/api/leads	Get all leads
GET	/api/leads/:id	Get single lead

🔗 Webhook Integration Explanation

When a new lead is created:

Lead data is saved to MongoDB.

Backend sends a POST request to the webhook URL.

Payload format:

{
  "name": "John Doe",
  "email": "john@mail.com",
  "source": "Website",
  "created_at": "2026-02-11T10:00:00"
}


If webhook succeeds → webhook_status = "success"

If webhook fails → webhook_status = "failed"

Status is stored in database and shown in UI.

🎯 UI Screens

Lead Creation Form

Lead Dashboard Table

Lead Detail View

Dark Mode Toggle

Loading & Error States

✅ Assignment Requirements Coverage
Requirement	Status
Lead Form	✅
Lead List Page	✅
Lead Detail View	✅
Responsive UI	✅
Validation	✅
Webhook Integration	✅
Error Handling	✅
Loading States	✅
Search / Filter	✅
Dark Mode	✅
📦 Future Enhancements (Optional)

Analytics chart (Leads per source)

Pagination

Authentication

Admin dashboard

👨‍💻 Author

Aasiya Begam S
MERN Stack Developer
GitHub: https://github.com/aasiyabegamvijay