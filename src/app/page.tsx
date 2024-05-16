import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/db/queries";
export const dynamic = "force-dynamic";

export default async function HomePage() {
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
    <div className="flex flex-wrap">
      {images.map((image) => (
        <div key={image.id} className="w-1/4 p-4">
          <img src={image.url} alt="gallery image" />
        </div>
      ))}
    </div>
  );
}
