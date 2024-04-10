"use client";
// This is called a wrapper component in react when we wrap anything from this component we will get all the components which is in this wrapper component.

//! Example:-

// const wrapperComponent = ({children}) =>{
//     return <div>{children}</div>;
// }

// const anotherComponent = () =>{
//     return (
//     <wrapperComponent>
//         <componentOne/>
//         <componentTwo/>
//         <componentThree/>
//     </wrapperComponent>
//   )
// }

// In react the wrapper component will fetch all the component which is inside the wrapperComponent using the props called "children" and please note that do not pass children as a prop from <componentOne/> or any other component.

const ClientSideProviderTest = ({ children }) => {
  // here we are wrapping the whole application using this wrapper client component with bg-red (to root layout.js) to check if wrapping the whole server component from client component will convert the server component to client component or not. and the answer is it will remains the server component no matter if you wrap the whole application to client component.
  return <div className="bg-red-700">{children}</div>;
};

export default ClientSideProviderTest;
