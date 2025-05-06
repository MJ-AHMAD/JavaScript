import Link from "next/link"
import { ChevronRight, BookOpen, Code, Server, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">JavaScript Learning Roadmap</h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              A complete guide to learning JavaScript from beginner to advanced level
            </p>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Roadmap</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {/* Level 1: JavaScript Fundamentals */}
          <section>
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Level 1: JavaScript Fundamentals</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Start your JavaScript journey with the basics. In this level, you'll learn the fundamental concepts of
              programming.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCard
                title="Introduction to JavaScript"
                description="What is JavaScript, why use it, and how to set it up"
                duration="1 week"
              />
              <TopicCard
                title="Variables & Data Types"
                description="Declaring variables, primitive and non-primitive data types"
                duration="1 week"
              />
              <TopicCard
                title="Operators & Expressions"
                description="Arithmetic, logical, comparison operators and expressions"
                duration="1 week"
              />
              <TopicCard
                title="Conditional Statements"
                description="if-else, switch, ternary operator"
                duration="1 week"
              />
              <TopicCard title="Loops" description="for, while, do-while, forEach loops" duration="1 week" />
              <TopicCard
                title="Functions"
                description="Function declaration, expression, arrow functions, parameters"
                duration="2 weeks"
              />
              <TopicCard title="Arrays" description="Array manipulation, array methods, iteration" duration="1 week" />
              <TopicCard
                title="Objects"
                description="Object creation, properties, methods, destructuring"
                duration="2 weeks"
              />
              <TopicCard title="Error Handling" description="try-catch, throw, error types" duration="1 week" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Project Ideas:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Simple Calculator Application</li>
                <li>Todo List (Basic Version)</li>
                <li>Quiz Application</li>
                <li>Temperature Converter</li>
              </ul>
            </div>
          </section>

          {/* Level 2: Advanced JavaScript */}
          <section>
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Level 2: Advanced JavaScript</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Learn more advanced JavaScript topics and build interactive websites in the browser.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCard
                title="DOM Manipulation"
                description="Selectors, creating/updating/deleting elements, changing styles"
                duration="2 weeks"
              />
              <TopicCard
                title="Event Handling"
                description="Event listeners, event bubbling, delegation"
                duration="1 week"
              />
              <TopicCard
                title="Local Storage"
                description="Browser storage, session storage, cookies"
                duration="1 week"
              />
              <TopicCard title="Async JavaScript" description="Callbacks, promises, async/await" duration="2 weeks" />
              <TopicCard title="Fetch API" description="API calls, data fetching, JSON parsing" duration="1 week" />
              <TopicCard
                title="ES6+ Features"
                description="Arrow functions, template literals, destructuring, spread/rest"
                duration="2 weeks"
              />
              <TopicCard title="Modules" description="Import/export, module patterns" duration="1 week" />
              <TopicCard title="Classes & OOP" description="Classes, inheritance, encapsulation" duration="2 weeks" />
              <TopicCard
                title="Functional Programming"
                description="Pure functions, higher-order functions, map/filter/reduce"
                duration="2 weeks"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Project Ideas:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Weather Application (using API)</li>
                <li>Interactive Form Validation</li>
                <li>Note Taking Application (using local storage)</li>
                <li>Movie Search Application</li>
              </ul>
            </div>
          </section>

          {/* Level 3: Frontend Frameworks */}
          <section>
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Level 3: Frontend Frameworks</h2>
            </div>
            <p className="text-gray-700 mb-6">Learn modern frontend frameworks and build scalable web applications.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCard
                title="React.js Fundamentals"
                description="Components, props, state, lifecycle methods"
                duration="3 weeks"
              />
              <TopicCard title="Hooks" description="useState, useEffect, useContext, custom hooks" duration="2 weeks" />
              <TopicCard title="State Management" description="Context API, Redux, Zustand" duration="2 weeks" />
              <TopicCard title="Routing" description="React Router, dynamic routes, nested routes" duration="1 week" />
              <TopicCard
                title="Form Handling"
                description="Controlled components, form validation, React Hook Form"
                duration="1 week"
              />
              <TopicCard title="API Integration" description="Axios, SWR, React Query" duration="1 week" />
              <TopicCard title="Styling" description="CSS modules, styled components, Tailwind CSS" duration="1 week" />
              <TopicCard title="Testing" description="Jest, React Testing Library" duration="2 weeks" />
              <TopicCard title="Next.js" description="SSR, SSG, API routes, middleware" duration="3 weeks" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Project Ideas:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Blog Application</li>
                <li>E-commerce Product Page</li>
                <li>Social Media Dashboard</li>
                <li>Portfolio Website</li>
              </ul>
            </div>
          </section>

          {/* Level 4: Full-Stack Development */}
          <section>
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Level 4: Full-Stack Development</h2>
            </div>
            <p className="text-gray-700 mb-6">Learn backend development and build complete full-stack applications.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCard
                title="Node.js Fundamentals"
                description="Module system, file system, event loop"
                duration="2 weeks"
              />
              <TopicCard title="Express.js" description="Routes, middleware, error handling" duration="2 weeks" />
              <TopicCard
                title="RESTful API"
                description="API design, CRUD operations, status codes"
                duration="2 weeks"
              />
              <TopicCard title="Databases" description="MongoDB, Mongoose, SQL, PostgreSQL" duration="3 weeks" />
              <TopicCard title="Authentication" description="JWT, OAuth, Passport.js" duration="2 weeks" />
              <TopicCard title="File Upload" description="Multer, cloud storage" duration="1 week" />
              <TopicCard title="Security" description="Input validation, XSS, CSRF prevention" duration="1 week" />
              <TopicCard title="Deployment" description="Heroku, Netlify, Vercel, Docker" duration="1 week" />
              <TopicCard title="Testing" description="Mocha, Chai, Supertest" duration="2 weeks" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Project Ideas:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Complete E-commerce Application</li>
                <li>Social Media Platform</li>
                <li>Project Management Tool</li>
                <li>Blog Platform</li>
                <li>Real-time Chat Application</li>
              </ul>
            </div>
          </section>

          {/* Level 5: Advanced Topics */}
          <section>
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Level 5: Advanced Topics</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Learn advanced topics in modern web development and enhance your skills further.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TopicCard title="GraphQL" description="Schema, resolvers, Apollo client/server" duration="3 weeks" />
              <TopicCard title="TypeScript" description="Types, interfaces, generics, enums" duration="3 weeks" />
              <TopicCard title="Microservices" description="Service architecture, API gateway" duration="3 weeks" />
              <TopicCard
                title="Real-time Applications"
                description="Socket.io, WebSockets, Firebase"
                duration="2 weeks"
              />
              <TopicCard
                title="Performance Optimization"
                description="Code splitting, lazy loading, memoization"
                duration="2 weeks"
              />
              <TopicCard
                title="PWA"
                description="Service workers, offline support, push notifications"
                duration="2 weeks"
              />
              <TopicCard
                title="Serverless"
                description="AWS Lambda, Firebase Functions, Vercel Serverless"
                duration="2 weeks"
              />
              <TopicCard
                title="Blockchain Development"
                description="Web3.js, Ethereum, smart contracts"
                duration="4 weeks"
              />
              <TopicCard title="AI Integration" description="TensorFlow.js, OpenAI API" duration="3 weeks" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Project Ideas:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Real-time Collaborative Editor</li>
                <li>Cryptocurrency Tracking App</li>
                <li>AI Chatbot</li>
                <li>Multiplayer Game</li>
                <li>Video Conferencing App</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">JavaScript Mastery Bangladesh</h3>
          <p className="text-emerald-200 mb-4">© {new Date().getFullYear()} All Rights Reserved</p>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
            <Link href="/">Return to Home Page</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}

function TopicCard({ title, description, duration }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-emerald-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base mb-3">{description}</CardDescription>
        <div className="text-sm font-medium text-emerald-600">Duration: {duration}</div>
      </CardContent>
    </Card>
  )
}
