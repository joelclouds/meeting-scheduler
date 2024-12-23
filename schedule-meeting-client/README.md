## Job Matching Platform - Scheduling Feature

This guide provides instructions for setting up and running the job matching platform's scheduling feature locally.

**Prerequisites:**

* Node.js: https://nodejs.org/en

**Installation:**

1. **Clone the Repository:**
   Use Git to clone this repository to your local machine.

2. **Install Dependencies:**
   - Navigate to the project's root directory in your terminal.
   - Run `npm install` to install the required dependencies for both the front-end and back-end applications.

**Running the Application:**

1. **Back-End Server:**
   - Navigate to the project's root directory.
   - Run `node server.js` to start the Express.js server.

2. **Front-End Application:**
   - Navigate to the project's root directory.
   - Run `npm start` to start the React application.

**Running Tests:**

* **Front-end Tests:**
   - Run `npm test` to execute the front-end unit tests.

* **Back-end Tests:**
   - Run `npm run test:backend` to execute the back-end unit tests.

**Project Structure:**
```
repo/
├── client/        # Front-end application directory
│   ├── public/     # Contains static assets
│   │   └── index.html  # Main HTML file
│   ├── src/         # Source code for React components
│   │   ├── components/  # Reusable UI components
│   │   │   ├── MeetingForm.jsx
│   │   │   ├── MeetingCard.jsx
│   │   │   ├── Calendar.jsx (optional)
│   │   │   ├── DatePicker.jsx
│   │   │   └── TimePicker.jsx
│   │   ├── App.js      # Main application entry point
│   │   └── index.js    # Entry point for React application
│   ├── package.json  # Front-end dependencies
│   └── package-lock.json  # Dependency lock file
│   └── README.md     # Front-end project documentation
├── server/        # Back-end application directory
│   ├── models/      # Data models (meeting.js, user.js)
│   ├── routes/       # API endpoints (meetings.js)
│   ├── utils/        # Utility functions (database.js, notifications.js, timezones.js)
│   ├── server.js     # Main server file (Express.js)
│   ├── package.json  # Back-end dependencies
│   └── package-lock.json  # Dependency lock file
│   └── README.md     # Back-end project documentation
├── tests/          # Unit and integration tests
│   ├── meetingForm.test.js
│   ├── meetingCard.test.js
│   ├── meetingsApi.test.js
│   ├── timezones.test.js
│   ├── meetingFlow.test.js
```

# Integration tests for scheduling flow
│   └── meetingE2E.test.js   # End-to-end tests for scheduling feature
├── .gitignore      # Files excluded from Git version control
├── README.md       # This file (overall project documentation)
└── package.json    # Top-level project dependencies
