import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to ZIMSEC ACE
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your comprehensive study companion for ZIMSEC exams. Get personalized tutoring, practice with past papers, and master your subjects effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/subjects">Subjects</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/tutor">Tutors</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/past-papers">Past Papers</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/flashcards">Flashcards</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/profile">Profile</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/students-learning.jpg"
              alt="Students learning in classroom"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              loading="eager"
              priority="true"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <img
                src="/images/tutor.jpg"
                alt="One-on-one tutoring"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2">Personal Tutor</h3>
              <p className="text-gray-600">
                Get personalized help from experienced tutors. Ask questions, solve problems, and understand complex topics with expert guidance.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <img
                src="/images/past-papers.jpg"
                alt="Student practicing with past papers"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Past Papers</h3>
              <p className="text-gray-600">
                Practice with previous exam papers. Get detailed solutions and explanations for better preparation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <img
                src="/images/flashcards.jpg"
                alt="Interactive flashcard study"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flashcards</h3>
              <p className="text-gray-600">
                Study smarter with interactive flashcards. Perfect for quick revision and memorization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/group-study.jpg"
            alt="Students studying together"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Ready to Excel in Your ZIMSEC Exams?</h2>
              <p className="text-xl mb-8">Join thousands of students who have improved their grades with ZIMSEC ACE</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/dashboard">Start Learning Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}