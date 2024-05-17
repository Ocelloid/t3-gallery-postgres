import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

export async function getMyImages() {
  const user = auth();
  if (!user.userId) throw new Error("Not signed in");
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Not signed in");
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image) throw new Error("Image not found");
  if (image.userId !== user.userId) throw new Error("Not your image");
  return image;
}
