import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FilePlus, Send, BookCheck } from "lucide-react"

const actions = [
    { title: "Create Assignment", icon: <FilePlus className="w-8 h-8 text-primary" />, delay: 200 },
    { title: "Assign Quiz", icon: <Send className="w-8 h-8 text-secondary" />, delay: 400 },
    { title: "Review Submissions", icon: <BookCheck className="w-8 h-8 text-accent" />, delay: 600 },
]

export default function AssignmentsSection() {
    return (
        <section className="mt-8">
            <h2 className="font-headline text-2xl font-bold mb-4">Assignments & Quizzes</h2>
            <p className="text-muted-foreground mb-6">Create, assign, and review quizzes.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {actions.map((action) => (
                    <div
                        key={action.title}
                        className="animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-both"
                        style={{ animationDelay: `${action.delay}ms`}}
                    >
                    <Card key={action.title} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-background/50">
                        <CardHeader>
                            <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                                {action.icon}
                            </div>
                            <CardTitle className="font-raleway font-semibold text-lg">{action.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button>Go</Button>
                        </CardContent>
                    </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
