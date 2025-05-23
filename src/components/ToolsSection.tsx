import { Figma, FileImage, Framer, Globe, Workflow, Laptop, Code } from 'lucide-react';

const tools = [
  {
    name: "Salesforce",
    icon: Globe,
    description: "CRM platform customization and development"
  },
  {
    name: "Python",
    icon: Code,
    description: "Programming language for automation and data processing"
  },
  {
    name: "n8n",
    icon: Workflow,
    description: "Workflow automation tool for integrations"
  },
  {
    name: "Docker",
    icon: Laptop,
    description: "Containerization for application development"
  },
  {
    name: "Airflow",
    icon: Workflow,
    description: "Platform for workflow orchestration and scheduling"
  },
  {
    name: "Figma",
    icon: Figma,
    description: "Primary design tool for UI/UX"
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="bg-[#141414] py-20">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools I Use</h2>
          <p className="text-light/70 text-lg">The technologies and tools I work with to bring designs to life</p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-lg flex flex-col items-center text-center transition-all hover:border-teal/50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-teal" />
                </div>
                <h3 className="font-semibold text-base mb-2">{tool.name}</h3>
                <p className="text-light/60 text-xs leading-relaxed">{tool.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
