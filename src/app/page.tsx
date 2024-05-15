import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main className="">
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="w-1/4 p-4">
            <img src={image.url} alt="gallery image" />
          </div>
        ))}
      </div>
    </main>
  );
}
