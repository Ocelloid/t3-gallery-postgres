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
