export default function Header({ title, subtitle }: Readonly<{ title: string, subtitle?: string }>) { 
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-medium">{title}</h1>
            {subtitle && <p className="text-large text-zinc-500">{subtitle}</p>}
        </div>
    );
};