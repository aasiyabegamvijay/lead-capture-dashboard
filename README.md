Lead Capture Dashboard (MERN)

A full-stack Lead Capture web application built with the MERN stack that collects leads, displays them in a dashboard, and triggers a webhook automation when a new lead is created.

📌 Features
✅ Frontend

Lead Capture Form with validation

Lead List Dashboard (table view)

Lead Detail Page

Responsive design (mobile + desktop)

Loading states & error handling

Search functionality

Dark mode toggle

✅ Backend

REST API with Express

MongoDB database (Atlas)

Webhook trigger on lead creation

Webhook success/failure tracking

🛠 Tech Stack

Frontend

React

React Router

Axios

CSS (Custom)

Backend

Node.js

Express.js

MongoDB (Mongoose)

Axios (Webhook trigger)

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/aasiyabegamvijay/lead-capture-dashboard.git
cd lead-capture-dashboard

2️⃣ Backend Setup
cd backend
npm install


Create .env file inside backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
WEBHOOK_URL=https://webhook.site/your-test-id


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/leads	Create new lead
GET	/api/leads	Get all leads
GET	/api/leads/:id	Get single lead
🔔 Webhook Integration

When a lead is successfully created:

Backend sends lead data to a webhook URL

Webhook response is handled

Lead record stores webhook status (success, failed, pending)

Payload Format:
{
  "name": "John Doe",
  "email": "john@mail.com",
  "source": "Website",
  "created_at": "2026-02-11T10:00:00"
}

🧪 Bonus Features Implemented

Search/filter leads

Dark mode toggle

Status badges

Reusable components

Professional UI animations

👩‍💻 Author

Aasiya Begam S

📜 License

This project is for educational and screening purposes.