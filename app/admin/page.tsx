"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Users,
  BookOpen,
  FileText,
  MessageSquare,
  BarChart,
  PieChart,
  Settings,
  LogOut,
  User,
  Bell,
  Search,
  Plus,
  Edit,
  Trash2,
  ChevronDown,
  Filter,
  Download,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen ? "fixed inset-0 z-50 block w-full lg:static lg:w-64" : "hidden lg:block lg:w-64"
        } bg-emerald-800 text-white`}
      >
        <div className="p-6 border-b border-emerald-700 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-emerald-800 mr-2">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="font-bold">JS Mastery Admin</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-emerald-700"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="p-4">
          <div className="mb-4 text-xs font-semibold text-emerald-300 uppercase">Main</div>
          <AdminSidebarLink
            icon={<BarChart className="h-4 w-4" />}
            label="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <AdminSidebarLink
            icon={<Users className="h-4 w-4" />}
            label="Users"
            active={activeTab === "users"}
            onClick={() => setActiveTab("users")}
          />
          <AdminSidebarLink
            icon={<BookOpen className="h-4 w-4" />}
            label="Courses"
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
          />
          <AdminSidebarLink
            icon={<FileText className="h-4 w-4" />}
            label="Blog Content"
            active={activeTab === "blog"}
            onClick={() => setActiveTab("blog")}
          />
          <AdminSidebarLink
            icon={<MessageSquare className="h-4 w-4" />}
            label="Comments"
            active={activeTab === "comments"}
            onClick={() => setActiveTab("comments")}
          />
          <div className="mt-8 mb-4 text-xs font-semibold text-emerald-300 uppercase">System</div>
          <AdminSidebarLink
            icon={<PieChart className="h-4 w-4" />}
            label="Analytics"
            active={activeTab === "analytics"}
            onClick={() => setActiveTab("analytics")}
          />
          <AdminSidebarLink
            icon={<Settings className="h-4 w-4" />}
            label="Settings"
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          />
          <AdminSidebarLink icon={<LogOut className="h-4 w-4" />} label="Logout" onClick={() => {}} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setMobileSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Search..." className="pl-10 w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40&query=admin" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin</p>
                    <p className="text-xs leading-none text-gray-500">admin@jsmastery.bd</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <AdminStatsCard
                  title="Total Users"
                  value="1,247"
                  trend="+12%"
                  trendUp={true}
                  description="vs last month"
                  icon={<Users className="h-5 w-5 text-emerald-600" />}
                />
                <AdminStatsCard
                  title="Active Courses"
                  value="24"
                  trend="+4"
                  trendUp={true}
                  description="vs last month"
                  icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
                />
                <AdminStatsCard
                  title="Blog Articles"
                  value="56"
                  trend="+8"
                  trendUp={true}
                  description="vs last month"
                  icon={<FileText className="h-5 w-5 text-emerald-600" />}
                />
                <AdminStatsCard
                  title="Comments"
                  value="238"
                  trend="-5%"
                  trendUp={false}
                  description="vs last month"
                  icon={<MessageSquare className="h-5 w-5 text-emerald-600" />}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle>User Growth</CardTitle>
                    <CardDescription>New user registrations over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-72 bg-gray-100 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">User Growth Chart Placeholder</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle>Course Popularity</CardTitle>
                    <CardDescription>Enrollment distribution by course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-72 bg-gray-100 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Course Popularity Chart Placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Recent Activities</CardTitle>
                        <CardDescription>Latest actions across the platform</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ActivityItem
                        activityType="user"
                        message="Rakib Khan completed the 'JavaScript Functions' module"
                        time="2 hours ago"
                      />
                      <ActivityItem
                        activityType="blog"
                        message="New blog post published: 'Understanding Asynchronous JavaScript'"
                        time="4 hours ago"
                      />
                      <ActivityItem
                        activityType="course"
                        message="New course module added to 'Advanced JavaScript': Error Handling"
                        time="1 day ago"
                      />
                      <ActivityItem
                        activityType="comment"
                        message="Shafiq Ahmed commented on 'Introduction to ES6 Features'"
                        time="1 day ago"
                      />
                      <ActivityItem activityType="user" message="5 new users registered" time="2 days ago" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" /> Add New User
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input placeholder="Search users..." className="pl-10" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex">
                      <Filter className="h-4 w-4 mr-2" /> Filter
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Active Users</DropdownMenuItem>
                    <DropdownMenuItem>Inactive Users</DropdownMenuItem>
                    <DropdownMenuItem>Admins</DropdownMenuItem>
                    <DropdownMenuItem>Students</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" /> Export
                </Button>
              </div>

              <Card className="border-gray-200">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Email</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Role</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Joined</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{user.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{user.email}</td>
                            <td className="px-4 py-3">
                              <Badge
                                className={
                                  user.role === "Admin"
                                    ? "bg-red-100 text-red-700 hover:bg-red-100"
                                    : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                }
                                variant="outline"
                              >
                                {user.role}
                              </Badge>
                            </td>
                            <td className="px-4 py-3">
                              <Badge
                                className={
                                  user.status === "Active"
                                    ? "bg-green-100 text-green-700 hover:bg-green-100"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                                }
                                variant="outline"
                              >
                                {user.status}
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{user.joined}</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500">Showing 1-6 of 24 users</div>
                <div className="flex gap-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" /> Add New Course
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <AdminCourseCard
                    key={index}
                    title={course.title}
                    description={course.description}
                    modules={course.modules}
                    students={course.students}
                    image={course.image}
                    level={course.level}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="blog">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Blog Content Management</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" /> Add New Article
                </Button>
              </div>

              <Card className="border-gray-200 mb-6">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Title</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Author</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Category</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Published</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogArticles.map((article, index) => (
                          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                                  <img
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="font-medium">{article.title}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{article.author}</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100" variant="outline">
                                {article.category}
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{article.published}</td>
                            <td className="px-4 py-3">
                              <Badge
                                className={
                                  article.status === "Published"
                                    ? "bg-green-100 text-green-700 hover:bg-green-100"
                                    : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                                }
                                variant="outline"
                              >
                                {article.status}
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function AdminSidebarLink({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full mb-1 ${
        active ? "bg-emerald-700 text-white" : "text-emerald-100 hover:bg-emerald-700"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function AdminStatsCard({ title, value, trend, trendUp, description, icon }) {
  return (
    <Card className="border-gray-200">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">{title}</span>
          {icon}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">{value}</div>
          <span
            className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
              trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {trend}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}

function ActivityItem({ activityType, message, time }) {
  let icon
  let iconBg

  switch (activityType) {
    case "user":
      icon = <Users className="h-4 w-4 text-blue-600" />
      iconBg = "bg-blue-100"
      break
    case "blog":
      icon = <FileText className="h-4 w-4 text-purple-600" />
      iconBg = "bg-purple-100"
      break
    case "course":
      icon = <BookOpen className="h-4 w-4 text-emerald-600" />
      iconBg = "bg-emerald-100"
      break
    case "comment":
      icon = <MessageSquare className="h-4 w-4 text-yellow-600" />
      iconBg = "bg-yellow-100"
      break
    default:
      icon = <BarChart className="h-4 w-4 text-gray-600" />
      iconBg = "bg-gray-100"
  }

  return (
    <div className="flex items-start gap-3">
      <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center mt-0.5`}>{icon}</div>
      <div>
        <p className="text-gray-700">{message}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  )
}

