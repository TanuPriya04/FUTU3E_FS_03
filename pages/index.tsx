import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Welcome to Amul | Taste of India"
        description="Discover Amul's legacy and explore our wide range of dairy products loved by millions across India."
        keywords="Amul, dairy, India, butter, milk, homepage"
      />
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
      <img src="/logo.jpg" alt="Amul Logo" className="w-32 h-auto mb-6" />

      <div className="bg-cream text-amul text-4xl font-bold">
        Welcome to Amul
      </div>

      <p className="mt-4 text-lg text-gray-700">The Taste of India</p>
    </div>
    </>
  );
}
