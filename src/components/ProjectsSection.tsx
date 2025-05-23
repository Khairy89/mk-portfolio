import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, X } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tools?: string[];
  challenges?: string;
  solutions?: string;
  outcome?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Salesforce Data Integration Pipeline",
    category: "CRM Automation",
    description: "Automated data synchronization between Salesforce and external systems using n8n workflows",
    longDescription: "A comprehensive automation solution that synchronizes customer data between Salesforce CRM and multiple external platforms, ensuring real-time data consistency across all business systems.",
    tools: ["Salesforce", "n8n", "Docker", "REST APIs"],
    challenges: "Managing real-time data synchronization across multiple platforms while handling API rate limits and ensuring data integrity.",
    solutions: "Implemented intelligent retry mechanisms, batch processing, and error handling workflows with automatic rollback capabilities.",
    outcome: "Reduced manual data entry by 85% and improved data accuracy to 99.7% across all integrated systems."
  },
  {
    id: 2,
    title: "Multi-Platform Workflow Orchestration",
    category: "Process Automation",
    description: "Created complex automated workflows connecting 15+ business applications using n8n",
    longDescription: "Designed and implemented sophisticated automation workflows that connect various business applications including CRM, ERP, marketing tools, and communication platforms.",
    tools: ["n8n", "Docker", "Webhooks", "API Integration"],
    challenges: "Orchestrating complex business processes across disparate systems with different data formats and authentication methods.",
    solutions: "Built modular workflow components with standardized data transformation layers and centralized error monitoring.",
    outcome: "Achieved 70% reduction in manual tasks and improved process completion time by 60% across departments."
  },
  {
    id: 3,
    title: "Containerized Development Environment",
    category: "DevOps Automation",
    description: "Streamlined development workflows using Docker containerization and automation",
    longDescription: "Implemented a fully containerized development environment that automates setup, testing, and deployment processes for development teams.",
    tools: ["Docker", "Docker Compose", "CI/CD", "Git"],
    challenges: "Standardizing development environments across team members while maintaining flexibility for different project requirements.",
    solutions: "Created custom Docker images with automated environment provisioning and one-command deployment scripts.",
    outcome: "Reduced onboarding time for new developers from 2 days to 30 minutes and eliminated environment-related bugs."
  },
  {
    id: 4,
    title: "Customer Service Automation Hub",
    category: "Customer Experience",
    description: "Automated customer support workflows integrating ticketing, CRM, and communication systems",
    longDescription: "Built an intelligent automation hub that handles customer inquiries, routes tickets, updates CRM records, and triggers follow-up communications automatically.",
    tools: ["Salesforce Service Cloud", "n8n", "Email APIs", "Chatbot Integration"],
    challenges: "Creating intelligent routing logic that could handle complex customer scenarios while maintaining personal touch.",
    solutions: "Developed rule-based automation with escalation paths and integrated AI-powered sentiment analysis for priority routing.",
    outcome: "Improved first response time by 75% and increased customer satisfaction scores by 40% while reducing support team workload."
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="bg-dark py-20">
      <div className="section-padding">
        <h2 className="section-title">Automation Projects</h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-teal/10"
            >
              {/* Project Image Placeholder */}
              <div className="h-56 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-light/30">
                  <span className="text-sm opacity-50">{project.title} Preview</span>
                </div>
                
                {/* Overlay on hover - removed duplicate buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-light/70 text-sm">{project.category}</p>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-light/70">{project.category}</span>
                </div>
                <p className="text-light/70 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-teal hover:bg-teal/90 text-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-teal text-teal hover:bg-teal/10"
                    onClick={() => openCaseStudy(project)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeCaseStudy}></div>
          
          <div className="relative bg-card rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 text-light hover:text-teal hover:bg-muted"
              onClick={closeCaseStudy}
            >
              <X size={20} />
            </Button>
            
            <div className="p-8">
              <span className="text-teal text-sm">{selectedProject.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-6">{selectedProject.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                  <p className="text-light/80">{selectedProject.longDescription}</p>
                </div>
                
                {selectedProject.tools && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
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
                
                <div className="mt-8">
                  <Button className="bg-teal hover:bg-teal/90 text-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project Details
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
