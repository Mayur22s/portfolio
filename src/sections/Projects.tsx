
const ProjectsSection = ({ projects }: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project: any, index: number) => (
                <div
                    key={index}
                    className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                >
                    <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                    </h3>

                    <p className="text-gray-700 text-sm mt-2 mb-4 leading-relaxed">
                        {project.description}
                    </p>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm font-medium hover:underline"
                    >
                        View Project →
                    </a>
                </div>
            ))}
        </div>
    );
};
export default ProjectsSection;