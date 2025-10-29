import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Play,
  CheckCircle,
  Clock,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  FileText,
  Video,
  Download
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const Lesson = () => {
  const { id } = useParams();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const { data: subject, isLoading: subjectLoading } = useQuery({
    queryKey: ['subject', id],
    queryFn: async () => {
      const response = await fetch(`/api/subjects/${id}`);
      return response.json();
    },
  });

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', id],
    queryFn: async () => {
      const response = await fetch(`/api/subjects/${id}/lessons`);
      return response.json();
    },
  });

  if (subjectLoading || lessonsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const currentLesson = lessons[currentLessonIndex];
  const progress = ((currentLessonIndex + 1) / lessons.length) * 100;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/subjects">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Subjects
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground">{subject?.name}</h1>
          <p className="text-muted-foreground">{subject?.level} • {lessons.length} lessons</p>
        </div>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-black rounded-t-lg flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                <div className="relative z-10 text-center text-white">
                  <Video className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium mb-2">Video Lecture</p>
                  <p className="text-sm opacity-80">Duration: {currentLesson?.duration || "15:30"}</p>
                  <Button className="mt-4" size="lg">
                    <Play className="h-5 w-5 mr-2" />
                    Play Video
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lesson Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {currentLesson?.title || "Lesson Title"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {currentLesson?.content || `
                  Welcome to this comprehensive lesson on ${subject?.name}. In this video, we'll explore the fundamental concepts
                  that form the foundation of this subject. You'll learn about key principles, practical applications, and
                  real-world examples that will help you master these important topics.

                  Throughout this lesson, we'll cover:
                  • Core concepts and definitions
                  • Step-by-step problem-solving approaches
                  • Common mistakes to avoid
                  • Practice examples with detailed solutions

                  Make sure to take notes and pause the video whenever you need more time to understand a concept.
                  Remember, learning is a journey, and it's okay to revisit challenging topics multiple times.
                  `}
                </p>
              </div>

              {/* Resources */}
              <Separator />
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Lesson Resources
                </h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Lecture Notes (PDF)
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Practice Worksheet
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Additional Reading Materials
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Lesson Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Content</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLessonIndex(index)}
                    className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                      index === currentLessonIndex ? 'bg-primary/10 border-l-4 border-primary' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 ${index < currentLessonIndex ? 'text-green-500' : index === currentLessonIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                        {index < currentLessonIndex ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-current"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          index === currentLessonIndex ? 'text-primary' : 'text-foreground'
                        }`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Lesson */}
          {currentLessonIndex < lessons.length - 1 && (
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-4">
                <Button
                  onClick={() => setCurrentLessonIndex(currentLessonIndex + 1)}
                  className="w-full"
                >
                  Next Lesson
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Course Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About this Course</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Level</span>
                <Badge variant="secondary">{subject?.level}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Lessons</span>
                <span className="text-sm font-medium">{lessons.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-sm font-medium">~{Math.round(lessons.reduce((acc, lesson) => acc + parseInt(lesson.duration.split(':')[0]) * 60 + parseInt(lesson.duration.split(':')[1]), 0) / 60)} hours</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
