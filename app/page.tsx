import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hi, I am Liu Yuxuan. 😊</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my personal website! I'm a frontend developer who loves
          building fun and useful things with code. 
        </p>
        <p>
          This site is made with
          Next.js, where I share my thoughts, blog posts, and more. Hope you
          find something helpful here—feel free to reach out anytime!
        </p>
      </div>
    </section>
  );
}
