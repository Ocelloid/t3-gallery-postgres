const mockURLs = [
  "https://utfs.io/f/a5832428-4b1b-4206-870d-29d754fac7be-7xshbi.jpg",
  "https://utfs.io/f/113c860d-f5a4-4e8e-b680-9fc2c941cf5f-1jnyk9.jpg",
  "https://utfs.io/f/71c1e744-4d51-45a9-9687-18474d0e8d50-9uj9sx.jpg",
  "https://utfs.io/f/46387a91-aa65-4aa0-b878-5dc85ca4d833-hvriar.jpg",
  "https://utfs.io/f/bad6f460-fe7e-4537-a2e7-fe16353c6e4d-73k5cn.jpg",
  "https://utfs.io/f/ff92573d-527f-48bf-bb83-3c8e46115adf-9uj9sw.jpg",
];

const mockImages = mockURLs.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-1/4 p-4">
            <img src={image.url} alt="gallery image" />
          </div>
        ))}
      </div>
    </main>
  );
}
