export default function GameFooter() {
  return (
    <footer className="bg-transparent mt-auto animate-in fade-in duration-1000">
      <div className="container py-4 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Gamified STEM | Math Quest</p>
      </div>
    </footer>
  );
}
