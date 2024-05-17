import { getImage } from "~/server/db/queries";
import { Modal } from "./modal";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid id");
  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <Image src={image.url} alt="gallery image" width={420} height={420} />
    </Modal>
  );
}
