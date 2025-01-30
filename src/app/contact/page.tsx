export default function Contact() {
    return (
      <main className="container mx-auto p-4">
        {/* Top Banner Image */}
        <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/contactbanner.png')" }}>
        </div>
  
        {/* Hero Section */}

        <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Let’s Connect and Create a Lasting Impression</h1>
        <p className="text-lg">We’d love to hear from you! Whether you have questions about our exquisite fragrances need help finding your signature scent or simply want to share your experience we’re here for you. Fill out the form below and our team will get back to you as soon as possible. Let’s make every interaction as memorable as our perfumes.</p>
      </section>
        <section className="flex flex-col md:flex-row items-center my-8">
            
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-2"><strong>Phone:</strong> +1 234 567 890</p>
            <p className="text-lg mb-2"><strong>Email:</strong> contact@perfumehaven.com</p>
            <p className="text-lg"><strong>Address:</strong> 123 Perfume St, Fragrance City, SC 12345</p>
          </div>
          <div className="md:w-1/2 p-4">
            <form className="bg-white p-6 shadow-md rounded">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows={4}></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
  Contact