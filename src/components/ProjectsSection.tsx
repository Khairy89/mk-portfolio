import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, X } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  longDescription?: string;
  tools?: string[];
  challenges?: string;
  solutions?: string;
  outcome?: string;
};
const projects: Project[] = [{
  id: 1,
  title: "VibeFlow: Wellness Booking Web App",
  category: "Fullstack Web App",
  description: "A spa & wellness booking web app crafted with the Vibe Coding Method for rapid and stylish UI-building.",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  longDescription: "Developed a modern wellness/spa appointment booking platform using the Vibe Coding Method, combining seamless animations, state management, and beautiful user-centric design. Responsive, real-time, and optimized for conversion.",
  tools: ["React", "Tailwind CSS", "Node.js", "Vibe Coding Method"],
  challenges: "Needed fast iteration and high-fidelity interactive interfaces with minimal developer overhead.",
  solutions: "Used Vibe Coding with Tailwind utility classes and component libraries for smooth UI/UX and reusable logic blocks.",
  outcome: "Reduced development time by 40% and received positive client feedback for both speed and polish."
}, {
  id: 2,
  title: "EduVibe: eLearning Platform",
  category: "Education SaaS",
  description: "Built a collaborative eLearning platform with real-time quizzes, discussion, and a playful vibe-inspired interface.",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  longDescription: "A cloud-based eLearning portal for schools with real-time interaction, teacher dashboards, and peer-to-peer discussion. Built using Vibe Coding Method to deliver engaging micro-interactions and fast, mobile-first experiences. Features live updates, notifications, and gamified design.",
  tools: ["Next.js", "PostgreSQL", "Socket.io", "Vibe Coding Method"],
  challenges: "Bringing real-time collaborative features and interactive UI patterns to a diverse audience.",
  solutions: "Component-driven design, leveraging Vibe Coding's stepwise interface building and state isolation for reliability.",
  outcome: "Adopted by 5+ schools; praised for its fun, responsive, and easy-to-use interface."
}, {
  id: 3,
  title: "Foodiez: Restaurant Finder & Ordering",
  category: "Mobile Web App",
  description: "A mobile-first restaurant aggregator with geo-search and live ordering, built with the vibe coding stack.",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  longDescription: "Foodiez helps users find and order from local restaurants quickly. Built using the Vibe Coding Method for fun animated transitions, location-based services, and highly reusable UI components.",
  tools: ["React", "Mapbox", "Firebase", "Vibe Coding Method"],
  challenges: "Needed smooth animated interactions and real-time location filtering for high user engagement.",
  solutions: "Applied Vibe Coding structural patterns for modular state and transition layers for a native-app feel.",
  outcome: "3000+ active users in launch month; known for snappy experience and delightful micro-animations."
}, {
  id: 4,
  title: "Salesforce Data Integration Pipeline",
  category: "CRM Automation",
  description: "Automated data synchronization between Salesforce and external systems using n8n workflows",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  longDescription: "A comprehensive automation solution that synchronizes customer data between Salesforce CRM and multiple external platforms, ensuring real-time data consistency across all business systems.",
  tools: ["Salesforce", "n8n", "Docker", "REST APIs"],
  challenges: "Managing real-time data synchronization across multiple platforms while handling API rate limits and ensuring data integrity.",
  solutions: "Implemented intelligent retry mechanisms, batch processing, and error handling workflows with automatic rollback capabilities.",
  outcome: "Reduced manual data entry by 85% and improved data accuracy to 99.7% across all integrated systems."
}, {
  id: 5,
  title: "Multi-Platform Workflow Orchestration",
  category: "Process Automation",
  description: "Created complex automated workflows connecting 15+ business applications using n8n",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  longDescription: "Designed and implemented sophisticated automation workflows that connect various business applications including CRM, ERP, marketing tools, and communication platforms.",
  tools: ["n8n", "Docker", "Webhooks", "API Integration"],
  challenges: "Orchestrating complex business processes across disparate systems with different data formats and authentication methods.",
  solutions: "Built modular workflow components with standardized data transformation layers and centralized error monitoring.",
  outcome: "Achieved 70% reduction in manual tasks and improved process completion time by 60% across departments."
}, {
  id: 6,
  title: "Containerized Development Environment",
  category: "DevOps Automation",
  description: "Streamlined development workflows using Docker containerization and automation",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  longDescription: "Implemented a fully containerized development environment that automates setup, testing, and deployment processes for development teams.",
  tools: ["Docker", "Docker Compose", "CI/CD", "Git"],
  challenges: "Standardizing development environments across team members while maintaining flexibility for different project requirements.",
  solutions: "Created custom Docker images with automated environment provisioning and one-command deployment scripts.",
  outcome: "Reduced onboarding time for new developers from 2 days to 30 minutes and eliminated environment-related bugs."
}];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="bg-dark py-0">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            A selection of my recent automation work and technical projects
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="group relative bg-card rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-teal/20" 
              onClick={() => openCaseStudy(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-teal text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-light/80 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
                
                {/* View Project Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-teal/20 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="h-5 w-5 text-teal" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/projects')}
            className="bg-teal hover:bg-teal/90 text-black px-8 py-3 text-lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
      
      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeCaseStudy}></div>
          
          <div className="relative bg-card rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-light hover:text-teal hover:bg-muted z-10" onClick={closeCaseStudy}>
              <X size={20} />
            </Button>
            
            {/* Modal Header Image */}
            <div className="relative h-64 overflow-hidden rounded-t-xl">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <span className="text-teal text-sm">{selectedProject.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-1">{selectedProject.title}</h2>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                  <p className="text-light/80">{selectedProject.longDescription}</p>
                </div>
                
                {selectedProject.tools && <div>
                    <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                          {tool}
                        </span>)}
                    </div>
                  </div>}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted/50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2 text-teal">Challenges</h3>
                    <p className="text-light/80 text-sm">{selectedProject.challenges}</p>
                  </div>
                  
                  <div className="bg-muted/50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2 text-teal">Solutions</h3>
                    <p className="text-light/80 text-sm">{selectedProject.solutions}</p>
                  </div>
                  
                  <div className="bg-muted/50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2 text-teal">Results</h3>
                    <p className="text-light/80 text-sm">{selectedProject.outcome}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <Button className="bg-teal hover:bg-teal/90 text-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project Details
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/projects')}
                    className="border-teal text-teal hover:bg-teal hover:text-black"
                  >
                    View All Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
