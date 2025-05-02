import { useState, FormEvent } from 'react';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
    
    try {
      setIsSubmitting(true);
      
      // Send form data to the server
      const response = await apiRequest('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response && response.success) {
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
      } else {
        toast({
          title: "Error",
          description: response?.message || "Something went wrong, please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="text-center mb-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Software with AI?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
              Take the first step toward building intelligent, future-ready software. Book a consultation with our team and discover how AI can revolutionize your business.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+92 314 9458600</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>I8 Islamabad</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl p-8 reveal">
            <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-slate-900 font-medium mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900" 
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900" 
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900" 
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900" 
                  placeholder="(XXX) XXX-XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-slate-900 font-medium mb-2">What service are you interested in?</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900" 
                  placeholder="Describe your goals, challenges, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Your Free AI Consultation'}
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
