import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
        Welcome to the Rick and Morty Universe
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Dive into the multiverse! Explore characters, episodes, and
        unforgettable adventures.
      </p>
      <div className="flex justify-center space-x-4">
        <Button
          variant="default"
          className="px-6 py-3 text-lg font-medium rounded-lg shadow-md transition"
        >
          View Characters
        </Button>

        <Button
          variant="secondary"
          className="px-6 py-3 text-lg font-medium rounded-lg shadow-md transition"
        >
          Explore Episodes
        </Button>
      </div>
      <div className="mt-12">
        <Image
          src="/images/rick-and-morty-home.jpg"
          alt="Rick and Morty Multiverse"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </main>
  );
}
