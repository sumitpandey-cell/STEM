import AnalyticsSection from "@/components/teacher/dashboard/analytics";
import AssignmentsSection from "@/components/teacher/dashboard/assignments-section";
import ClassOverview from "@/components/teacher/dashboard/class-overview";
import HeroSection from "@/components/teacher/dashboard/hero-section";
import QuickStats from "@/components/teacher/dashboard/quick-stats";
import StudentProgress from "@/components/teacher/dashboard/student-progress";

export default function TeacherDashboardPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4">
                <HeroSection />
            </div>
            <div className="lg:col-span-4">
                <QuickStats />
            </div>
            <div className="lg:col-span-4">
                <ClassOverview />
            </div>
            <div className="lg:col-span-4">
                <StudentProgress />
            </div>
            <div className="lg:col-span-4">
                <AnalyticsSection />
            </div>
            <div className="lg:col-span-4">
                <AssignmentsSection />
            </div>
        </div>
    );
}
