interface ListGridProps {
    items: string[];
}

export const ListGrid: React.FC<ListGridProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {items.map((item) => (
                <div
                    key={item}
                    className="p-2 border rounded text-sm text-center"
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

