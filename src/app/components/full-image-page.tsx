import { deleteImage, getImage } from "~/server/db/queries";
import Image from "next/image";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const user = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="relative size-full">
        <Image
          src={image.url}
          fill
          priority
          className="object-contain"
          alt={image.name}
        />
      </div>
      <div className="flex h-full w-48 flex-shrink-0 flex-grow flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span className="text-sm">Uploaded by:</span>
          <span>{user.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span className="text-sm">Created on:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <form
          className="flex flex-row items-center justify-center"
          action={async () => {
            "use server";
            await deleteImage(props.id);
          }}
        >
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}
