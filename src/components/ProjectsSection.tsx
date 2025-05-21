
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
    title: "FinTrack Dashboard",
    category: "Web Application",
    description: "A financial tracking dashboard with intuitive data visualization",
    longDescription: "FinTrack is a comprehensive financial dashboard designed to help users track expenses, investments, and savings goals all in one place.",
    tools: ["Figma", "React", "D3.js"],
    challenges: "Creating an intuitive interface that could display complex financial data without overwhelming users.",
    solutions: "Implemented progressive disclosure patterns and customizable dashboard widgets to help users focus on their most relevant financial metrics.",
    outcome: "User testing showed a 28% improvement in task completion rates compared to the previous version of the application."
  },
  {
    id: 2,
    title: "MediCare Mobile App",
    category: "Mobile Design",
    description: "A patient-centered healthcare appointment and medication tracking app",
    longDescription: "MediCare is a mobile application designed to help patients manage healthcare appointments, medication schedules, and health records.",
    tools: ["Figma", "Protopie", "Adobe Illustrator"],
    challenges: "Designing for users with varying levels of technical proficiency and potential accessibility needs.",
    solutions: "Created a highly accessible interface with clear information hierarchy and multiple input methods (touch, voice commands).",
    outcome: "The app received a 4.8/5 rating on app stores with particular praise for its ease of use among elderly users."
  },
  {
    id: 3,
    title: "EcoShop E-commerce",
    category: "Web Design",
    description: "An e-commerce platform focused on sustainable and eco-friendly products",
    longDescription: "EcoShop is an e-commerce platform that connects consumers with sustainable and eco-friendly products from verified ethical manufacturers.",
    tools: ["Adobe XD", "Framer", "Webflow"],
    challenges: "Communicating product sustainability credentials without cluttering the shopping experience.",
    solutions: "Designed an intuitive sustainability rating system with expandable details for interested shoppers.",
    outcome: "The platform has seen a 40% higher conversion rate compared to industry averages for eco-product retailers."
  },
  {
    id: 4,
    title: "Workspaces Booking Platform",
    category: "Web Application",
    description: "A platform for booking co-working spaces and meeting rooms",
    longDescription: "Workspaces is a platform that allows users to discover, compare, and book co-working spaces and meeting rooms across multiple locations.",
    tools: ["Figma", "Adobe Photoshop", "Webflow"],
    challenges: "Creating an intuitive booking system that could handle complex availability patterns and filtering options.",
    solutions: "Implemented a visual calendar interface with interactive filters that update in real-time as users adjust their requirements.",
    outcome: "The platform reduced booking abandonment rate by 35% compared to the client's previous solution."
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
