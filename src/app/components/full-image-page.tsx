import { getImage } from "~/server/db/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    // <div className="relative size-full">
    // <Image
    //   src={image.url}
    //   fill
    //   priority
    //   className="object-contain"
    //   alt={image.name}
    // />
    // </div>
    <div className="flex size-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          className="flex-shrink object-contain"
          alt={image.name}
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
