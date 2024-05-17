import { getImage } from "~/server/db/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return <Image src={image.url} alt="gallery image" width={420} height={420} />;
}
