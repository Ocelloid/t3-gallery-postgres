import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/db/queries";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="relative h-48 w-1/4">
          <Link href={`/img/${image.id}`} passHref>
            <Image
              src={image.url}
              alt="gallery image"
              style={{ objectFit: "contain" }}
              fill={true}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
