import DashboardHeader from '@/components/teacher/dashboard/header';
import DashboardFooter from '@/components/teacher/dashboard/footer';

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <DashboardFooter />
    </div>
  );
}
