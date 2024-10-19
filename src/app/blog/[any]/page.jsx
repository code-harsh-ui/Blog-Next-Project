import Image from "next/image";

const getData = async (any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${any}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { any } = params;
  console.log(params);

  const posts = await getData(any);
  console.log(posts);
  return (
    <div className="flex gap-8 px-8">
      <div className="flex-1">
        <Image
          className="w-full sticky top-16"
          src={
            "https://images.unsplash.com/photo-1712372271755-d52f636fed93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={500}
          height={800}
          alt="Blog-Image"
        />
      </div>
      <div className="flex-[3]">
        <div className="flex gap-4 items-center justify-start mb-4">
          <Image
            className="rounded-full"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
            }
            width={50}
            height={50}
            alt="author"
          />
          <div>
            <h5 className="font-light text-sm text-gray-400">Author</h5>
            <h1 className="font-light">Lana Rodriguaze</h1>
          </div>
        </div>
        <h5 className="font-light text-sm my-6">
          Published <span>07-April-24</span>
        </h5>
        <h1 className="text-5xl">{posts.title}</h1>
        <p className="font-extralight text-xl my-4">{posts.body}</p>
      </div>
    </div>
  );
};

export default SinglePage;
