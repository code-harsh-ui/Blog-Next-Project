const Layout = ({ children }) => {
  return (
    <div>
      {/* We can create a common component for each page similarly like we did in root folder in layout file. To do this first we need to create a file named "layout" and put it into the main route root folder. For example if we want this component into the "blog page" and "in single blog page" we have to put the layout file into the main root folder. and don't forget to fetch the "children" prop to show all the rest component along with this universal component */}
      <div className="w-full h-full flex justify-center items-center text-3xl my-6">
      <h1>Our Blogs</h1>
      </div>
      {children}
    </div>
  );
};

export default Layout;
