export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-black tracking-tight">404</h1>
      <p className="mt-4 text-gray-500 text-lg">Page not found.</p>
      <a href="/" className="mt-8 text-sm underline underline-offset-4">
        Go home
      </a>
    </main>
  );
}
