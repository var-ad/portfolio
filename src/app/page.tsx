// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Hey, I am Varad.</h1>
      <img 
        src="/github-snake-dark.svg" 
        alt="Snake animation" 
        width={1000} 
        height={1000} 
      />
    </main>
  );
}
