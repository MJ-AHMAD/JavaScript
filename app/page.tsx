import Link from "next/link"
import { GithubIcon, Coffee, BookOpen, Code, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">JavaScript Mastery</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              A complete open-source JavaScript learning platform for students in Bangladesh
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-100">
                <BookOpen className="mr-2 h-5 w-5" /> Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <GithubIcon className="mr-2 h-5 w-5" /> View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Features */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">Project Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-10 w-10 text-emerald-600" />}
            title="Complete Course in Simple English"
            description="All JavaScript topics explained in simple English for Bangladeshi students"
          />
          <FeatureCard
            icon={<Code className="h-10 w-10 text-emerald-600" />}
            title="Hands-on Projects"
            description="50+ practical projects to help build your portfolio and gain real experience"
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-emerald-600" />}
            title="Community Support"
            description="Connect with fellow students and experienced developers from Bangladesh"
          />
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">Learning Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RoadmapCard
              level="Level 1"
              title="JavaScript Fundamentals"
              topics={[
                "Variables & Data Types",
                "Operators",
                "Conditional Statements",
                "Loops",
                "Functions",
                "Arrays & Objects",
              ]}
            />
            <RoadmapCard
              level="Level 2"
              title="Advanced JavaScript"
              topics={[
                "DOM Manipulation",
                "Event Handling",
                "Async JavaScript",
                "Promises",
                "Async/Await",
                "API Calls",
              ]}
            />
            <RoadmapCard
              level="Level 3"
              title="Frontend Frameworks"
              topics={["React.js", "Vue.js", "Components", "State Management", "Routing", "API Integration"]}
            />
            <RoadmapCard
              level="Level 4"
              title="Full-Stack Development"
              topics={["Node.js", "Express.js", "MongoDB", "RESTful API", "Authentication", "Deployment"]}
            />
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">Project Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Todo Application"
            level="Basic"
            description="A task management app using DOM manipulation and local storage"
            technologies={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Weather Application"
            level="Intermediate"
            description="Weather information app using API calls and async JavaScript"
            technologies={["JavaScript", "API", "CSS"]}
          />
          <ProjectCard
            title="E-commerce Website"
            level="Advanced"
            description="Complete e-commerce platform using React.js and Node.js"
            technologies={["React", "Node.js", "MongoDB"]}
          />
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Rocket className="mr-2 h-5 w-5" /> View All Projects
          </Button>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contribute to the Project</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contribute to this open-source project. Help by adding new tutorials, fixing code, or updating
            documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <GithubIcon className="mr-2 h-5 w-5" /> Contribute on GitHub
            </Button>
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100">
              <Coffee className="mr-2 h-5 w-5" /> Support the Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">JavaScript Mastery Bangladesh</h3>
              <p className="text-emerald-200">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/MJ-AHMAD" className="text-white hover:text-emerald-200">
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/Sponsors/MJ-AHMAD" className="text-white hover:text-emerald-200">
                <Users className="h-6 w-6" />
              </Link>
              <Link href="https://ko-fi.com/mjahmad" className="text-white hover:text-emerald-200">
                <Coffee className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-emerald-200">
            <p>Contact: mjahmad2024@outlook.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-emerald-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function RoadmapCard({ level, title, topics }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2 bg-emerald-50">
        <div className="text-sm font-medium text-emerald-600">{level}</div>
        <CardTitle className="text-lg text-emerald-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-emerald-500">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, level, description, technologies }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-emerald-800">{title}</CardTitle>
          <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">{level}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          View Project
        </Button>
      </CardFooter>
    </Card>
  )
}
