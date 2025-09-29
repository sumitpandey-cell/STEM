import { ReactNode } from "react";

export default function ElectronAdventureLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-[#0a101f] overflow-hidden">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
}
