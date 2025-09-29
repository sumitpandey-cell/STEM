import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getClassOverview } from "@/lib/teacher-data"

export default async function ClassOverview() {
    const classes = await getClassOverview();

    return (
        <section>
            <h2 className="font-headline text-2xl font-bold mb-4">Class Overview</h2>
            <p className="text-muted-foreground mb-6">Monitor performance across different grades and subjects.</p>
            <Card className="animate-in fade-in-0 duration-1000">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Class</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Average XP</TableHead>
                                <TableHead>Badges Earned</TableHead>
                                <TableHead>Top Performer</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {classes.map((c, index) => (
                                <TableRow key={index} className="hover:bg-muted/50 transition-colors duration-200">
                                    <TableCell className="font-medium">{c.class}</TableCell>
                                    <TableCell>{c.students}</TableCell>
                                    <TableCell>{c.avgXp.toLocaleString()}</TableCell>
                                    <TableCell>{c.badges}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={c.topPerformer.avatar} />
                                                <AvatarFallback>{c.topPerformer.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span>{c.topPerformer.name}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </section>
    )
}
