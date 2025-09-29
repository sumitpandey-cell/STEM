import DashboardHeader from '@/components/student/dashboard/header';
import DashboardFooter from '@/components/student/dashboard/footer';

export default function DashboardLayout({
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
