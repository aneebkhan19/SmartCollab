import { useState, FormEvent } from 'react';
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Check for required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    toast({
      title: "Consultation Request Received",
      description: "We'll contact you shortly to schedule your free AI consultation!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,234.7C672,245,768,235,864,224C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0" style={{opacity: 0.5}}>
            <path fill="#ffffff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave" style={{animationDelay: '1s'}}></path>
          </svg>
        </div>
        <div className="grid-bg absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Software with AI?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Take the first step toward building intelligent, future-ready software. Book a consultation with our team and discover how AI can revolutionize your business.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl p-8 reveal">
            <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-slate-900 font-medium mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-900 font-medium mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-slate-900 font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-slate-900 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="(XXX) XXX-XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-slate-900 font-medium mb-2">What service are you interested in?</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="development">AI-Enhanced Web & App Development</option>
                  <option value="conversational">Conversational AI & Voice Assistants</option>
                  <option value="design">Intelligent UI/UX Design & Animation</option>
                  <option value="marketing">AI-Powered Marketing Systems</option>
                  <option value="automation">Smart Inventory & Workflow Automation</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-slate-900 font-medium mb-2">Tell us about your project *</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Describe your goals, challenges, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
                >
                  Book Your Free AI Consultation
                </button>
                <p className="text-center text-sm text-slate-700 mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
