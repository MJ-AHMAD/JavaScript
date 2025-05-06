import Link from "next/link"
import { ChevronRight, Github, Code, FileCode, BookOpen, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contribute to the Project</h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              Different ways to contribute to the "JavaScript Mastery Bangladesh" project
            </p>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Contribute</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">Why Contribute?</h2>
          <p className="text-gray-700">
            "JavaScript Mastery Bangladesh" is an open-source project that provides Bangladeshi students with the
            opportunity to learn JavaScript. Your contribution will enrich this project and benefit more students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ContributeCard
            icon={<Code className="h-10 w-10 text-emerald-600" />}
            title="Code Contribution"
            description="Add new features, fix bugs, or optimize code"
            buttonText="Contribute Code"
            buttonLink="https://github.com/MJ-AHMAD"
          />
          <ContributeCard
            icon={<FileCode className="h-10 w-10 text-emerald-600" />}
            title="Write Tutorials"
            description="Add new tutorials, guides, or project ideas"
            buttonText="Add Tutorials"
            buttonLink="https://github.com/MJ-AHMAD"
          />
          <ContributeCard
            icon={<BookOpen className="h-10 w-10 text-emerald-600" />}
            title="Documentation"
            description="Update documentation, translate, or fix errors"
            buttonText="Update Documentation"
            buttonLink="https://github.com/MJ-AHMAD"
          />
          <ContributeCard
            icon={<MessageSquare className="h-10 w-10 text-emerald-600" />}
            title="Give Feedback"
            description="Share your opinions, suggestions, or feedback about the project"
            buttonText="Give Feedback"
            buttonLink="https://github.com/MJ-AHMAD/issues"
          />
          <ContributeCard
            icon={<Github className="h-10 w-10 text-emerald-600" />}
            title="Report Issues"
            description="Report bugs or request new features"
            buttonText="Create Issue"
            buttonLink="https://github.com/MJ-AHMAD/issues"
          />
          <ContributeCard
            icon={<Heart className="h-10 w-10 text-emerald-600" />}
            title="Support the Project"
            description="Help the project development with financial support"
            buttonText="Support"
            buttonLink="https://ko-fi.com/mjahmad"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Contribution Guidelines</h2>
          <div className="text-gray-700 space-y-4">
            <p>Follow these guidelines before contributing to the project:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>First, fork the GitHub repository</li>
              <li>Create a new branch (feature/your-feature-name or fix/issue-number)</li>
              <li>Make your changes and commit them</li>
              <li>Push your branch</li>
              <li>Create a pull request</li>
            </ol>
            <p>
              All code contributions and documentation should be in simple English to make it accessible for all
              students in Bangladesh. Write code comments and documentation in English so that all students can easily
              understand.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Contributors List</h2>
          <p className="text-gray-700 mb-6">
            Our sincere gratitude to all contributors who have contributed to this project. Your contribution helps
            improve the project and makes it better.
          </p>
          <div className="flex flex-wrap gap-4">
            <ContributorCard name="MJ Ahmad" role="Project Founder" githubLink="https://github.com/MJ-AHMAD" />
            {/* More contributors can be added here */}
          </div>
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

function ContributeCard({ icon, title, description, buttonText, buttonLink }) {
  return (
    <Card className="border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-emerald-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Link href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ContributorCard({ name, role, githubLink }) {
  return (
    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
          <Github className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-medium text-emerald-800">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </Link>
  )
}
