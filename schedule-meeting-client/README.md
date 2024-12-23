Instructions to Run the Application Locally
Install Node.js: Ensure you have Node.js installed on your machine.
Clone the Repository: Clone this repository to your local machine.
Install Dependencies:
Navigate to the root directory of the project.
Run npm install to install the necessary dependencies for both front-end and back-end.
Run the Back-End Server:
Navigate to the root directory of the project.
Run node server.js to start the Express.js server.
Run the Front-End Application:
Navigate to the root directory of the project.
Run npm start to start the React application.
Run Tests:
To run front-end tests, use npm test.
To run back-end tests, use npm run test:backend.

Project structure

repo
├── client/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── MeetingForm.jsx
│   │   │   ├── MeetingCard.jsx
│   │   │   ├── Calendar.jsx
│   │   │   ├── DatePicker.jsx
│   │   │   └── TimePicker.jsx
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── server/
│   ├── models/
│   │   ├── meeting.js
│   │   └── user.js
│   ├── routes/
│   │   └── meetings.js
│   ├── utils/
│   │   ├── database.js
│   │   ├── notifications.js
│   │   └── timezones.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── tests/
│   ├── meetingForm.test.js
│   ├── meetingCard.test.js
│   ├── meetingsApi.test.js
│   ├── timezones.test.js
│   ├── meetingFlow.test.js
│   └── meetingE2E.test.js
├── .gitignore
├── README.md
└── package.json