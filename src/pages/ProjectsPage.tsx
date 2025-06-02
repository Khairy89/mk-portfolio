import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';

const ProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'All Projects | Khairy Fauzi';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    // Ensure body can scroll (fix potential overflow issues)
    document.body.style.overflow = 'auto';
    
    // Cleanup function to ensure scrolling is always enabled when leaving the page
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "Salesforce Data Integration Pipeline",
      category: "CRM Automation",
      description: "Automated data synchronization between Salesforce and external systems using n8n workflows",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      longDescription: "A comprehensive automation solution that synchronizes customer data between Salesforce CRM and multiple external platforms, ensuring real-time data consistency across all business systems.",
      tools: ["Salesforce", "n8n", "Docker", "REST APIs"],
      challenges: "Managing real-time data synchronization across multiple platforms while handling API rate limits and ensuring data integrity.",
      solutions: "Implemented intelligent retry mechanisms, batch processing, and error handling workflows with automatic rollback capabilities.",
      outcome: "Reduced manual data entry by 85% and improved data accuracy to 99.7% across all integrated systems.",
      duration: "3 months",
      client: "Enterprise SaaS Company",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Multi-Platform Workflow Orchestration",
      category: "Process Automation",
      description: "Created complex automated workflows connecting 15+ business applications using n8n",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      longDescription: "Designed and implemented sophisticated automation workflows that connect various business applications including CRM, ERP, marketing tools, and communication platforms.",
      tools: ["n8n", "Docker", "Webhooks", "API Integration"],
      challenges: "Orchestrating complex business processes across disparate systems with different data formats and authentication methods.",
      solutions: "Built modular workflow components with standardized data transformation layers and centralized error monitoring.",
      outcome: "Achieved 70% reduction in manual tasks and improved process completion time by 60% across departments.",
      duration: "4 months",
      client: "Digital Marketing Agency",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Containerized Development Environment",
      category: "DevOps Automation",
      description: "Streamlined development workflows using Docker containerization and automation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      longDescription: "Implemented a fully containerized development environment that automates setup, testing, and deployment processes for development teams.",
      tools: ["Docker", "Docker Compose", "CI/CD", "Git"],
      challenges: "Standardizing development environments across team members while maintaining flexibility for different project requirements.",
      solutions: "Created custom Docker images with automated environment provisioning and one-command deployment scripts.",
      outcome: "Reduced onboarding time for new developers from 2 days to 30 minutes and eliminated environment-related bugs.",
      duration: "2 months",
      client: "Tech Startup",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "E-commerce Analytics Dashboard",
      category: "Data Visualization",
      description: "Built a comprehensive analytics dashboard for tracking e-commerce performance metrics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      longDescription: "Developed a real-time analytics dashboard that aggregates data from multiple e-commerce platforms and provides actionable insights for business decision-making.",
      tools: ["React", "D3.js", "Node.js", "MongoDB"],
      challenges: "Processing large volumes of real-time data while maintaining responsive user interface and accurate reporting.",
      solutions: "Implemented data streaming with WebSockets, optimized database queries, and created efficient caching strategies.",
      outcome: "Enabled data-driven decisions that increased conversion rates by 25% and reduced customer acquisition costs by 30%.",
      duration: "5 months",
      client: "E-commerce Platform",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "API Gateway and Microservices Architecture",
      category: "Backend Development",
      description: "Designed and implemented a scalable microservices architecture with API gateway",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      longDescription: "Built a robust microservices ecosystem with centralized API gateway, service discovery, and load balancing to handle high-traffic enterprise applications.",
      tools: ["Node.js", "Express", "Docker", "Kubernetes", "Redis"],
      challenges: "Managing inter-service communication, ensuring data consistency, and implementing proper security across multiple services.",
      solutions: "Developed service mesh architecture with circuit breakers, implemented event sourcing for data consistency, and created comprehensive monitoring.",
      outcome: "Improved system scalability by 300% and reduced response times by 45% under high load conditions.",
      duration: "6 months",
      client: "Financial Services Company",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Mobile App Backend Infrastructure",
      category: "Mobile Backend",
      description: "Created scalable backend infrastructure for a social media mobile application",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      longDescription: "Developed a comprehensive backend system supporting real-time messaging, content sharing, and user management for a mobile social platform.",
      tools: ["Node.js", "Socket.io", "PostgreSQL", "AWS", "Redis"],
      challenges: "Handling real-time communication for thousands of concurrent users while maintaining data integrity and security.",
      solutions: "Implemented horizontal scaling with load balancers, optimized database schema, and created efficient caching strategies.",
      outcome: "Successfully supported 100K+ active users with 99.9% uptime and sub-second response times.",
      duration: "8 months",
      client: "Social Media Startup",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark pt-20">
        {/* Header Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-teal hover:text-teal/80 hover:bg-muted/50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
              <p className="text-light/70 text-lg max-w-2xl mx-auto">
                Explore my complete portfolio of automation solutions, web applications, and technical projects
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-80">
                      <div className="absolute bottom-4 left-4">
                        <span className="text-teal text-sm font-medium">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-light/80 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-light/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{project.client}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools?.slice(0, 3).map((tool, index) => (
                        <span key={index} className="px-2 py-1 bg-muted rounded text-xs">
                          {tool}
                        </span>
                      ))}
                      {project.tools && project.tools.length > 3 && (
                        <span className="px-2 py-1 bg-muted rounded text-xs">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-teal hover:bg-teal/90 text-black">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-light/70 mb-8">
              I'm always open to discussing new projects and opportunities
            </p>
            <Button 
              onClick={() => navigate('/#contact')}
              className="bg-teal hover:bg-teal/90 text-black px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
