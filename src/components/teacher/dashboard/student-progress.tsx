import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const students = [
    { name: "Anita Desai", xp: 14500, progress: 85, activity: "Completed Physics Quiz 3", avatar: "https://i.pravatar.cc/150?u=student1" },
    { name: "Vikram Seth", xp: 13200, progress: 78, activity: "Earned 'Algebra Ace' badge", avatar: "https://i.pravatar.cc/150?u=student2" },
    { name: "Kiran Desai", xp: 15100, progress: 92, activity: "Top of the leaderboard", avatar: "https://i.pravatar.cc/150?u=student3" },
]

export default function StudentProgress() {
    return (
        <section className="mt-8">
            <h2 className="font-headline text-2xl font-bold mb-4">Individual Student Progress</h2>
            <p className="text-muted-foreground mb-6">Track student activity and growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {students.map((student, index) => (
                    <div 
                        key={student.name}
                        className="animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-both"
                        style={{ animationDelay: `${index * 200}ms`}}
                    >
                    <Card className="hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={student.avatar} />
                                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="font-raleway">{student.name}</CardTitle>
                                <CardDescription>{student.xp.toLocaleString()} XP</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Progress: {student.progress}%</p>
                            <Progress value={student.progress} className="h-2 [&>div]:animated-gradient-progress" />
                            <p className="text-xs text-muted-foreground mt-4">
                               <span className="font-semibold">Recent:</span> {student.activity}
                            </p>
                        </CardContent>
                    </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
