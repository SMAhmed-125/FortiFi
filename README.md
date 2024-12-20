﻿# FortiFi

FortiFi - Financial Goal Planner

Project Overview
FortiFi is a financial planning web application. This application helps users manage their budget, track financial goals, and monitor transactions in a single platform.

This project involved both frontend and backend development, where I took the lead on building the backend with Node.js, MongoDB, and Express, and creating API endpoints to manage data. I received assistance with implementing the frontend using React, HTML, and CSS.

Tech Stack
Frontend: React, HTML, CSS
Backend: Node.js, Express.js, MongoDB
Other Tools: MongoDB Atlas for cloud database hosting, Axios for API requests, Chart.js for data visualization, Devpost for project submission.
Key Features
Budget Management: Allows users to set a monthly budget and track spending in various categories.
Goal Tracking: Enables users to set financial goals and track their progress towards reaching them.
Transaction History: Provides a detailed log of user transactions, showing deposits, withdrawals, and other financial actions.
Notifications: Alerts users when they reach specific financial milestones or need to adjust their spending.
I started working but could not spend significant time on authentication.

Project Structure
Backend
I developed the backend with Express.js and MongoDB, setting up the following main components:

User Management: User registration, login, and authentication using JWT tokens.
Budget API: Endpoints to manage user budgets, including setting monthly budgets and viewing spending summaries.
Goal API: Endpoints to create, update, and track progress on user-defined financial goals.
Transaction API: Endpoints to log and retrieve user transactions, categorized for better tracking.
Notification API: Sends alerts for reaching milestones, budget limits, or other important updates.
Frontend
The frontend was developed using React, with assistance provided for implementing the UI and ensuring a responsive, user-friendly experience. I integrated the API endpoints with the frontend using Axios and created several React components, including:

Dashboard: A central view displaying user budgets, goals, and transaction summaries.
Navigation: A styled navigation bar for seamless access to different sections of the app.
Charts: Visual representations of user budgets, spending, and goal progress using Chart.js.
Assistance Received
I received support with setting up the frontend in React and implementing the following:

React Components: Assistance with structuring React components and managing state.
HTML/CSS Styling: Help with layout design and styling to create a cohesive and visually appealing interface.
Data Integration: Guidance on using Axios to fetch data from the backend and render it in the frontend.

How to Run the Project
Backend
Clone the repository and navigate to the backend directory.
Install dependencies:
bash
Copy code
npm install
Set up a .env file with necessary environment variables:
plaintext
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server:
bash
Copy code
npm start
Frontend
Navigate to the frontend directory.

Install dependencies:
bash
Copy code
npm install
Start the frontend server:
bash
Copy code
npm start
Usage
Register or log in to access the app.
Navigate through the app to set budgets, add financial goals, and log transactions.
Monitor financial goals and spending through real-time data visualizations on the Dashboard.

Video Demo
A video demo is available as part of the Devpost submission, showcasing the main features of FortiFi.

Attribution
APIs: I developed all backend APIs and endpoint logic.
Frontend Assistance: Received guidance with React, HTML, and CSS for structuring and styling the application.
License

This project is licensed under the MIT License.
