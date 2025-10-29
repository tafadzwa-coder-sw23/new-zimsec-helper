import { useParams } from "react-router-dom";

export default function PaperView() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Past Paper #{id}</h1>
      <p className="text-lg text-muted-foreground mb-4">This is a placeholder for the selected past paper. Dummy data is shown here.</p>
      <div className="bg-gray-100 rounded-lg p-6 shadow w-full max-w-xl">
        <p>Paper content and questions would appear here for paper ID: {id}.</p>
      </div>
    </div>
  );
}
