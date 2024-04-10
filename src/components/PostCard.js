import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ data }) => {
  return (
    <>
      {data.map((post, index) => (
        <div
          key={index}
          className="relative w-[20rem] h-[30rem] overflow-hidden cursor-pointer"
        >
          <div className="">
            <h5 className="absolute z-30 -right-8 top-1/2 rotate-[270deg] inline-block">
              {post.date}
            </h5>
            <div className="flex flex-col justify-center items-center p-4 bg-black/60 absolute bottom-0 w-full font-light z-30">
              <h1 className="text-xl">{post.title}</h1>
              <h2 className="text-center my-2 font-light text-sm">
                {post.content}
              </h2>
              <button className="text-sm hover:underline uppercase">
                <Link href={"/blog/okay"}>Read More</Link>
              </button>
            </div>
          </div>

          <Image
            className="w-full h-full object-cover transition-all hover:scale-110 duration-300"
            src={post.image}
            alt="Blog-Image"
            fill
          />
        </div>
      ))}
    </>
  );
};

export default PostCard;
