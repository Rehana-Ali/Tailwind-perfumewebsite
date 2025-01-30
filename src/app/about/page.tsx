import Image from "next/image";

export default function About() {
    return (
      <main className="container mx-auto p-4">
        {/* Top Banner Image */}
        <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/aboutbanner.png')" }}>
        </div>
  
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center my-8">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">About Perfume Haven</h1>
            <p className="text-lg">At Perfume Haven, we offer a wide variety of perfumes that cater to every taste and preference. Our collection includes the finest fragrances from around the world, ensuring that you find the perfect scent for any occasion.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image src={"/about.png"} width={400} height={400} alt="Perfume Variety" className="w-full h-auto object-cover" />
          </div>
        </section>
      </main>
    );
  }
  About