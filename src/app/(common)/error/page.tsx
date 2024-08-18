import { Button } from "@nextui-org/react";

export default function ErrorPage() {
    return (
        <main className="h-screen w-full flex flex-col gap-5 justify-center items-center ">
            <h1 className="text-3xl font-bold">Oh no! Something went wrong...</h1>
            <p className="text-xl font-medium">Sorry about it! Could you please try again?</p>

            {/* TODO: actually take this to the previous page */}
            <Button className="bg-pink text-black font-medium">Go Back</Button>
        </main>
    );
}