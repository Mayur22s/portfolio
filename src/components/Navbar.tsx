import { data } from "../App";

export const Nav = () => {
    const items = ["Summary", "Skills", "Experience", "Education", "Contact"]

    return (
        <nav className="w-full sticky top-0 bg-white/80 backdrop-blur z-20 border-b">
            <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="font-semibold">{data.name}</div>
                <div className="hidden sm:flex gap-4">
                    {items.map((it) => (
                        <a key={it} href={`#${it.toLowerCase()}`} className="text-sm hover:underline">
                            {it}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
