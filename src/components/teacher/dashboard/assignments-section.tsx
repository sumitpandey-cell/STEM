import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAssignmentActions } from "@/lib/teacher-data"
import { BookOpenCheck, FileText, Send } from "lucide-react";
import React from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
    FileText: <FileText className="w-8 h-8 text-primary" />,
    Send: <Send className="w-8 h-8 text-secondary" />,
    BookOpenCheck: <BookOpenCheck className="w-8 h-8 text-accent" />,
};

export default async function AssignmentsSection() {
    const actions = await getAssignmentActions();
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
                                {iconMap[action.iconName]}
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
