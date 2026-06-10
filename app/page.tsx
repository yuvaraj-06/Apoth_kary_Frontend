export default function Home() {
  const primaryColor = '#0066FF';
  const accentColor = '#22c55e';

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-white" style={{ backgroundColor: primaryColor }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Apothékary: <br className="md:hidden"/>Ancient Wisdom, Modern Wellness.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Clean, plant-based remedies combining 5,000 years of herbal wisdom with modern science for stress, sleep, immunity, and skin.
          </p>
          <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                  style={{ color: primaryColor }}>
            Shop Our Remedies
          </button>
          <p className="mt-8 text-sm opacity-80">Trusted by 250K+ customers globally.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Targeted Wellness Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🧘‍♀️', title: 'Stress Relief', desc: 'Calm your mind naturally.' },
              { icon: '😴', title: 'Deep Sleep', desc: 'Restorative sleep support.' },
              { icon: '🛡️', title: 'Immunity Boost', desc: 'Strengthen your defenses.' },
              { icon: '✨', title: 'Radiant Skin', desc: 'Nourish from within.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <p className="text-5xl mb-4">{feature.icon}</p>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Your Path to Plant-Based Wellness</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {[
              { step: '1️⃣', title: 'Discover Your Needs', desc: 'Identify your wellness goals with our expert guidance.' },
              { step: '2️⃣', title: 'Choose Your Remedy', desc: 'Select from our curated range of herbal formulations.' },
              { step: '3️⃣', title: 'Experience Transformation', desc: 'Integrate into your routine and feel the difference.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg">
                <p className="text-5xl mb-4" style={{ color: primaryColor }}>{item.step}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Apothékary changed my life! My sleep has never been better. Highly recommend!", author: "Sarah L." },
              { quote: "Finally, clean supplements that actually work. My skin is glowing and I feel less stressed.", author: "Mark T." },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</p>
                <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-700">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: accentColor }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Embrace Natural Wellness?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join over 250,000 customers discovering the power of plant-based healing.
          </p>
          <button className="bg-white text-gray-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                  style={{ color: accentColor }}>
            Explore Our Full Collection
          </button>
        </div>
      </section>
    </div>
  );
}