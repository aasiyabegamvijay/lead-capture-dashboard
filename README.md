Lead Capture Dashboard (MERN Stack + Webhook Automation)

A full-stack Lead Capture web application built using the MERN stack. Users can submit leads through a form, view all leads in a dashboard, view individual lead details, and trigger a webhook automation when a new lead is created.

---

# Features

## Lead Capture
- Form with validation
- Required fields: Name, Email
- Source dropdown selection

## Lead Management
- Lead List Dashboard
- Lead Detail View
- Search filter

## Automation
- Webhook triggered on lead creation
- Webhook success and failure handling
- Webhook status stored and displayed

## UI / UX
- Responsive design (Mobile + Desktop)
- Clean professional layout
- Dark mode toggle
- Loading and error states
- Smooth animations

---

# Tech Stack

## Frontend
- React (Vite)
- React Router DOM
- Axios
- CSS (Custom modern UI)

## Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Axios (Webhook trigger)

## Tools
- MongoDB Atlas
- Webhook.site
- Git & GitHub

---

# Project Structure

lead-capture-dashboard/
├── client/
│ └── src/
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── config/
│ └── server.js
├── .env.example
└── README.md


---

# Setup Instructions

## Step 1 — Clone Repository

```bash
git clone https://github.com/aasiyabegamvijay/lead-capture-dashboard.git
cd lead-capture-dashboard
Step 2 — Backend
cd server
npm install
Create .env file inside the server/ folder:

MONGO_URI=your_mongodb_connection_string
WEBHOOK_URL=https://webhook.site/your-test-id
PORT=5000
Start backend:

npm run dev
Step 3 — Frontend
Open a new terminal:

cd client
npm install
npm run dev
API Endpoints
Create Lead
POST /api/leads

Get All Leads
GET /api/leads

Get Single Lead
GET /api/leads/:id

Webhook Integration
Webhook Trigger
When a new lead is created, the backend sends a POST request to the webhook URL configured in .env.

Payload Format
{
  "name": "John Doe",
  "email": "john@mail.com",
  "source": "Website",
  "created_at": "2026-02-11T10:00:00"
}
Webhook Flow
Lead saved to MongoDB

Webhook triggered

If success → webhook_status = success

If failed → webhook_status = failed

Status shown in UI

Bonus Features

Search filter in dashboard

Dark mode toggle

Webhook status badges

Reusable component structure

Animated UI transitions

Validation & Error Handling
Required field validation

Email format validation

Loading indicators

Webhook failure handling

Friendly error messages

Author
Aasiya Begam Vijay
https://github.com/aasiyabegamvijay

License
This project is for assessment and learning purposes.
