import { Fragment } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};
const experiences: Experience[] = [{
  title: "Senior UI/UX Designer",
  company: "Creative Tech Solutions",
  period: "2023 - Present",
  description: ["Lead designer for enterprise-level dashboard applications", "Conducted user research and testing sessions with over 200 participants", "Implemented design system that reduced design inconsistencies by 45%", "Mentored junior designers and facilitated design thinking workshops"]
}, {
  title: "UI/UX Designer",
  company: "Digital Innovation Labs",
  period: "2021 - 2023",
  description: ["Redesigned company's flagship product increasing user engagement by 32%", "Created wireframes, prototypes, and high-fidelity mockups for mobile applications", "Collaborated with product managers and developers throughout the design process", "Conducted A/B testing to optimize key conversion points"]
}, {
  title: "Junior Designer",
  company: "Web Solutions Inc.",
  period: "2020 - 2021",
  description: ["Assisted in the design of responsive web interfaces for various clients", "Created visual assets including icons, illustrations, and marketing materials", "Participated in brainstorming sessions and concept development", "Gained practical experience with design systems and component libraries"]
}];
const ExperienceSection = () => {
  return <section id="experience" className="bg-[#141414] py-0">
      <div className="section-padding">
        <h2 className="section-title">My Experience</h2>
        
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted md:transform md:-translate-x-1/2"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => <Fragment key={index}>
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
                    {exp.description.map((item, i) => <li key={i} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mt-1.5"></span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </Fragment>)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;