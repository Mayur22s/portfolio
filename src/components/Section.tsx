export const Section = ({ id, title, children }: any) => {
    return (
        <section id={id} className="max-w-4xl mx-auto px-6 py-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="mt-4">{children}</div>
        </section>
    );
}
