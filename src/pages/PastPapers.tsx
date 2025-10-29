
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Award, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const PastPapers = () => {
  const { data: papers = [], isLoading } = useQuery({
    queryKey: ['past-papers'],
    queryFn: async () => {
      const response = await fetch('/api/past-papers');
      return response.json();
    },
  });
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Past Papers</h1>
        <p className="text-muted-foreground">
          Practice with real ZIMSEC examination papers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {papers.map((paper) => (
          <Card key={paper.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{paper.subject}</CardTitle>
                  <CardDescription>{paper.level}  {paper.year}</CardDescription>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-accent to-primary p-2">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-foreground font-medium">{paper.title}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{paper.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>{paper.questions} questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>{paper.marks} marks</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90" onClick={() => navigate(`/paper/${paper.id}`)}>
                Start Paper
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PastPapers;
