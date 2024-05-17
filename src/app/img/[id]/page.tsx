import { getImage } from "~/server/db/queries";
import Image from "next/image";

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid id");
  const image = await getImage(idAsNumber);
  return (
    <div className="items-center justify-center">
      <Image
        src={image.url}
        alt="gallery image"
        style={{ objectFit: "cover" }}
        fill={true}
      />
    </div>
  );
}
