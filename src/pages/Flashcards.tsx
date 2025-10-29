
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, RotateCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Flashcards = () => {
  const { data: sampleDecks = [], isLoading } = useQuery({
    queryKey: ['flashcards'],
    queryFn: async () => {
      const response = await fetch('/api/flashcards');
      return response.json();
    },
  });
  const navigate = useNavigate();
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Flashcards</h1>
        <p className="text-muted-foreground">
          Study with interactive flashcards to reinforce your learning
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {sampleDecks.map((deck) => (
          <Card key={deck.id} className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{deck.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{deck.subject}  {deck.level}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  deck.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  deck.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {deck.difficulty}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <p className="text-muted-foreground">{deck.count} cards</p>
              <Button variant="outline" onClick={() => navigate(`/flashcards/${deck.id}`)}>
                <RotateCw className="mr-2 h-4 w-4" />
                Review
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
