<div align="center">
  <img src="https://mj-ahmad.github.io/mja2025/img/logo.png" alt="Trusted Ally Logo" width="150"/>
  <h1>JavaScript Mastery</h1>
  <p><strong>Master JavaScript from Zero to Hero</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
  [![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=javascript-mastery)](https://javascript-mastery.vercel.app)
  [![Discord](https://img.shields.io/discord/123456789?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/javascript-mastery)
  [![Twitter Follow](https://img.shields.io/twitter/follow/js_mastery?style=social)](https://twitter.com/js_mastery)
  [![GitHub Sponsors](https://img.shields.io/badge/GitHub-Sponsor-EA4AAA)](https://github.com/sponsors/MJ-AHMAD)
  [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K21EK2ML)
</div>

## 🚀 About JavaScript Mastery

JavaScript Mastery is a comprehensive, open-source learning platform designed to help anyone master JavaScript programming. From beginners to advanced developers, our structured curriculum, interactive projects, and supportive community provide everything you need to become proficient in JavaScript and modern web development.

### ✨ Key Features

- **Structured Learning Path**: Follow a clear roadmap from fundamentals to advanced concepts
- **Interactive Courses**: Learn by doing with hands-on exercises and coding challenges
- **Project-Based Learning**: Build real-world projects to apply your knowledge
- **Community Support**: Connect with fellow learners and experienced developers
- **Progress Tracking**: Monitor your learning journey with detailed progress analytics
- **Blog & Resources**: Access regularly updated articles, tutorials, and resources
- **Responsive Design**: Learn on any device with our mobile-friendly interface

## 📋 Table of Contents

- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [License](#-license)
- [Contact](#-contact)

## 🏁 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Quick Start

1. Clone the repository:
   ```
   git clone https://github.com/mj-ahmad/javascript.git
   cd javascript-mastery
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📂 Project Structure

```
javascript-mastery/
├── app/                  # Next.js app directory
│   ├── admin/            # Admin dashboard
│   ├── blog/             # Blog section
│   ├── dashboard/        # User dashboard
│   ├── projects/         # Projects section
│   ├── resources/        # Learning resources
│   ├── roadmap/          # Learning roadmap
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
├── data/                 # JSON data files
├── lib/                  # Utility functions and API client
├── public/               # Static assets
├── server.js             # Express.js server
├── .env.example          # Example environment variables
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore file
├── CONTRIBUTING.md       # Contributing guidelines
├── CODE_OF_CONDUCT.md    # Code of conduct
├── LICENSE               # MIT license
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🔧 Installation

### Frontend (Next.js)

1. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

2. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

### Backend (Express.js)

1. Navigate to the project root:
   ```
   cd javascript
   ```

2. Install dependencies (if not already done):
   ```
   npm install
   # or
   yarn install
   ```

3. Start the API server:
   ```
   npm start
   # or
   yarn start
   ```

The API server will run on port 5000 by default. You can change this by setting the PORT environment variable.

## 🚀 Deployment

### Deploying to Vercel

The easiest way to deploy JavaScript Mastery is using [Vercel](https://vercel.com), the platform built by the creators of Next.js.

1. Create a Vercel account if you don't have one.
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   # or
   yarn global add vercel
   ```

3. Run the deployment command from the project root:
   ```
   vercel
   ```

4. Follow the prompts to complete the deployment.

For production deployment:
```
vercel --prod
```

### Environment Variables

Make sure to set the following environment variables in your Vercel project settings:

- `NEXT_PUBLIC_API_URL`: URL of your API server
- `DATABASE_URL`: (If using a database)
- `AUTH_SECRET`: Secret for authentication

### Continuous Deployment

For continuous deployment, connect your GitHub repository to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure your project settings
5. Deploy

## 📚 API Documentation

### API Endpoints

#### Root

- `GET /` - Get API information and available endpoints

#### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user by ID
- `POST /api/users` - Create a new user

#### Courses

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get a specific course by ID
- `POST /api/courses` - Create a new course

#### Blog

- `GET /api/blog` - Get all blog articles
- `GET /api/blog/:id` - Get a specific blog article by ID
- `POST /api/blog` - Create a new blog article

#### Progress

- `GET /api/progress` - Get all user progress data
- `GET /api/progress/:userId` - Get progress data for a specific user
- `POST /api/progress` - Create new progress data
- `PUT /api/progress/:userId` - Update progress data for a specific user

### API Client

The project includes a TypeScript API client for easy integration with the frontend:

```
import apiClient from '@/lib/api-client';

// Examples
const users = await apiClient.user.getAll();
const course = await apiClient.course.getById(1);
const articles = await apiClient.blog.getAll();
const userProgress = await apiClient.progress.getByUserId(1);
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for participation in our community.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Sponsors

Trusted Ally is supported by our generous sponsors. If you'd like to support our work, please consider 

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-MJ--AHMAD-ea4aaa?style=for-the-badge&logo=github-sponsors)](https://github.com/sponsors/MJ-AHMAD)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K21EK2ML)

## 📞 Contact

- **Email**: t-ally@outlook.com, mjahmad2024@outlook.com
- **GitHub**: [MJ-AHMAD](https://github.com/MJ-AHMAD)
- **LinkedIn**: [Jafor Ahmad](https://linkedin.com/in/jafor-ahmad/)

## 🙏 Acknowledgements

- All our volunteers and contributors
- Our community partners
- Educational institutions that collaborate with us


