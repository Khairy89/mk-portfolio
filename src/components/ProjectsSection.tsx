
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
    title: "Agri-Finance Platform",
    category: "Fintech Application",
    description: "A comprehensive platform connecting farmers with financial services and agricultural inputs",
    longDescription: "Developed a fintech platform that enables small-scale farmers to access loans, purchase agricultural inputs, and manage their farming operations more efficiently.",
    tools: ["React", "NodeJS", "PostgreSQL", "Docker"],
    challenges: "Creating an intuitive interface accessible to users with varying levels of digital literacy while handling complex financial operations.",
    solutions: "Implemented a simplified, icon-based interface with voice guidance options and streamlined workflows to reduce friction in the user journey.",
    outcome: "Platform currently serves over 10,000 farmers with a 92% satisfaction rate and has facilitated more than $2M in agricultural financing."
  },
  {
    id: 2,
    title: "School Management System",
    category: "EdTech Solution",
    description: "A comprehensive system for managing school operations, student records, and online learning",
    longDescription: "Built an integrated school management system that digitized administrative processes, enabled virtual classrooms, and provided learning analytics.",
    tools: ["Vue.js", "Laravel", "MySQL", "AWS"],
    challenges: "Creating a system that could handle diverse school needs while being intuitive for non-technical staff and integrating with existing systems.",
    solutions: "Implemented a modular architecture with role-based access controls and customizable workflows to adapt to different school structures.",
    outcome: "The system reduced administrative time by 60% and improved parent engagement by 45% across multiple school branches."
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Application",
    description: "A custom e-commerce solution with inventory management and payment processing",
    longDescription: "Developed a scalable e-commerce platform with integrated inventory management, multi-payment gateway support, and customer analytics.",
    tools: ["React", "Node.js", "MongoDB", "Redis"],
    challenges: "Building a system that could handle peak traffic during promotions while maintaining inventory accuracy across multiple sales channels.",
    solutions: "Implemented a microservices architecture with distributed caching and real-time inventory synchronization to ensure system reliability.",
    outcome: "Platform processed over 100,000 transactions in its first year with 99.9% uptime during major sales events."
  },
  {
    id: 4,
    title: "Enterprise Resource Planning System",
    category: "Business Software",
    description: "A custom ERP solution for manufacturing businesses with production planning and quality control",
    longDescription: "Created a comprehensive ERP system tailored for mid-sized manufacturing companies, integrating production, inventory, finance, and quality control modules.",
    tools: ["Angular", "Java Spring", "PostgreSQL", "Kubernetes"],
    challenges: "Designing a solution that could handle complex manufacturing processes while being flexible enough to adapt to different industry requirements.",
    solutions: "Developed a configurable workflow engine that allowed businesses to define their unique processes without requiring custom code changes.",
    outcome: "System implementation resulted in 35% reduction in production planning time and 25% decrease in inventory holding costs for clients."
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
        <h2 className="section-title">Design Projects</h2>
        
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
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-light/70 text-sm mb-4">{project.category}</p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-teal hover:bg-teal/90 text-black">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
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
                    Live Demo
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
                    <h3 className="text-xl font-semibold mb-2">Tools Used</h3>
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
                    <h3 className="font-semibold mb-2 text-teal">Outcome</h3>
                    <p className="text-light/80 text-sm">{selectedProject.outcome}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-teal hover:bg-teal/90 text-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Project
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
