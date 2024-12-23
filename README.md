# Job-Matching Platform with Scheduling Feature

## Overview

This project is a job-matching platform that includes a scheduling feature allowing users to schedule meetings directly within the app. The front-end is built using React, while the back-end is built using Express.js. The application includes basic unit tests and uses Tailwind CSS for styling.

## Features

- **Meeting Scheduling**: Users can schedule meetings with a title, date, time, and attendees.
- **Meeting Display**: Scheduled meetings are displayed in a card format.
- **Date and Time Selection**: Uses Material UI components for date and time selection.
- **API Endpoints**: CRUD operations for managing meetings.
- **Unit Tests**: Basic unit tests for components and API endpoints.
- **Styling**: Tailwind CSS for responsive and modern design.
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

# Job-Matching Platform with Scheduling Feature

## Overview

This project is a job-matching platform that includes a scheduling feature allowing users to schedule meetings directly within the app. The front-end is built using React, while the back-end is built using Express.js. The application includes basic unit tests and uses Tailwind CSS for styling.

## Features

* Meeting Scheduling: Users can schedule meetings with a title, date, time, and attendees.
* Meeting Display: Scheduled meetings are displayed in a card format.
* Date and Time Selection: Uses Material UI components for date and time selection.
* API Endpoints: CRUD operations for managing meetings.
* Unit Tests: Basic unit tests for components and API endpoints.
* Styling: Tailwind CSS for responsive and modern design.


## File Directory List

Here is a detailed file directory list for clarity:

```
job-matching-platform/
├── backend/
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
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── MeetingForm.jsx
│   │   │   ├── MeetingCard.jsx
│   │   │   ├── Calendar.jsx \(optional\)
│   │   │   ├── DatePicker.jsx
│   │   │   └── TimePicker.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── index.css \(or Tailwind CSS directly in components\)
│   ├── tests/
│   │   ├── meetingForm.test.js
│   │   ├── meetingCard.test.js
│   │   ├── meetingsApi.test.js
│   │   └── timezones.test.js
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│   └── tailwind.config.js
├── .gitignore
└── README.md
└── LICENSE
```

## Getting Started

### Prerequisites

* Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**

```bash
git clone [https://github.com/joelclouds/job-matching-platform.git](https://github.com/joelclouds/job-matching-platform.git)
cd job-matching-platform
```

2. **Install Dependencies**

   **Backend**

   ```bash
   cd backend
   npm install
   ```

   **Frontend**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   node server.js
   ```

   The server will start on http://localhost:5000.

2. **Start the Frontend Development Server**

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend will start on http://localhost:3000.

3. **Open the Application**

   Open your web browser and go to http://localhost:3000 to see the application.

### Testing

**Running Unit Tests**

**Backend**

```bash
cd backend
npm test
```

**Frontend**

```bash
cd ../frontend
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


### File Directory List
 
Here is a detailed file directory list for clarity:
job-matching-platform/
├── backend/
│ ├── models/
│ │ ├── meeting.js
│ │ └── user.js
│ ├── routes/
│ │ └── meetings.js
│ ├── utils/
│ │ ├── database.js
│ │ ├── notifications.js
│ │ └── timezones.js
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ └── favicon.ico
│ ├── src/
│ │ ├── components/
│ │ │ ├── MeetingForm.jsx
│ │ │ ├── MeetingCard.jsx
│ │ │ ├── Calendar.jsx (optional)
│ │ │ ├── DatePicker.jsx
│ │ │ └── TimePicker.jsx
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles/
│ │ └── index.css (or Tailwind CSS directly in components)
│ ├── tests/
│ │ ├── meetingForm.test.js
│ │ ├── meetingCard.test.js
│ │ ├── meetingsApi.test.js
│ │ └── timezones.test.js
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ └── tailwind.config.js
├── .gitignore
└── README.md
