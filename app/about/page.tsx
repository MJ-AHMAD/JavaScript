import Link from "next/link"
import { ChevronRight, Github, Coffee, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About the Project</h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              Goals and objectives of "JavaScript Mastery Bangladesh" project
            </p>
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>About</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-emerald-200 shadow-md mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-4">
                <p>
                  The main goal of "JavaScript Mastery Bangladesh" is to create a comprehensive and accessible platform
                  for Bangladeshi students to learn JavaScript programming.
                </p>
                <p>
                  We believe that learning programming in simple English is more effective and enjoyable for students.
                  Through this project, we aim to give the younger generation in Bangladesh the opportunity to learn
                  modern web development technologies.
                </p>
                <p>
                  Our purpose is not just to teach coding, but to foster creativity, problem-solving skills, and
                  teamwork among students. We want each student to be able to build real projects, develop their
                  portfolio, and succeed in their career.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-md mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800">Project Features</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete JavaScript curriculum in simple English</li>
                  <li>Structured learning path from basic to advanced level</li>
                  <li>50+ hands-on projects</li>
                  <li>Interactive coding challenges</li>
                  <li>Community support and mentorship</li>
                  <li>Free and open source</li>
                  <li>Mobile-friendly interface</li>
                  <li>Offline access support</li>
                  <li>Certificate of completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800">Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-4">
                <p>
                  Our project follows a structured roadmap that helps students learn JavaScript and web development step
                  by step:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Level 1:</strong> JavaScript Fundamentals
                  </li>
                  <li>
                    <strong>Level 2:</strong> Advanced JavaScript
                  </li>
                  <li>
                    <strong>Level 3:</strong> Frontend Frameworks (React.js)
                  </li>
                  <li>
                    <strong>Level 4:</strong> Backend Development (Node.js)
                  </li>
                  <li>
                    <strong>Level 5:</strong> Full-Stack Projects
                  </li>
                </ol>
                <p>Each level includes theory, practical exercises, and project-based learning.</p>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="border-emerald-200 shadow-md mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-800">Project Founder</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-16 w-16 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-1">MJ Ahmad</h3>
                <p className="text-gray-600 mb-4">Full-Stack Developer & Educator</p>
                <div className="flex justify-center space-x-3">
                  <Link href="https://github.com/MJ-AHMAD" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://ko-fi.com/mjahmad" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Coffee className="h-5 w-5" />
                      <span className="sr-only">Ko-fi</span>
                    </Button>
                  </Link>
                  <Link href="mailto:mjahmad2024@outlook.com">
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-md mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-800">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">mjahmad2024@outlook.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <p className="text-gray-600">
                    <Link href="https://github.com/MJ-AHMAD" className="text-emerald-600 hover:underline">
                      github.com/MJ-AHMAD
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Sponsor</h3>
                  <p className="text-gray-600">
                    <Link href="https://github.com/Sponsors/MJ-AHMAD" className="text-emerald-600 hover:underline">
                      github.com/Sponsors/MJ-AHMAD
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ko-fi</h3>
                  <p className="text-gray-600">
                    <Link href="https://ko-fi.com/mjahmad" className="text-emerald-600 hover:underline">
                      ko-fi.com/mjahmad
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-800">Contribute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You can contribute to this open-source project. Help by adding new tutorials, fixing code, or updating
                  documentation.
                </p>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="https://github.com/MJ-AHMAD" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Contribute on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
