"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart as BarChartComponent, CartesianGrid, XAxis, YAxis, Line, LineChart as LineChartComponent, Pie, PieChart as PieChartComponent } from "recharts"

const barChartData = [
  { class: "Grade 6", xp: 4500 },
  { class: "Grade 7", xp: 5200 },
  { class: "Grade 8", xp: 6100 },
  { class: "Grade 9", xp: 5800 },
  { class: "Grade 10", xp: 7300 },
]

const lineChartData = [
  { week: "Week 1", engagement: 350 },
  { week: "Week 2", engagement: 420 },
  { week: "Week 3", engagement: 500 },
  { week: "Week 4", engagement: 480 },
  { week: "Week 5", engagement: 600 },
]

const pieChartData = [
  { name: "Physics", value: 400 },
  { name: "Math", value: 300 },
  { name: "Chemistry", value: 300 },
  { name: "Biology", value: 200 },
];

const chartConfig = {
  xp: {
    label: "XP",
    color: "hsl(var(--primary))",
  },
  engagement: {
    label: "Engagement",
    color: "hsl(var(--secondary))",
  },
}

export default function AnalyticsSection() {
  return (
    <section>
      <h2 className="font-headline text-2xl font-bold mb-4">Analytics & Reports</h2>
      <p className="text-muted-foreground mb-6">Visual insights into student performance.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in-0 duration-1000">
        <Card className="lg:col-span-1 animate-in fade-in-0 delay-200 duration-1000">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-raleway"><BarChart className="w-5 h-5"/> Average XP by Class</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChartComponent data={barChartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="class" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="xp" fill="var(--color-xp)" radius={4} />
              </BarChartComponent>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1 animate-in fade-in-0 delay-400 duration-1000">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-raleway"><LineChart className="w-5 h-5"/> Weekly Engagement Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <LineChartComponent data={lineChartData} accessibilityLayer>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="week" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="engagement" stroke="var(--color-engagement)" strokeWidth={2} dot={false} />
              </LineChartComponent>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1 animate-in fade-in-0 delay-600 duration-1000">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-raleway"><PieChart className="w-5 h-5"/> Module Completion</CardTitle>
          </CardHeader>
          <CardContent>
             <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <PieChartComponent>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="var(--color-xp)" />
                </PieChartComponent>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
