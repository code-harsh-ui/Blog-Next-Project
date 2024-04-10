import PostCard from "@/components/PostCard";

const blogData = [
  {
    date: "07 April 24",
    image:
      "https://images.unsplash.com/photo-1712007426396-08068359b6c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
  },
  {
    date: "07 April 24",
    image:
      "https://plus.unsplash.com/premium_photo-1670590820921-28e2a8b1150a?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
  },
  {
    date: "07 April 24",
    image:
      "https://images.unsplash.com/photo-1711211095357-076c9784660d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
  },
  {
    date: "07 April 24",
    image:
      "https://images.unsplash.com/photo-1712372271755-d52f636fed93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
  },
];

const Blog = ({ searchParams }) => {
  console.log(searchParams); // it will fetch the query from blog url like
  // this component will still a server component even if we wrapped the whole application in client wrapper component (layout.js root)
  // console.log("let check its work or not"); // it will not console in browser
  return (
    <div className="w-full h-full px-12 py-12">
      <div className="flex gap-8 flex-wrap justify-center items-end w-full">
        <PostCard data={blogData} />
      </div>
    </div>
  );
};

export default Blog;
