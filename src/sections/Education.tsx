import { data } from "../App";

export const Education = () => {
    return (
        <div className="space-y-3">
            {data.education.map((ed) => (
                <div key={ed.school} className="p-3 border rounded">
                    <div className="font-medium">{ed.degree}</div>
                    <div className="text-sm text-gray-600">{ed.school} • {ed.year}</div>
                </div>
            ))}
        </div>
    );
}