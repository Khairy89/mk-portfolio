
import { Fragment } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: "Head of Technology & Product",
    company: "Swadaya Tech Indonesia",
    period: "Aug 2023 - Present",
    description: [
      "Lead the technology & product team in developing financial solutions for farmers",
      "Built and managed cross-functional team in building end-to-end products",
      "Designed and implemented agile product management processes",
      "Established product roadmap and technology strategy for the organization"
    ]
  },
  {
    title: "Co-Founder & CTO",
    company: "Digitos.id",
    period: "Oct 2019 - Present",
    description: [
      "Founded and led a digital agency with focus on custom web applications",
      "Built e-commerce platforms, ERP systems, and inventory management solutions",
      "Guided business strategies that resulted in successful client acquisitions",
      "Managed end-to-end product development and client relationships"
    ]
  },
  {
    title: "Head of Software",
    company: "OB Montessori",
    period: "Sep 2021 - Aug 2023",
    description: [
      "Led team in developing school management system and learning software",
      "Implemented digital transformation strategies across the organization",
      "Managed infrastructure and system architecture for educational software",
      "Established project management methodologies and development workflows"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#141414] py-20">
      <div className="section-padding">
        <h2 className="section-title">My Experience</h2>
        
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted md:transform md:-translate-x-1/2"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <Fragment key={index}>
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-16 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-teal transform -translate-x-1/2 z-10"></div>
                
                {/* Date */}
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start md:pl-8' : 'md:justify-end md:pr-8'} mb-4 md:mb-0`}>
                  <div className="flex items-center bg-muted px-4 py-2 rounded-full">
                    <Calendar size={16} className="mr-2 text-teal" />
                    <span className="text-sm text-light/70">{exp.period}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 bg-card p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-teal" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-teal mb-3">{exp.company}</p>
                  <ul className={`space-y-2 text-light/80 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mt-1.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
