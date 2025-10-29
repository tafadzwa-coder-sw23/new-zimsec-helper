import { useParams } from "react-router-dom";

export default function FlashcardReview() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Flashcard Deck #{id}</h1>
      <p className="text-lg text-muted-foreground mb-4">This is a placeholder for the selected flashcard deck. Dummy data is shown here.</p>
      <div className="bg-gray-100 rounded-lg p-6 shadow w-full max-w-xl">
        <p>Flashcard content would appear here for deck ID: {id}.</p>
      </div>
    </div>
  );
}