function AdminCourseCard({ title, description, modules, students, image, level }) {
  return (
    <Card className="border-gray-200 h-full flex flex-col">
      <div className="h-40 bg-gray-100 rounded-t-lg overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge
            className={
              level === "Beginner"
                ? "bg-green-100 text-green-700"
                : level === "Intermediate"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }
            variant="outline"
          >
            {level}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
          <span>{modules} modules</span>
          <span>{students} students</span>
        </div>
        <Progress value={100} className="h-2" />
      </CardContent>
      <div className="p-4 pt-0 flex justify-between">
        <Button variant="ghost" size="sm" className="text-emerald-600">
          <Edit className="h-4 w-4 mr-1" /> Edit
        </Button>
        <Button variant="ghost" size="sm" className="text-red-600">
          <Trash2 className="h-4 w-4 mr-1" /> Delete
        </Button>
      </div>
    </Card>
  )
}

function X(props) {
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
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  )
}

const users = [
  {
    name: "Rakib Khan",
    email: "rakib@example.com",
    role: "Student",
    status: "Active",
    joined: "May 4, 2023",
    avatar: "/placeholder.svg?height=40&width=40&query=user1",
  },
  {
    name: "Farida Ahmed",
    email: "farida@example.com",
    role: "Student",
    status: "Active",
    joined: "April 18, 2023",
    avatar: "/placeholder.svg?height=40&width=40&query=user2",
  },
  {
    name: "Mohammed Ali",
    email: "mohammed@example.com",
    role: "Admin",
    status: "Active",
    joined: "March 15, 2023",
    avatar: "/placeholder.svg?height=40&width=40&query=user3",
  },
  {
    name: "Sabrina Rahman",
    email: "sabrina@example.com",
    role: "Student",
    status: "Inactive",
    joined: "February 22, 2023",
    avatar: "/placeholder.svg?height=40&width=40&query=user4",
  },
  {
    name: "Mahmud Hasan",
    email: "mahmud@example.com",
    role: "Student",
    status: "Active",
    joined: "February 10, 2023",
    avatar: "/placeholder.svg?height=40&width=40&query=user5",
  },
  {
    name: "Tania Akter",
    email: "tania@example.com",
    role: "Student",
    status: "Active",
    joined: "January 5, 2023",
    avatar: "/placeholder.svg?height=40&width=40&query=user6",
  },
]

