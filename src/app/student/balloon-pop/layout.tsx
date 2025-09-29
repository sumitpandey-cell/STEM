import GameHeader from '@/components/student/balloon-pop/header';
import GameFooter from '@/components/student/balloon-pop/footer';

export default function BalloonPopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-[#0a101f] overflow-hidden">
      <GameHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center">
        {children}
      </main>
      <GameFooter />
    </div>
  );
}
