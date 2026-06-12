export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-text-muted">
          Dixit Kumar
        </div>
        <div className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} &middot; Noida, India
        </div>
        <div className="font-mono text-xs text-text-muted">
          Built with Next.js &middot; Designed with intent
        </div>
      </div>
    </footer>
  );
}
