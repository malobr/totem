export default function BackgroundTheme() {
  return (
    <div className="absolute transition-colors duration-[1.2s] top-0 left-0 w-screen h-screen -z-20 bg-gradient-to-r from-[var(--background-gradient-A)] to-[var(--background-gradient-B)] " />
  );
}
