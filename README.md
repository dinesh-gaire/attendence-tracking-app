# Attendance Tracking App 📋

## Project Overview

The Attendance Tracking App is a modern web application designed to simplify event attendance management. Built with cutting-edge technologies, the app provides an intuitive and efficient solution for organizations to track and analyze event participation.

## 🌟 Key Features

- **Secure Authentication**: Powered by Kinde Auth
- **Real-time Event Tracking**: Instant attendance logging
- **Data Visualization**: Interactive charts and statistics
- **Responsive Design**: Works seamlessly across all devices
- **Easy-to-Use Interface**: Intuitive user experience

## 🛠 Technology Stack

- **Frontend**: 
  - Next.js (React framework)
  - React
  - Tailwind CSS
  - Recharts (Data Visualization)

- **Backend**:
  - Neon Database
  - Drizzle ORM
  - Kinde Auth

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (version 16.0.0 or higher)
- npm or yarn package manager
- A Kinde Auth account
- A Neon Database account

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dinesh-gaire/attendance-tracking-app.git
cd attendance-tracking-app
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root with the following configurations:

```bash
# Kinde Authentication
KINDE_CLIENT_ID=your_client_id
KINDE_CLIENT_SECRET=your_client_secret
KINDE_ISSUER_URL=https://your-kinde-subdomain.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

# Database Configuration
NEXT_PUBLIC_DATABASE_URL_CONFIG=your_neon_database_url
```

### 4. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

🌐 Open your browser and visit `http://localhost:3000`

## 🔧 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server |
| `build` | `npm run build` | Create production build |
| `start` | `npm run start` | Run production server |
| `lint` | `npm run lint` | Check code quality |
| `db:push` | `npm run db:push` | Update database schema |
| `db:studio` | `npm run db:studio` | Open database management interface |

## 📊 Database Setup

### Neon Database Configuration
1. Create an account at Neon Database
2. Set up a new database project
3. Copy your database connection URL
4. Add the URL to your `.env.local` file

### Pushing Database Changes
```bash
npm run db:push
```

### Opening Database Studio
```bash
npm run db:studio
```

## 🤝 Contributing Guidelines

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

## 📝 Notes

- This is a private project
- Unauthorized use, distribution, or modification is prohibited
- Contact project maintainers for permissions

## 🆘 Troubleshooting

- Ensure all environment variables are correctly set
- Verify Node.js and npm versions
- Check database connection
- Review Kinde Auth configuration

## 📞 Support

For issues or questions, please:
- Check the documentation
- Open a GitHub issue
- Contact the project maintainers

## 📜 License

Proprietary software. All rights reserved.
