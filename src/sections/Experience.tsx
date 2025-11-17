import { data } from "../App";

export const Experience = () => {
    return (
        <div className="space-y-6">
            {data.experiences.map((exp) => (
                <div key={exp.company} className="p-4 border rounded">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">{exp.role}</div>
                            <div className="text-sm text-gray-600">{exp.company}</div>
                        </div>
                        <div className="text-sm text-gray-500">{exp.period}</div>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                        {exp.details.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}