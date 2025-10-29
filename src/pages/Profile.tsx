import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Profile() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await fetch("/api/user");
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>No user found.</div>;

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary"
            />
            <CardTitle className="text-2xl text-center">{user.name}</CardTitle>
            <p className="text-muted-foreground text-center">{user.email}</p>
            <span className="mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {user.role}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Enrolled Subjects</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {user.enrolledSubjects?.length ? (
              user.enrolledSubjects.map((subj: number) => (
                <li key={subj}>Subject ID: {subj}</li>
              ))
            ) : (
              <li>No subjects enrolled.</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
