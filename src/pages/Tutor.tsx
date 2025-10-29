import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Sparkles, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

const Tutor = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{message: string, response: string, timestamp: string}>>([]);

  const chatMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const response = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      return response.json();
    },
    onSuccess: (data) => {
      setChatHistory(prev => [...prev, {
        message,
        response: data.response,
        timestamp: data.timestamp,
      }]);
      setMessage("");
    },
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      chatMutation.mutate(message);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Tutor</h1>
        <p className="text-muted-foreground">
          Get personalized help with difficult concepts 24/7
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Chat History */}
        {chatHistory.length > 0 && (
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Chat History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-96 overflow-y-auto">
              {chatHistory.map((chat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 max-w-md">
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-3 py-2 max-w-md">
                      <p className="text-sm">{chat.response}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Chat Input */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-center">Your Personal AI Assistant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-gradient-to-br from-primary to-accent p-4">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <p className="text-center text-muted-foreground mb-4">
              Ask questions, get step-by-step explanations, and receive encouragement whenever you need it
            </p>

            <div className="space-y-3">
              <Textarea
                placeholder="Ask me anything about your studies..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim() || chatMutation.isPending}
                className="w-full gap-2"
              >
                {chatMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                    Thinking...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tutor;
