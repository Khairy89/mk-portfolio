
import { Figma, FileImage, Framer, Globe, Workflow, Laptop } from 'lucide-react';

const tools = [
  {
    name: "Figma",
    icon: Figma,
    description: "Primary design tool for wireframes and prototypes"
  },
  {
    name: "Adobe Photoshop",
    icon: FileImage,
    description: "Image editing and graphic design"
  },
  {
    name: "Framer",
    icon: Framer,
    description: "Interactive prototyping and animations"
  },
  {
    name: "Webflow",
    icon: Globe,
    description: "Website building and responsive design"
  },
  {
    name: "Salesforce",
    icon: Globe, // Using Globe as a stand-in for Salesforce
    description: "CRM platform customization and development"
  },
  {
    name: "Docker",
    icon: Laptop, // Using Laptop as a stand-in for Docker
    description: "Containerization for application development"
  },
  {
    name: "n8n",
    icon: Workflow, // Using Workflow as a stand-in for n8n
    description: "Workflow automation tool for integrations"
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="bg-[#141414] py-20">
      <div className="section-padding">
        <h2 className="section-title">Tools I Know</h2>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg flex flex-col items-center text-center transition-all hover:shadow-lg hover:shadow-teal/10 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4">
                  <Icon size={32} className="text-teal" />
                </div>
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-light/70 text-sm">{tool.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-muted to-card p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["User Research", "Wireframing", "Prototyping", "User Testing", "Design Systems", "Responsive Design", "Animation", "Accessibility"].map((skill, index) => (
              <div key={index} className="bg-dark/50 py-3 px-4 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
