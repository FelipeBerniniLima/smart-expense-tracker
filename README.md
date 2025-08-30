# Smart Group Expense Tracker

A comprehensive expense tracking application designed to help groups manage and split shared expenses efficiently. Built with a modern tech stack featuring a Node.js backend API and a React Native mobile application.

## Project Overview

The Smart Group Expense Tracker is a full-stack application that enables users to create groups, track shared expenses, and manage financial responsibilities within teams, families, or any collaborative setting. The application provides a seamless experience for recording expenses, categorizing spending, and maintaining transparency in group finances.

## Architecture

The project follows a client-server architecture with:

- **Backend API**: Node.js/Express.js REST API with PostgreSQL database
- **Mobile App**: React Native application using Expo framework
- **Database**: PostgreSQL with well-structured relational schema

## Features Implemented

### Backend API
- Express.js server with CORS support
- PostgreSQL database integration with connection pooling
- RESTful API endpoints for expense management
- Secure database schema with proper relationships
- Environment variable configuration support
- Error handling and logging

### Database Schema
- **Users Table**: User authentication and profile management
- **Groups Table**: Group creation and management
- **Expenses Table**: Expense tracking with categories and amounts
- **Group Members Table**: Many-to-many relationship for group membership
- **Sample Data**: Pre-populated test data for development

### Mobile Application
- React Native app with Expo framework
- Modern, responsive UI design
- Real-time expense fetching from API
- Expense display with detailed information
- Clean, intuitive user interface
- Cross-platform compatibility (iOS, Android, Web)

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: PostgreSQL with `pg` driver
- **Authentication**: JWT and bcryptjs for security
- **Development**: Nodemon for hot reloading
- **Environment**: dotenv for configuration

### Mobile App
- **Framework**: React Native 0.79.6
- **Development Platform**: Expo SDK 53
- **HTTP Client**: Axios for API communication
- **UI Components**: React Native built-in components
- **Styling**: StyleSheet with modern design principles

## Current Functionality

### API Endpoints
- `GET /` - Server health check
- `GET /api/expenses` - Retrieve all expenses with group and user details

### Mobile App Features
- Display application title and description
- Add New Expense button (UI ready, functionality pending)
- View Expenses button with real-time data fetching
- Expense list display showing:
  - Expense description
  - Amount
  - Paid by information
  - Group association
- Responsive design with modern UI elements

## Development Status

### Completed
- Project structure and setup
- Backend server configuration
- Database schema design and implementation
- Basic API endpoints
- Mobile app foundation
- UI/UX design implementation
- API integration between frontend and backend

### In Progress
- User authentication system
- Expense creation and management
- Group management features
- Expense splitting algorithms

### Planned Features
- User registration and login
- Expense creation and editing
- Group creation and management
- Expense splitting calculations
- Payment tracking and settlements
- Expense analytics and reporting
- Push notifications
- Offline support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- Expo CLI (for mobile development)
- Git

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your database credentials:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=expense_tracker
   DB_USER=your_username
   DB_PASSWORD=your_password
   PORT=3000
   ```

4. Set up the database:
   ```bash
   psql -U your_username -d expense_tracker -f database/schema.sql
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

### Mobile App Setup
1. Navigate to the mobile app directory:
   ```bash
   cd mobile/expense-tracker-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Use Expo Go app on your mobile device or run on emulator

## Database Schema

The application uses a relational database design with the following key tables:

- **users**: User accounts and authentication
- **groups**: Expense groups for organizing shared expenses
- **expenses**: Individual expense records with categorization
- **group_members**: Junction table for group membership

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication (ready for implementation)
- Environment variable configuration
- CORS protection
- Input validation and sanitization

## Mobile App Design

The mobile application features a clean, modern design with:
- Intuitive navigation
- Responsive layout
- Professional color scheme
- Clear typography hierarchy
- Touch-friendly interface elements

## Contributing

This project is currently in active development. Contributions are welcome! Please ensure to:
- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed
- Use meaningful commit messages

## License

This project is licensed under the ISC License.

## Roadmap

### Phase 1 (Current)
- Basic expense tracking
- Group management
- User authentication

### Phase 2
- Advanced expense splitting
- Payment integration
- Analytics dashboard

### Phase 3
- Multi-currency support
- Advanced reporting
- Mobile push notifications

---

**Note**: This project is actively being developed. Features and functionality may change as development progresses.
