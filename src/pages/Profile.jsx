import { useState } from "react"
import { motion } from "framer-motion"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    plan: "Premium",
    joinDate: "January 2024",
    avatar: "JD"
  })

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Emma Doe",
      age: 12,
      grade: "7th Grade",
      subjects: ["Math", "Science", "English"],
      progress: 85,
      avatar: "ED"
    },
    {
      id: 2,
      name: "Alex Doe",
      age: 10,
      grade: "5th Grade",
      subjects: ["Math", "Art", "Reading"],
      progress: 92,
      avatar: "AD"
    }
  ])

  const tabs = [
    { id: "profile", name: "Profile", icon: "👤" },
    { id: "students", name: "Students", icon: "👥" },
    { id: "billing", name: "Billing", icon: "💳" },
    { id: "settings", name: "Settings", icon: "⚙️" }
  ]

  const ProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user.avatar}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.plan} Plan Member</p>
            <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({...user, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({...user, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              value={user.address}
              onChange={(e) => setUser({...user, address: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  )

  const StudentsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Your Students</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Add Student
        </button>
      </div>
      
      <div className="grid gap-6">
        {students.map((student) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {student.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-gray-600">{student.grade} • Age {student.age}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-600">{student.progress}%</div>
                <div className="text-sm text-gray-500">Progress</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                <span>Overall Progress</span>
                <span>{student.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${student.progress}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Current Subjects:</div>
              <div className="flex flex-wrap gap-2">
                {student.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const BillingTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h2>
        
        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-indigo-700">
                <strong>Current Plan:</strong> Premium Plan - $19.99/month
              </p>
              <p className="text-sm text-indigo-600 mt-1">
                Next billing date: February 15, 2024
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              VISA
            </div>
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-600">Expires 12/25</p>
            </div>
            <button className="ml-auto text-indigo-600 hover:text-indigo-800">Edit</button>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium">Premium Plan - January 2024</p>
                <p className="text-sm text-gray-600">Jan 15, 2024</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$19.99</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium">Premium Plan - December 2023</p>
                <p className="text-sm text-gray-600">Dec 15, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$19.99</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SettingsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
              <p className="text-sm text-gray-600">Receive updates about your students' progress</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium text-gray-900">SMS Notifications</h3>
              <p className="text-sm text-gray-600">Get text messages for important updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Enable
            </button>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
              Delete Account
            </button>
            <p className="text-sm text-gray-600 mt-2">
              Once you delete your account, there is no going back. Please be certain.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderActiveTab = () => {
    switch (activeTab) {
      case "profile": return <ProfileTab />
      case "students": return <StudentsTab />
      case "billing": return <BillingTab />
      case "settings": return <SettingsTab />
      default: return <ProfileTab />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your profile, students, and account settings</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors ${
                    activeTab === tab.id
                      ? "bg-indigo-50 border-r-2 border-indigo-600 text-indigo-600"
                      : "text-gray-700"
                  } ${tab.id === tabs[0].id ? "rounded-t-lg" : ""} ${
                    tab.id === tabs[tabs.length - 1].id ? "rounded-b-lg" : ""
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  )
}