'use client'
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react";
export default function Home() {

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-3 row-start-2 items-center justify-center text-center">
        <SparklesText text="NEST" />
        <p className="font-semibold">Something Amazing is Coming Soon!</p>
        <p className="font-medium text-xs md:text-base">Stay tuned for updates as we prepare to launch our upcoming website. 🚀</p>
        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => handleClick('https://www.instagram.com/nest.dev/')} variant="outline" aria-label="Login with Google" size="icon">
            <RiInstagramFill size={16} aria-hidden="true" />
          </Button>
          <Button onClick={() => handleClick('https://www.facebook.com/nest.development')} variant="outline" aria-label="Login with Facebook" size="icon">
            <RiFacebookFill size={16} aria-hidden="true" />
          </Button>
          <Button onClick={() => handleClick('https://x.com/nest__dev')} variant="outline" aria-label="Login with X" size="icon">
            <RiTwitterXFill size={16} aria-hidden="true" />
          </Button>
          <Button onClick={() => handleClick('https://github.com/hellonest')} variant="outline" aria-label="Login with GitHub" size="icon">
            <RiGithubFill size={16} aria-hidden="true" />
          </Button>
        </div>
      </main>
    </div>
  );
}
