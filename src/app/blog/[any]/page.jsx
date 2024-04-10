import Image from "next/image";

const SinglePage = ({ params }) => {
  //! Here it will fetch only from the server side not the client side means we can see the result only on the terminal not in the browser
  console.log(params); // this params will fetch the slug automatically like what comes after /blog/slug
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
        <h1 className="text-5xl">Title</h1>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
        <p className="font-extralight text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          dolorem doloribus esse quod similique maxime. Ipsam iure sunt tempore
          perferendis distinctio at nostrum, quam culpa, quos molestiae ipsa
          quas perspiciatis facere, consectetur error amet. Aliquam ducimus
          beatae voluptates id a nam sapiente? Ullam consequuntur repellendus,
          nam veniam cumque quas, amet quasi nesciunt voluptatem eos nostrum
          nulla? Vitae ipsum voluptatibus facilis deserunt pariatur cumque,
          magnam molestias repellendus perspiciatis aliquid veniam totam alias.
          Quas officiis aut assumenda architecto et dolorem voluptatum
          consequatur placeat perspiciatis, esse necessitatibus ducimus,
          possimus aspernatur, adipisci ea illo doloribus magnam molestias
          nostrum velit accusantium maxime tempore fugit! Illum?
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
