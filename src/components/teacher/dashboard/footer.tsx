export default function DashboardFooter() {
  return (
    <footer className="bg-muted/50 border-t mt-auto animate-in fade-in duration-1000">
      <div className="container py-4 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Gamified STEM | Teacher Dashboard</p>
      </div>
    </footer>
  );
}
