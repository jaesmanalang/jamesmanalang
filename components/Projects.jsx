import { projects } from '@lib/data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="py-10" id="projects">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="font-bold font-display text-6xl py-4">Projects</h2>
          <p className="text-sm">
            A collection of some personal projects that I have built recently.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-3">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
