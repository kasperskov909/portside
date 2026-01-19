import Image from "next/image";

export default function Home() {
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
<>
<div className="flex flex-col min-h-screen w-full items-center justify-between sm:items-start">
        <h1 className="font-black">PORTSIDE</h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"><a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add pier
          </a>
        </div>
        <div className="flex  flex-col gap-4 text-base font-medium sm:flex-row">
        </div>
        </div>
</>
  );
}
