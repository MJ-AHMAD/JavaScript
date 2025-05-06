"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Code,
  CheckCircle,
  Award,
  BarChart,
  Calendar,
  Clock,
  User,
  LogOut,
  Home,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-emerald-600 flex items-center justify-center text-white mr-2">
              <Code className="h-4 w-4" />
            </div>
            <span className="font-bold text-gray-900">JS Mastery BD</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <div className="mb-4 text-xs font-semibold text-gray-400 uppercase">Main</div>
          <SidebarLink
            icon={<BarChart className="h-4 w-4" />}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <SidebarLink
            icon={<BookOpen className="h-4 w-4" />}
            label="My Courses"
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
          />
          <SidebarLink
            icon={<CheckCircle className="h-4 w-4" />}
            label="Progress"
            active={activeTab === "progress"}
            onClick={() => setActiveTab("progress")}
          />
          <SidebarLink
            icon={<Award className="h-4 w-4" />}
            label="Achievements"
            active={activeTab === "achievements"}
            onClick={() => setActiveTab("achievements")}
          />
          <SidebarLink
            icon={<Calendar className="h-4 w-4" />}
            label="Schedule"
            active={activeTab === "schedule"}
            onClick={() => setActiveTab("schedule")}
          />
          <div className="mt-8 mb-4 text-xs font-semibold text-gray-400 uppercase">Account</div>
          <SidebarLink
            icon={<User className="h-4 w-4" />}
            label="Profile"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
          <SidebarLink
            icon={<Settings className="h-4 w-4" />}
            label="Settings"
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          />
          <SidebarLink icon={<LogOut className="h-4 w-4" />} label="Logout" onClick={() => {}} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <Home className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40&query=user" alt="User" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <div className="text-sm font-medium">Rakib Khan</div>
                <div className="text-xs text-gray-500">rakib@example.com</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 bg-white border border-gray-200 p-1 rounded-lg">
              <TabsTrigger value="overview" className="rounded-md">
                Overview
              </TabsTrigger>
              <TabsTrigger value="courses" className="rounded-md">
                My Courses
              </TabsTrigger>
              <TabsTrigger value="progress" className="rounded-md">
                Progress
              </TabsTrigger>
              <TabsTrigger value="achievements" className="rounded-md">
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatsCard
                  title="Learning Streak"
                  value="7 days"
                  icon={<Calendar className="h-5 w-5 text-emerald-600" />}
                  description="Keep it up! You're on a roll."
                />
                <StatsCard
                  title="Completed Lessons"
                  value="24"
                  icon={<CheckCircle className="h-5 w-5 text-emerald-600" />}
                  description="Out of 120 total lessons"
                />
                <StatsCard
                  title="Study Time"
                  value="32h 15m"
                  icon={<Clock className="h-5 w-5 text-emerald-600" />}
                  description="This month"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 border-gray-200">
                  <CardHeader>
                    <CardTitle>Current Progress</CardTitle>
                    <CardDescription>Your journey through the JavaScript roadmap</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CourseProgress
                      title="Level 1: JavaScript Fundamentals"
                      progress={80}
                      lessons={{ completed: 16, total: 20 }}
                    />
                    <CourseProgress
                      title="Level 2: Advanced JavaScript"
                      progress={40}
                      lessons={{ completed: 8, total: 20 }}
                    />
                    <CourseProgress
                      title="Level 3: Frontend Frameworks"
                      progress={0}
                      lessons={{ completed: 0, total: 20 }}
                    />
                    <CourseProgress
                      title="Level 4: Full-Stack Development"
                      progress={0}
                      lessons={{ completed: 0, total: 20 }}
                    />
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                    <CardDescription>Your latest accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <AchievementItem
                      title="Fast Learner"
                      description="Completed 5 lessons in one day"
                      icon={<Award className="h-10 w-10 text-yellow-500" />}
                      date="May 3, 2023"
                    />
                    <AchievementItem
                      title="Code Ninja"
                      description="Completed all exercises in Functions module"
                      icon={<Award className="h-10 w-10 text-emerald-500" />}
                      date="April 28, 2023"
                    />
                    <AchievementItem
                      title="7-Day Streak"
                      description="Studied for 7 consecutive days"
                      icon={<Award className="h-10 w-10 text-blue-500" />}
                      date="Today"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" onClick={() => setActiveTab("achievements")}>
                      View All Achievements
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Recommended Next Steps</CardTitle>
                    <CardDescription>Continue your learning journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <NextLessonCard
                        title="JavaScript Functions: Advanced Concepts"
                        description="Learn about closure, higher-order functions, and callback patterns"
                        progress={0}
                        time="45 minutes"
                        image="/placeholder.svg?height=100&width=160&query=JavaScript%20functions"
                      />
                      <NextLessonCard
                        title="Working with Arrays and Objects"
                        description="Master array methods and object manipulation in JavaScript"
                        progress={0}
                        time="1 hour"
                        image="/placeholder.svg?height=100&width=160&query=JavaScript%20arrays%20and%20objects"
                      />
                      <NextLessonCard
                        title="JavaScript Error Handling"
                        description="Learn to handle errors effectively in your JavaScript applications"
                        progress={0}
                        time="30 minutes"
                        image="/placeholder.svg?height=100&width=160&query=JavaScript%20error%20handling"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="JavaScript Fundamentals"
                  description="Master the basics of JavaScript programming"
                  lessons={20}
                  completed={16}
                  progress={80}
                  image="/placeholder.svg?height=200&width=300&query=JavaScript%20fundamentals"
                />
                <CourseCard
                  title="Advanced JavaScript"
                  description="Dive deeper into advanced JavaScript concepts"
                  lessons={20}
                  completed={8}
                  progress={40}
                  image="/placeholder.svg?height=200&width=300&query=Advanced%20JavaScript"
                />
                <CourseCard
                  title="Frontend Frameworks: React"
                  description="Build modern web applications with React"
                  lessons={20}
                  completed={0}
                  progress={0}
                  image="/placeholder.svg?height=200&width=300&query=React%20JavaScript"
                  locked={true}
                />
                <CourseCard
                  title="Full-Stack Development"
                  description="Create complete web applications with Node.js and Express"
                  lessons={20}
                  completed={0}
                  progress={0}
                  image="/placeholder.svg?height=200&width=300&query=Node.js%20Express"
                  locked={true}
                />
              </div>
            </TabsContent>

            <TabsContent value="progress">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Progress</h2>
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Weekly Activity</CardTitle>
                    <CardDescription>Your learning activity over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Weekly Activity Chart Placeholder</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Learning Path Progress</CardTitle>
                    <CardDescription>Your progress through the JavaScript roadmap</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <ProgressSection
                        title="Level 1: JavaScript Fundamentals"
                        progress={80}
                        modules={[
                          { name: "Introduction to JavaScript", completed: true },
                          { name: "Variables & Data Types", completed: true },
                          { name: "Operators & Expressions", completed: true },
                          { name: "Conditional Statements", completed: true },
                          { name: "Loops", completed: true },
                          { name: "Functions", completed: true },
                          { name: "Arrays", completed: true },
                          { name: "Objects", completed: false },
                          { name: "Error Handling", completed: false },
                        ]}
                      />
                      <ProgressSection
                        title="Level 2: Advanced JavaScript"
                        progress={40}
                        modules={[
                          { name: "DOM Manipulation", completed: true },
                          { name: "Event Handling", completed: true },
                          { name: "Local Storage", completed: true },
                          { name: "Async JavaScript", completed: false },
                          { name: "Fetch API", completed: false },
                          { name: "ES6+ Features", completed: false },
                          { name: "Modules", completed: false },
                          { name: "Classes & OOP", completed: false },
                          { name: "Functional Programming", completed: false },
                        ]}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AchievementCard
                  title="Fast Learner"
                  description="Completed 5 lessons in one day"
                  icon={<Award className="h-12 w-12 text-yellow-500" />}
                  date="May 3, 2023"
                  unlocked={true}
                />
                <AchievementCard
                  title="Code Ninja"
                  description="Completed all exercises in Functions module"
                  icon={<Award className="h-12 w-12 text-emerald-500" />}
                  date="April 28, 2023"
                  unlocked={true}
                />
                <AchievementCard
                  title="7-Day Streak"
                  description="Studied for 7 consecutive days"
                  icon={<Award className="h-12 w-12 text-blue-500" />}
                  date="Today"
                  unlocked={true}
                />
                <AchievementCard
                  title="JavaScript Master"
                  description="Completed all Level 1 modules"
                  icon={<Award className="h-12 w-12 text-purple-500" />}
                  date="Coming soon"
                  unlocked={false}
                />
                <AchievementCard
                  title="Project Builder"
                  description="Completed your first project"
                  icon={<Award className="h-12 w-12 text-orange-500" />}
                  date="Coming soon"
                  unlocked={false}
                />
                <AchievementCard
                  title="30-Day Streak"
                  description="Studied for 30 consecutive days"
                  icon={<Award className="h-12 w-12 text-red-500" />}
                  date="Coming soon"
                  unlocked={false}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function SidebarLink({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full mb-1 ${
        active ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function StatsCard({ title, value, icon, description }) {
  return (
    <Card className="border-gray-200">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">{title}</span>
          {icon}
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}

function CourseProgress({ title, progress, lessons }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium">{title}</h4>
        <span className="text-sm text-gray-500">
          {lessons.completed}/{lessons.total} lessons
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-1" />
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{progress}% complete</span>
        <Button variant="link" className="p-0 h-auto text-xs text-emerald-600">
          Continue
        </Button>
      </div>
    </div>
  )
}

function AchievementItem({ title, description, icon, date }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  )
}

function NextLessonCard({ title, description, progress, time, image }) {
  return (
    <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-40 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>{time}</span>
          </div>
          <Button variant="outline" size="sm" className="text-xs h-7 px-2">
            Start Lesson
          </Button>
        </div>
      </div>
    </div>
  )
}

function CourseCard({ title, description, lessons, completed, progress, image, locked = false }) {
  return (
    <Card className={`border-gray-200 ${locked ? "opacity-70" : ""}`}>
      <div className="h-40 bg-gray-100 rounded-t-lg overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          {locked && (
            <div className="p-1 bg-gray-100 rounded-full">
              <Lock className="h-4 w-4 text-gray-400" />
            </div>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
          <span>{lessons} lessons</span>
          <span>{completed} completed</span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardContent>
      <CardFooter>
        <Button
          disabled={locked}
          className={`w-full ${locked ? "bg-gray-400" : "bg-emerald-600 hover:bg-emerald-700"}`}
        >
          {locked ? "Locked" : completed > 0 ? "Continue" : "Start Course"}
        </Button>
      </CardFooter>
    </Card>
  )
}

function ProgressSection({ title, progress, modules }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-gray-500">{progress}% complete</span>
      </div>
      <Progress value={progress} className="h-2 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`p-2 rounded-md text-sm border ${
              module.completed
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-gray-200 bg-gray-50 text-gray-500"
            }`}
          >
            <div className="flex items-center">
              {module.completed ? (
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
              ) : (
                <Circle className="h-4 w-4 mr-2 text-gray-400" />
              )}
              <span>{module.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AchievementCard({ title, description, icon, date, unlocked }) {
  return (
    <Card className={`border-gray-200 text-center ${!unlocked ? "opacity-60" : ""}`}>
      <CardContent className="pt-6 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className={`text-xs ${unlocked ? "text-emerald-600" : "text-gray-400"}`}>
          {unlocked ? `Achieved on ${date}` : date}
        </div>
      </CardContent>
    </Card>
  )
}

function Bell(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function Circle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

function Lock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
