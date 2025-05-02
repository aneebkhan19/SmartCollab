export default function ValueProposition() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="text-primary font-medium">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Empowering Your Digital Future Through Intelligence</h2>
          <p className="text-slate-700 text-lg">
            Whether you're launching a startup, streamlining your enterprise, or integrating automation into daily operations — we bring AI to the core of your software. Our solutions are tailor-made, future-ready, and designed for real-world impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto reveal">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovative Solutions</h3>
            <p className="text-slate-700">
              We create forward-thinking software that anticipates future trends and adapts to changing business needs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Efficiency</h3>
            <p className="text-slate-700">
              Our intelligent systems automate repetitive tasks, optimize workflows, and help your team focus on what matters.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Human-Centered Design</h3>
            <p className="text-slate-700">
              We build technology that enhances human capabilities rather than replacing them, creating intuitive experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
