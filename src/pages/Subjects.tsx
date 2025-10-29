import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Subjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const { data: subjects = [], isLoading } = useQuery({
    queryKey: ['subjects'],
    queryFn: async () => {
      const response = await fetch('/api/subjects');
      return response.json();
    },
  });

  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "all" || subject.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Browse Subjects</h1>
        <p className="text-muted-foreground">
          Choose a subject to start your learning journey. Each subject is carefully structured to help you succeed.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all">All Levels</TabsTrigger>
            <TabsTrigger value="O-Level">O-Level</TabsTrigger>
            <TabsTrigger value="A-Level">A-Level</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Subjects Grid */}
      {filteredSubjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSubjects.map((subject) => (
            <Link key={subject.id} to={`/subject/${subject.id}`}>
              <Card className="group cursor-pointer border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-3 w-3" />
                    {subject.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="border-border/50">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="rounded-full bg-muted p-4 mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground mb-1">No subjects found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </CardContent>
        </Card>
      )}

      {/* Encouragement Card */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-gradient-to-br from-primary to-accent p-3 shrink-0">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">📖 Learning Tip</h3>
              <p className="text-sm text-muted-foreground">
                Start with subjects you're most comfortable with to build momentum. Then tackle the challenging ones with confidence!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subjects;
