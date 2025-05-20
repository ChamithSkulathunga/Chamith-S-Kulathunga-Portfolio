export const circles = Array.from({ length: 25 }, (_, i) => {
  const size = Math.floor(Math.random() * 2) + 5; // 10px to 30px
  const left = Math.random() * 100;
  const delay = Math.random() * 140;

  return (
    <div
      key={i}
      className="absolute rounded-full animate-float
                 bg-black/50 dark:bg-white/20 "
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
