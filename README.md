# Caffiend - Coffee Tracker Application

Caffiend is a React-based web application that helps coffee enthusiasts track their caffeine intake, monitor consumption patterns, and manage their coffee habits. Built with Firebase authentication and Firestore for data persistence.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Firebase Configuration](#firebase-configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Authentication](#authentication)
- [Data Models](#data-models)
- [Utility Functions](#utility-functions)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Coffee Tracking**: Log different types of coffee consumed with cost and time information
- **Caffeine Calculation**: Real-time calculation of active caffeine levels using half-life formula
- **Statistics Dashboard**: Visual representation of coffee consumption patterns
- **History Tracking**: Complete history of all coffee consumption
- **User Authentication**: Secure login and registration using Firebase Authentication
- **Personal Data**: Each user has their own coffee consumption history stored in Firestore
- **Responsive Design**: Mobile-friendly interface using FantaCSS

## Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: FantaCSS, Custom CSS
- **Build Tool**: Vite
- **Authentication**: Firebase Authentication
- **Database**: Firestore (Firebase)
- **Deployment**: GitHub Pages (or your preferred hosting)
- **Icons**: Font Awesome

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Firebase account
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Reddy076/Coffee-Tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Coffee-Tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Configuration

This application uses Firebase for authentication and data storage. You'll need to set up your own Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password method)
3. Create a Firestore database
4. Copy your Firebase configuration details

## Project Structure

```
src/
├── components/
│   ├── Authentication.jsx     # Login/Signup form
│   ├── CoffeeForm.jsx         # Coffee entry form
│   ├── Hero.jsx               # Landing page hero section
│   ├── History.jsx            # Coffee consumption history
│   ├── Layout.jsx             # Main layout with header/footer
│   ├── Modal.jsx              # Reusable modal component
│   └── Stats.jsx              # Statistics dashboard
├── context/
│   └── AuthContext.jsx        # Firebase authentication context
├── utils/
│   └── index.js               # Utility functions
├── assets/                    # Static assets
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
├── index.css                  # Global styles
└── fanta.css                  # FantaCSS framework
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint on the project

## Components

### Authentication
Handles user login and registration with Firebase Authentication.

### CoffeeForm
Allows users to log new coffee consumption entries with:
- Coffee type selection
- Cost input
- Time since consumption

### Hero
Landing page component with application introduction.

### History
Displays a timeline of coffee consumption with hover details.

### Layout
Provides the main application structure with header and footer.

### Modal
Reusable modal component for displaying forms and information.

### Stats
Dashboard showing various statistics:
- Active caffeine level
- Daily caffeine intake
- Average number of coffees
- Daily cost
- Total cost
- Top 3 favorite coffees

## Authentication

The application uses Firebase Authentication with:
- Email/password signup and login
- Protected routes for authenticated users
- User data stored in Firestore
- Context API for state management

## Data Models

### Coffee Entry
```javascript
{
  name: string,        // Coffee type name
  cost: string,        // Cost of coffee
  timestamp: number    // UTC timestamp
}
```

### User Data (Firestore)
```javascript
{
  email: string,              // User email
  createdAt: Date,            // Account creation date
  coffeeHistory: object       // User's coffee consumption history
}
```

## Utility Functions

### calculateCurrentCaffeineLevel
Calculates active caffeine level using half-life formula.

### calculateCoffeeStats
Computes various statistics from coffee consumption history.

### getCaffeineAmount
Returns caffeine content for a given coffee type.

### getTopThreeCoffees
Returns the three most consumed coffee types.

### timeSinceConsumption
Formats time elapsed since coffee consumption.

## Deployment

To deploy the application:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting platform.

For Firebase hosting:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Deploy: `firebase deploy`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [FantaCSS](https://www.fantacss.smoljames.com) - CSS framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Font Awesome](https://fontawesome.com/) - Icons
- [Vite](https://vitejs.dev/) - Build tool