import { getImage } from "~/server/db/queries";
import Image from "next/image";
import { clerkClient } from "@clerk/nextjs/server";

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
      {/* <img
          src={image.url}
          className="flex-shrink object-contain"
          alt={image.name}
        /> */}
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
      </div>
    </div>
  );
}
