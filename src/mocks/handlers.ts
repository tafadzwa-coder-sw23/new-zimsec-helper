import { http, HttpResponse } from 'msw';

export const handlers = [
  // Dashboard Stats
  http.get('/api/dashboard/stats', () => {
    return HttpResponse.json({
      overallProgress: 65,
      averageScore: 82,
      studyTime: 245,
      examsTaken: 12,
      subjectsCompleted: 7,
      totalSubjects: 10,
      streakDays: 15,
    });
  }),

  // Subjects
  http.get('/api/subjects', () => {
    return HttpResponse.json([
      { id: 1, name: "Mathematics", level: "O-Level", description: "Algebra, geometry, calculus and more", icon: "🔢", color: "from-orange-500 to-amber-500" },
      { id: 2, name: "English Language", level: "O-Level", description: "Grammar, literature, and composition", icon: "📚", color: "from-amber-500 to-yellow-500" },
      { id: 3, name: "Physics", level: "O-Level", description: "Forces, energy, electricity and motion", icon: "⚡", color: "from-orange-600 to-red-500" },
      { id: 4, name: "Chemistry", level: "O-Level", description: "Elements, compounds, and reactions", icon: "🧪", color: "from-red-500 to-pink-500" },
      { id: 5, name: "Biology", level: "O-Level", description: "Living organisms and life processes", icon: "🧬", color: "from-orange-500 to-amber-600" },
      { id: 6, name: "Geography", level: "O-Level", description: "Physical and human geography", icon: "🌍", color: "from-amber-600 to-orange-600" },
      { id: 7, name: "History", level: "O-Level", description: "World and African history", icon: "📜", color: "from-orange-400 to-amber-400" },
      { id: 8, name: "Mathematics", level: "A-Level", description: "Advanced calculus and statistics", icon: "🔢", color: "from-orange-700 to-red-600" },
      { id: 9, name: "Physics", level: "A-Level", description: "Advanced mechanics and quantum physics", icon: "⚡", color: "from-red-600 to-orange-700" },
      { id: 10, name: "Chemistry", level: "A-Level", description: "Organic and physical chemistry", icon: "🧪", color: "from-orange-600 to-amber-700" },
    ]);
  }),

  // Exams
  http.get('/api/exams', () => {
    return HttpResponse.json([
      { id: 1, subject: "Mathematics", level: "O-Level", title: "Algebra & Geometry Practice", duration: 90, questions: 50, marks: 100, difficulty: "Medium" },
      { id: 2, subject: "Physics", level: "O-Level", title: "Forces & Motion", duration: 75, questions: 40, marks: 80, difficulty: "Easy" },
      { id: 3, subject: "Chemistry", level: "O-Level", title: "Chemical Reactions", duration: 85, questions: 45, marks: 90, difficulty: "Medium" },
      { id: 4, subject: "Biology", level: "O-Level", title: "Cell Biology", duration: 80, questions: 42, marks: 84, difficulty: "Easy" },
      { id: 5, subject: "Mathematics", level: "A-Level", title: "Calculus Integration", duration: 120, questions: 60, marks: 120, difficulty: "Hard" },
      { id: 6, subject: "Physics", level: "A-Level", title: "Quantum Mechanics", duration: 110, questions: 55, marks: 110, difficulty: "Hard" },
    ]);
  }),

  // Past Papers
  http.get('/api/past-papers', () => {
    return HttpResponse.json([
      { id: 1, subject: "Mathematics", level: "O-Level", title: "ZIMSEC O-Level Mathematics November 2023", year: 2023, duration: 120, questions: 8, marks: 100 },
      { id: 2, subject: "Physics", level: "O-Level", title: "ZIMSEC O-Level Physics November 2023", year: 2023, duration: 90, questions: 6, marks: 80 },
      { id: 3, subject: "Chemistry", level: "O-Level", title: "ZIMSEC O-Level Chemistry November 2023", year: 2023, duration: 105, questions: 7, marks: 90 },
      { id: 4, subject: "Biology", level: "O-Level", title: "ZIMSEC O-Level Biology November 2023", year: 2023, duration: 95, questions: 6, marks: 85 },
      { id: 5, subject: "Mathematics", level: "O-Level", title: "ZIMSEC O-Level Mathematics June 2023", year: 2023, duration: 120, questions: 8, marks: 100 },
      { id: 6, subject: "Physics", level: "O-Level", title: "ZIMSEC O-Level Physics June 2023", year: 2023, duration: 90, questions: 6, marks: 80 },
      { id: 7, subject: "Mathematics", level: "A-Level", title: "ZIMSEC A-Level Mathematics November 2023", year: 2023, duration: 180, questions: 12, marks: 150 },
      { id: 8, subject: "Physics", level: "A-Level", title: "ZIMSEC A-Level Physics November 2023", year: 2023, duration: 150, questions: 10, marks: 130 },
    ]);
  }),


  // Flashcards (expanded)
  http.get('/api/flashcards', () => {
    return HttpResponse.json([
      { id: 1, title: "Algebra Basics", subject: "Mathematics", level: "O-Level", count: 12, difficulty: "Easy" },
      { id: 2, title: "Biology Cells", subject: "Biology", level: "O-Level", count: 10, difficulty: "Easy" },
      { id: 3, title: "Chemical Reactions", subject: "Chemistry", level: "O-Level", count: 15, difficulty: "Medium" },
      { id: 4, title: "Forces & Motion", subject: "Physics", level: "O-Level", count: 14, difficulty: "Medium" },
      { id: 5, title: "Calculus Fundamentals", subject: "Mathematics", level: "A-Level", count: 20, difficulty: "Hard" },
      { id: 6, title: "Quantum Physics", subject: "Physics", level: "A-Level", count: 18, difficulty: "Hard" },
      { id: 7, title: "Organic Chemistry", subject: "Chemistry", level: "A-Level", count: 16, difficulty: "Medium" },
      { id: 8, title: "Human Physiology", subject: "Biology", level: "A-Level", count: 22, difficulty: "Hard" },
      { id: 9, title: "World War II", subject: "History", level: "O-Level", count: 11, difficulty: "Medium" },
      { id: 10, title: "African Geography", subject: "Geography", level: "O-Level", count: 13, difficulty: "Easy" },
      { id: 11, title: "English Grammar", subject: "English Language", level: "O-Level", count: 17, difficulty: "Easy" },
      { id: 12, title: "Advanced Statistics", subject: "Mathematics", level: "A-Level", count: 19, difficulty: "Hard" },
    ]);
  }),

  // Tutors (new endpoint)
  http.get('/api/tutors', () => {
    return HttpResponse.json([
      { id: 1, name: "Mr. Chikafu", subject: "Mathematics", level: "O-Level", bio: "15 years experience, passionate about algebra and calculus.", avatar: "/images/tutor.jpg", rating: 4.9 },
      { id: 2, name: "Ms. Moyo", subject: "Biology", level: "O-Level", bio: "Biology specialist, loves making complex topics simple.", avatar: "/images/students-learning.jpg", rating: 4.8 },
      { id: 3, name: "Mr. Dube", subject: "Physics", level: "A-Level", bio: "Physics and electronics expert, exam coaching.", avatar: "/images/group-study.jpg", rating: 4.7 },
      { id: 4, name: "Mrs. Ndlovu", subject: "Chemistry", level: "A-Level", bio: "Chemistry teacher, practical and theory focus.", avatar: "/images/past-papers.jpg", rating: 4.8 },
      { id: 5, name: "Ms. Sibanda", subject: "English Language", level: "O-Level", bio: "English and literature, essay writing tips.", avatar: "/images/flashcards.jpg", rating: 4.6 },
    ]);
  }),

  // User profile (new endpoint)
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      avatar: "/images/students-learning.jpg",
      role: "student",
      enrolledSubjects: [1, 2, 3, 4],
    });
  }),

  // AI Tutor Chat
  http.post('/api/tutor/chat', async ({ request }) => {
    const { message } = await request.json();

    // Simulate AI response based on message content
    let response = "I'm here to help you with your studies! What specific topic would you like to learn about?";

    if (message.toLowerCase().includes('math')) {
      response = "Great! Mathematics is fundamental. Let's break down that concept step by step. What specific area of math are you struggling with - algebra, geometry, or calculus?";
    } else if (message.toLowerCase().includes('physics')) {
      response = "Physics is fascinating! Whether it's mechanics, electricity, or thermodynamics, I can help you understand the principles. What topic shall we explore?";
    } else if (message.toLowerCase().includes('chemistry')) {
      response = "Chemistry involves understanding matter and its transformations. Are you interested in organic chemistry, inorganic chemistry, or physical chemistry?";
    } else if (message.toLowerCase().includes('biology')) {
      response = "Biology covers the study of life! From cells to ecosystems, there's so much to explore. What aspect interests you most?";
    }

    return HttpResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });
  }),
];
