import GameHeader from '@/components/student/math-quest/header';
import GameFooter from '@/components/student/math-quest/footer';

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-[#0a101f]">
      <GameHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <GameFooter />
    </div>
  );
}
