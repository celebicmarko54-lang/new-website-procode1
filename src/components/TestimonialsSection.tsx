'use client';

const testimonials = [
  {
    quote: "lovecode.dev completely transformed how we prototype. What used to take weeks now takes hours.",
    author: "Sarah Chen",
    role: "Product Manager at TechCorp",
    avatar: "SC",
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    quote: "I built my entire startup's MVP using lovecode.dev. The AI understands exactly what I need.",
    author: "Mike Rodriguez",
    role: "Founder of StartupX",
    avatar: "MR",
    gradient: 'from-purple-400 to-violet-500',
  },
  {
    quote: "As a designer, I can now bring my designs to life without waiting for developers.",
    author: "Emma Wilson",
    role: "Senior Designer at DesignStudio",
    avatar: "EW",
    gradient: 'from-blue-400 to-cyan-500',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 text-sm bg-pink-100 text-pink-700 rounded-full mb-4 inline-block font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by creators worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers, designers, and entrepreneurs who are building with lovecode.dev.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all card-shadow"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-medium text-sm shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">500K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">1M+</p>
              <p className="text-gray-600">Projects Created</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">150+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
