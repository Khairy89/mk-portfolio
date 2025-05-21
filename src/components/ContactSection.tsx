
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Send, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after some time
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="bg-[#141414] py-20">
      <div className="section-padding">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div>
            <p className="text-lg mb-8">
              Have a project in mind or want to discuss how we can work together? Feel free to reach out through the form or my social profiles.
            </p>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg flex items-start gap-4">
                <div className="bg-muted/50 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Me At</h3>
                  <a href="mailto:alex@example.com" className="text-teal hover:underline">alex@example.com</a>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg flex items-start gap-4">
                <div className="bg-muted/50 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Connect On LinkedIn</h3>
                  <a href="#" className="text-teal hover:underline">linkedin.com/in/alexmorgan</a>
                </div>
              </div>
            </div>
            
            {/* Social Profile Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Find Me On</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-muted w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal/20 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={18} />
                </a>
                {/* Placeholders for other social media icons */}
                <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-xs">Be</span>
                </div>
                <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-xs">Dr</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-muted border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="bg-muted border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="bg-muted border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-muted border-muted resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal hover:bg-teal/90 text-black"
                  disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? (
                    <>Sending...<Send className="ml-2 h-4 w-4 animate-pulse" /></>
                  ) : submitted ? (
                    <>Sent!<Check className="ml-2 h-4 w-4" /></>
                  ) : (
                    <>Send Message<Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
