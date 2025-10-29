import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Award } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const Exams = () => {
  const { data: exams = [], isLoading } = useQuery({
    queryKey: ['exams'],
    queryFn: async () => {
      const response = await fetch('/api/exams');
      return response.json();
    },
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Practice Exams</h1>
        <p className="text-muted-foreground">
          Test your knowledge with timed practice exams
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {exams.map((exam) => (
          <Card key={exam.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{exam.subject}</CardTitle>
                  <CardDescription>{exam.level} • {exam.title}</CardDescription>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-2">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{exam.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>{exam.questions} questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>{exam.marks} marks</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  exam.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  exam.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {exam.difficulty}
                </span>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Start Exam
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Exams;
