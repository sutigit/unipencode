export default function Carousel({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="flex gap-10 overflow-x-hidden w-full pb-10">
            {children}
        </div>
    );
}