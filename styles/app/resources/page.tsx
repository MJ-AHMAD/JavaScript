import Link from "next/link"
import { ChevronRight, BookOpen, Video, Globe, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Learning Resources</h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              The best books, tutorials, videos, and other resources for learning JavaScript
            </p>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Resources</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <ResourceCard
                  key={index}
                  title={book.title}
                  description={book.description}
                  author={book.author}
                  level={book.level}
                  icon={<BookOpen className="h-10 w-10 text-emerald-600" />}
                  link={book.link}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <ResourceCard
                  key={index}
                  title={tutorial.title}
                  description={tutorial.description}
                  author={tutorial.author}
                  level={tutorial.level}
                  icon={<Globe className="h-10 w-10 text-emerald-600" />}
                  link={tutorial.link}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <ResourceCard
                  key={index}
                  title={video.title}
                  description={video.description}
                  author={video.author}
                  level={video.level}
                  icon={<Video className="h-10 w-10 text-emerald-600" />}
                  link={video.link}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <ResourceCard
                  key={index}
                  title={tool.title}
                  description={tool.description}
                  author={tool.author}
                  level={tool.level}
                  icon={<Download className="h-10 w-10 text-emerald-600" />}
                  link={tool.link}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
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

function ResourceCard({ title, description, author, level, icon, link }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-emerald-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base mb-4">{description}</CardDescription>
        <div className="text-sm text-gray-500">
          <div className="mb-1">
            <strong>Author/Publisher:</strong> {author}
          </div>
          <div>
            <strong>Level:</strong> {level}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> View Resource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const books = [
  {
    title: "JavaScript: The Good Parts",
    description: "A classic book discussing the best parts of JavaScript",
    author: "Douglas Crockford",
    level: "Intermediate",
    link: "#",
  },
  {
    title: "Eloquent JavaScript",
    description: "A great book for learning the JavaScript programming language",
    author: "Marijn Haverbeke",
    level: "Basic to Advanced",
    link: "#",
  },
  {
    title: "You Don't Know JS",
    description: "A series discussing deep topics in JavaScript",
    author: "Kyle Simpson",
    level: "Advanced",
    link: "#",
  },
  {
    title: "JavaScript for Beginners",
    description: "A complete guide to learning JavaScript in simple English",
    author: "Hasin Hayder",
    level: "Basic",
    link: "#",
  },
  {
    title: "JavaScript Design Patterns",
    description: "A guide to using design patterns in JavaScript",
    author: "Addy Osmani",
    level: "Advanced",
    link: "#",
  },
  {
    title: "Learning React",
    description: "A comprehensive guide to learning React.js",
    author: "Alex Banks",
    level: "Intermediate",
    link: "#",
  },
]

const tutorials = [
  {
    title: "MDN Web Docs",
    description: "The most comprehensive and reliable documentation for JavaScript",
    author: "Mozilla",
    level: "All Levels",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "W3Schools JavaScript Tutorial",
    description: "An easy way to learn JavaScript with interactive examples",
    author: "W3Schools",
    level: "Basic",
    link: "https://www.w3schools.com/js/",
  },
  {
    title: "JavaScript.info",
    description: "Modern JavaScript tutorial",
    author: "Ilya Kantor",
    level: "Basic to Advanced",
    link: "https://javascript.info/",
  },
  {
    title: "freeCodeCamp JavaScript Course",
    description: "Free JavaScript course with interactive coding challenges",
    author: "freeCodeCamp",
    level: "Basic to Intermediate",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
  },
  {
    title: "React Documentation",
    description: "Official React.js documentation",
    author: "Meta",
    level: "Intermediate",
    link: "https://react.dev/",
  },
  {
    title: "Node.js Documentation",
    description: "Official Node.js documentation",
    author: "Node.js Foundation",
    level: "Intermediate",
    link: "https://nodejs.org/en/docs/",
  },
]

const videos = [
  {
    title: "JavaScript Crash Course",
    description: "Learn JavaScript fundamentals in 1 hour",
    author: "Traversy Media",
    level: "Basic",
    link: "#",
  },
  {
    title: "JavaScript Tutorial for Bangladeshi Students",
    description: "JavaScript learning video series in simple English",
    author: "Stack Learner",
    level: "Basic to Advanced",
    link: "#",
  },
  {
    title: "React.js Full Course",
    description: "Complete video course for learning React.js",
    author: "Academind",
    level: "Intermediate",
    link: "#",
  },
  {
    title: "MERN Stack Tutorial",
    description: "Building full-stack apps with MongoDB, Express, React, Node.js",
    author: "Net Ninja",
    level: "Advanced",
    link: "#",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    description: "Video series on algorithms and data structures in JavaScript",
    author: "CS Dojo",
    level: "Intermediate to Advanced",
    link: "#",
  },
  {
    title: "Next.js Crash Course",
    description: "Quick video course to learn the Next.js framework",
    author: "Vercel",
    level: "Intermediate",
    link: "#",
  },
]

const tools = [
  {
    title: "VS Code",
    description: "The most popular code editor for JavaScript development",
    author: "Microsoft",
    level: "All Levels",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Node.js",
    description: "JavaScript runtime environment",
    author: "Node.js Foundation",
    level: "All Levels",
    link: "https://nodejs.org/",
  },
  {
    title: "npm",
    description: "JavaScript package manager",
    author: "npm, Inc.",
    level: "All Levels",
    link: "https://www.npmjs.com/",
  },
  {
    title: "ESLint",
    description: "JavaScript code linting tool",
    author: "ESLint Team",
    level: "Intermediate",
    link: "https://eslint.org/",
  },
  {
    title: "Chrome DevTools",
    description: "Tools for JavaScript debugging and performance analysis",
    author: "Google",
    level: "All Levels",
    link: "https://developers.google.com/web/tools/chrome-devtools",
  },
  {
    title: "Webpack",
    description: "JavaScript module bundler",
    author: "Webpack Team",
    level: "Intermediate to Advanced",
    link: "https://webpack.js.org/",
  },
]
