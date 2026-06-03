export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cinematic cyan glow — top right */}
      <div
        className="absolute -right-[20%] -top-[20%] h-[80%] w-[80%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(250, 204, 21, 0.08), transparent 70%)",
        }}
      />

      {/* Secondary glow — bottom left */}
      <div
        className="absolute -bottom-[30%] -left-[20%] h-[60%] w-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234, 179, 8, 0.04), transparent 70%)",
        }}
      />

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)`,
          maskImage:
            "radial-gradient(circle at center, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 10%, transparent 70%)",
        }}
      />
    </div>
  );
}
