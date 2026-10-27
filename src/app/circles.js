export const circles = Array.from({ length: 25 }, (_, i) => {
  // Use fixed values so server and client render the same HTML
  const size = 5 + (i % 2);
  const left = (i * 37) % 100;
  const delay = (i * 7) % 50;

  return (
    <div
      key={i}
      className="absolute rounded-full animate-float bg-black/50 dark:bg-white/20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: `-${size}px`,
        animationDelay: `${delay}s`,
      }}
    />
  );
});
