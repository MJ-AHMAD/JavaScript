import Link from "next/link"
import { ChevronRight, Search, Calendar, User, Clock, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              Tutorials, articles, and updates about JavaScript and web development
            </p>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Blog</span>
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
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-emerald-600" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tutorials">Tutorials</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="tips">Tips & Tricks</SelectItem>
                  <SelectItem value="projects">Projects</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 mb-12">
        <Card className="border-emerald-200 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-emerald-700 text-white p-8 flex flex-col justify-center">
              <div className="text-emerald-200 mb-2 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">May 5, 2023</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                <span className="text-sm">Admin</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Getting Started with JavaScript: A Complete Guide for Bangladeshi Students
              </CardTitle>
              <CardDescription className="text-emerald-100 mb-6 text-base">
                This comprehensive guide will help beginners from Bangladesh to start their journey in JavaScript
                programming with simple, step-by-step instructions.
              </CardDescription>
              <Button asChild className="mt-2 bg-white text-emerald-700 hover:bg-emerald-100 w-fit">
                <Link href="/blog/getting-started-with-javascript">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="h-64 md:h-auto bg-emerald-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?key=m58qj"
                alt="JavaScript code on laptop screen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-emerald-800 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="text-emerald-600 border-emerald-300 hover:bg-emerald-50">
            Load More Articles
          </Button>
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

function BlogPostCard({ post }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 bg-emerald-100">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        <CardTitle className="text-xl text-emerald-800">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 text-base">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          <Link href={post.link}>Read Article</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const blogPosts = [
  {
    title: "Understanding JavaScript Variables and Data Types",
    excerpt:
      "Learn about variables, constants, and the different data types available in JavaScript with practical examples.",
    date: "April 28, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?key=x9toj",
    link: "/blog/javascript-variables-data-types",
  },
  {
    title: "Building Your First JavaScript Function",
    excerpt:
      "A step-by-step guide to creating and using functions in JavaScript, with explanations of parameters, return values, and scope.",
    date: "April 23, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?key=1qid3",
    link: "/blog/javascript-functions",
  },
  {
    title: "DOM Manipulation Basics for Beginners",
    excerpt:
      "Learn how to interact with the HTML Document Object Model (DOM) using JavaScript to create dynamic web pages.",
    date: "April 18, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?key=mb8pv",
    link: "/blog/dom-manipulation-basics",
  },
  {
    title: "Introduction to ES6 Features",
    excerpt:
      "Explore the modern features introduced in ECMAScript 2015 (ES6) that make JavaScript coding more efficient and powerful.",
    date: "April 12, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?key=8hi7t",
    link: "/blog/es6-features",
  },
  {
    title: "Asynchronous JavaScript: Promises and Async/Await",
    excerpt:
      "A comprehensive guide to handling asynchronous operations in JavaScript using promises and the async/await syntax.",
    date: "April 5, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=500&query=Asynchronous%20JavaScript%20code",
    link: "/blog/asynchronous-javascript",
  },
  {
    title: "Building a Todo App with Vanilla JavaScript",
    excerpt:
      "Follow along with this tutorial to build a complete todo application using only vanilla JavaScript, HTML, and CSS.",
    date: "March 29, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=500&query=Todo%20app%20interface",
    link: "/blog/todo-app-vanilla-javascript",
  },
]
