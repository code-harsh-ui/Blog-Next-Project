import PostCard from "@/components/PostCard";

// const blogData = [
//   {
//     date: "07 April 24",
//     image:
//       "https://images.unsplash.com/photo-1712007426396-08068359b6c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
//   },
//   {
//     date: "07 April 24",
//     image:
//       "https://plus.unsplash.com/premium_photo-1670590820921-28e2a8b1150a?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
//   },
//   {
//     date: "07 April 24",
//     image:
//       "https://images.unsplash.com/photo-1711211095357-076c9784660d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
//   },
//   {
//     date: "07 April 24",
//     image:
//       "https://images.unsplash.com/photo-1712372271755-d52f636fed93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatum, nisi.",
//   },
// ];

const getData = async () => {
  //! The default behaviour of next js is caching date to make the application faster if we don't want to cache the page we can pass the property in fetch method {cache:"no-store"} now next js will not cache the data
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      // cache: "no-store", // if we don't want to cache we can use this
      // cache: "force-cache", // In next js caching is the default behaviour but still we can force-cache using this parameter
      next: { revalidate: 3600 }, // This will refresh the data in every one hour
    }
  );
  // .ok is an inbuilt property of the Response object returned by the fetch function in JavaScript. It is a boolean value that indicates whether the response was successful (status code in the range 200-299) or not.
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json(); // It will fetch and return the array of objects.
};

//------ We can do the same thing in axios as well -------

// import axios from "axios";

// const getData = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts",
//       // This is how we can do caching in axios
//       {
//         headers: {
//           "Cache-Control": "no-store",
//           Pragma: "no-cache",
//           Expires: "0", // Disable caching
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     throw error;
//   }
// };

const Blog = async () => {
  const blogData = await getData(); // and here we are calling the getData function which we've defined above using the await method and it will store the array of object (json) into the variable "blogData" now we can use map to inject the data into the html.

  return (
    <div className="w-full h-full px-12 py-12">
      <div className="flex gap-8 flex-wrap justify-center items-end w-full">
        <PostCard data={blogData} />
      </div>
    </div>
  );
};

export default Blog;
