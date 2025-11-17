
import { data } from "../App";

export const About = () => {
    return (
        <header className="max-w-3xl mx-auto px-6 py-10 text-center">
            <h1 className="text-3xl font-bold">{data.name}</h1>

            <p className="text-gray-600 mt-1">
                {data.title} — {data.location}
            </p>

            <div className="mt-4 flex justify-center gap-3">
                <a
                    href={data.links.website}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border rounded"
                >
                    Website
                </a>
                <a
                    href={data.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border rounded"
                >
                    GitHub
                </a>
                <a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border rounded"
                >
                    LinkedIn
                </a>
            </div>
        </header>
    );
};
