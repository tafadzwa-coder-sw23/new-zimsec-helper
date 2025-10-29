import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, FileText, TrendingUp, Clock, ArrowRight, Target, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data: statsData, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const response = await fetch('/api/dashboard/stats');
      return response.json();
    },
  });

  const stats = [
    { icon: Target, label: "Overall Progress", value: `${statsData?.overallProgress || 0}%`, color: "text-primary" },
    { icon: Award, label: "Average Score", value: `${statsData?.averageScore || 0}%`, color: "text-accent" },
    { icon: Clock, label: "Study Time", value: `${statsData?.studyTime || 0} min`, color: "text-primary" },
    { icon: Zap, label: "Exams Taken", value: `${statsData?.examsTaken || 0}`, color: "text-accent" },
    { icon: BookOpen, label: "Subjects Completed", value: `${statsData?.subjectsCompleted || 0}/${statsData?.totalSubjects || 0}`, color: "text-primary" },
    { icon: TrendingUp, label: "Study Streak", value: `${statsData?.streakDays || 0} days`, color: "text-accent" },
  ];

  const subjects = [
    { name: "Mathematics", level: "O-Level", progress: 60, icon: "🔢", color: "from-orange-500 to-amber-500" },
    { name: "Physics", level: "O-Level", progress: 40, icon: "⚡", color: "from-amber-500 to-yellow-500" },
    { name: "Chemistry", level: "O-Level", progress: 30, icon: "🧪", color: "from-orange-600 to-red-500" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground shadow-lg">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
          <p className="text-primary-foreground/90 text-lg">
            Ready to continue your learning journey? Every effort counts!
          </p>
        </div>
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`rounded-full p-3 bg-gradient-to-br from-primary/10 to-accent/10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
          <Link to="/subjects">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-3">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </CardHeader>
          </Link>
        </Card>

        <Card className="border-accent/20 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
          <Link to="/exams">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-accent to-primary p-3">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Take a Practice Exam</CardTitle>
                    <CardDescription>Test your knowledge</CardDescription>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </CardHeader>
          </Link>
        </Card>
      </div>

      {/* Subjects Overview */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Your Subjects</CardTitle>
              <CardDescription>Track your progress across all subjects</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/subjects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {subjects.map((subject) => (
            <div key={subject.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${subject.color} text-xl`}>
                    {subject.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{subject.name}</p>
                    <p className="text-sm text-muted-foreground">{subject.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{subject.progress}%</p>
                  <p className="text-xs text-muted-foreground">Complete</p>
                </div>
              </div>
              <Progress value={subject.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Motivational Message */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-gradient-to-br from-primary to-accent p-3">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Keep Up the Great Work! 🌟</h3>
              <p className="text-sm text-muted-foreground">
                You've studied for over 2 hours this week. Consistency is key to success. Remember, every topic you master brings you closer to your goals!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