const courses = [
  {
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming",
    modules: 20,
    students: 458,
    image: "/placeholder.svg?height=200&width=300&query=JavaScript%20fundamentals",
    level: "Beginner",
  },
  {
    title: "Advanced JavaScript",
    description: "Dive deeper into advanced JavaScript concepts",
    modules: 18,
    students: 276,
    image: "/placeholder.svg?height=200&width=300&query=Advanced%20JavaScript",
    level: "Intermediate",
  },
  {
    title: "React.js Fundamentals",
    description: "Learn the basics of React.js frontend framework",
    modules: 16,
    students: 312,
    image: "/placeholder.svg?height=200&width=300&query=React%20JavaScript",
    level: "Intermediate",
  },
  {
    title: "Node.js & Express",
    description: "Build backend applications with Node.js and Express",
    modules: 22,
    students: 198,
    image: "/placeholder.svg?height=200&width=300&query=Node.js%20Express",
    level: "Advanced",
  },
  {
    title: "Full-Stack MERN Development",
    description: "Create complete applications with MongoDB, Express, React, and Node.js",
    modules: 25,
    students: 156,
    image: "/placeholder.svg?height=200&width=300&query=MERN%20stack",
    level: "Advanced",
  },
  {
    title: "JavaScript for Beginners",
    description: "A gentle introduction to JavaScript for complete beginners",
    modules: 15,
    students: 522,
    image: "/placeholder.svg?height=200&width=300&query=JavaScript%20beginners",
    level: "Beginner",
  },
]

const blogArticles = [
  {
    title: "Getting Started with JavaScript",
    author: "Mohammed Ali",
    category: "Tutorials",
    published: "May 5, 2023",
    status: "Published",
    image: "/placeholder.svg?height=40&width=40&query=JavaScript%20beginners",
  },
  {
    title: "Understanding JavaScript Variables",
    author: "Farida Ahmed",
    category: "Tutorials",
    published: "April 28, 2023",
    status: "Published",
    image: "/placeholder.svg?height=40&width=40&query=JavaScript%20variables",
  },
  {
    title: "Building Your First JavaScript Function",
    author: "Mohammed Ali",
    category: "Tutorials",
    published: "April 23, 2023",
    status: "Published",
    image: "/placeholder.svg?height=40&width=40&query=JavaScript%20functions",
  },
  {
    title: "DOM Manipulation Basics",
    author: "Rakib Khan",
    category: "Tutorials",
    published: "April 18, 2023",
    status: "Published",
    image: "/placeholder.svg?height=40&width=40&query=DOM%20manipulation",
  },
  {
    title: "Introduction to ES6 Features",
    author: "Mohammed Ali",
    category: "Tutorials",
    published: "April 12, 2023",
    status: "Published",
    image: "/placeholder.svg?height=40&width=40&query=ES6%20JavaScript",
  },
  {
    title: "Advanced React Hooks",
    author: "Sabrina Rahman",
    category: "Advanced",
    published: "N/A",
    status: "Draft",
    image: "/placeholder.svg?height=40&width=40&query=React%20Hooks",
  },
]
