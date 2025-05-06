import Link from "next/link"
import { ChevronRight, Filter, Search, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Project Showcase</h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">Various JavaScript projects for hands-on learning</p>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Projects</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Search projects..." className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-emerald-600" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Basic</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vanilla">Vanilla JavaScript</SelectItem>
                  <SelectItem value="react">React.js</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="fullstack">Full-Stack</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

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

function ProjectCard({ project }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-emerald-800">{project.title}</CardTitle>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              project.level === "Basic"
                ? "bg-green-100 text-green-700"
                : project.level === "Intermediate"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {project.level}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          <div className="mb-1">
            <strong>Duration:</strong> {project.duration}
          </div>
          <div>
            <strong>Learning Points:</strong> {project.learningPoints}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          <Code className="mr-2 h-4 w-4" /> View Code
        </Button>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

const projects = [
  {
    title: "Todo Application",
    level: "Basic",
    description: "A task management app using DOM manipulation and local storage",
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "1 week",
    learningPoints: "DOM manipulation, event handling, local storage",
  },
  {
    title: "Calculator Application",
    level: "Basic",
    description: "Create a functional calculator using JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "3 days",
    learningPoints: "Event handling, functions, DOM manipulation",
  },
  {
    title: "Weather Application",
    level: "Intermediate",
    description: "Weather information app using API calls and async JavaScript",
    technologies: ["JavaScript", "API", "CSS"],
    duration: "1 week",
    learningPoints: "Fetch API, async/await, JSON parsing",
  },
  {
    title: "Movie Search Application",
    level: "Intermediate",
    description: "Search and display movie details using a movie database API",
    technologies: ["JavaScript", "API", "CSS"],
    duration: "1 week",
    learningPoints: "API integration, data filtering, dynamic content",
  },
  {
    title: "E-commerce Product Page",
    level: "Intermediate",
    description: "An interactive e-commerce product page using React.js",
    technologies: ["React", "CSS", "JavaScript"],
    duration: "2 weeks",
    learningPoints: "React components, state management, event handling",
  },
  {
    title: "Blog Application",
    level: "Advanced",
    description: "A complete blog application using the MERN stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    duration: "4 weeks",
    learningPoints: "Full-stack development, CRUD operations, authentication",
  },
  {
    title: "Real-time Chat Application",
    level: "Advanced",
    description: "A real-time chat application using Socket.io",
    technologies: ["React", "Node.js", "Socket.io", "Express"],
    duration: "3 weeks",
    learningPoints: "Real-time communication, Socket.io, state management",
  },
  {
    title: "Complete E-commerce Platform",
    level: "Advanced",
    description: "A full e-commerce platform with Next.js and Stripe payment gateway",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    duration: "6 weeks",
    learningPoints: "Next.js, payment gateway integration, authentication, database",
  },
  {
    title: "AI Chatbot",
    level: "Advanced",
    description: "An AI chatbot application using OpenAI API",
    technologies: ["React", "Node.js", "OpenAI API"],
    duration: "3 weeks",
    learningPoints: "AI integration, API calls, streaming responses",
  },
]
