"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Bar, BarChart as BarChartComponent, CartesianGrid, XAxis, YAxis, Line, LineChart as LineChartComponent, Pie, PieChart as PieChartComponent, Cell } from "recharts"
import { getAnalyticsData } from "@/lib/teacher-data"
import { useEffect, useState } from "react"
import type { ChartConfig } from "@/components/ui/chart";

export default function AnalyticsSection() {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        getAnalyticsData().then(data => setChartData(data));
    }, []);

    if (!chartData) {
        return (
            <section>
                <h2 className="font-headline text-2xl font-bold mb-4">Analytics & Reports</h2>
                <p className="text-muted-foreground mb-6">Loading visual insights...</p>
            </section>
        );
    }
    
    const { barChartData, lineChartData, pieChartData, chartConfig } = chartData;

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
          <CardContent  className="flex items-center justify-center">
             <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <PieChartComponent>
                    <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                    <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                        {pieChartData.map((entry:any, index:number) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                     <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                </PieChartComponent>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
