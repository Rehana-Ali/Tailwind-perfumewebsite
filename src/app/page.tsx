import Image from "next/image";



export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Top Banner Image */}
     
<div
  className="w-full h-96 sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center"
  style={{ backgroundImage: "url('/pbanner.png')" }}
></div>


      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Perfume Haven</h1>
        <p className="text-lg">Discover the finest collection of perfumes that captivate your senses.Your journey to discovering enchanting fragrances starts here. Whether you have a question. need assistance or simply wish to share your thoughts. we’re just a message away. Let’s craft unforgettable moments together</p>
      </section>

      {/* Perfume Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 shadow-md">
          <Image src={"/p2.png"} width={400} height={400} alt="Perfume 1" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold mb-2">Perfumes fo Men</h2>
          <p className="text-gray-700">A refreshing blend of citrus and floral notes.</p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <Image src={"/p1.png"} width={400} height={400} alt="Perfume 2" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold mb-2">Devidoff for Men</h2>
          <p className="text-gray-700">An exotic mix of spices and woody undertones.</p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <Image src={"/p3.png"} width={400} height={400} alt="Perfume 3" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold mb-2">Best Colonge for Men</h2>
          <p className="text-gray-700">A delicate balance of sweet and musky aromas.</p>
        </div>
      </section>

      {/* Bottom Banner Image */}
      <div className="w-full h-64 bg-cover bg-center my-8" style={{ backgroundImage: "url('/mens.png')" }}>
      </div>
    </main>
  );
}
Home