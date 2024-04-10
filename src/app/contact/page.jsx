// To make the server side component we can use the tag to make any ssr component a csr
"use client";

import { useEffect, useState } from "react";

// In this we are going to see the difference between the client vs server side component
const Contact = ({}) => {
  // In Next js every components render on the server side first no matter if it is a ssr or csr component but if we put the "use client" tag on top of the page, the component will convert into the csr component and it will show the console results ("a" which generates the random number) on the terminal (ssr) first and different number in browser console as well.

  //! And if the we don't put the "use client" tag on the top of the page it will render only on server side (a = random number) which will appear only on terminal not on the browser.
  const a = Math.random();
  // console.log(a);

  const [isClient, setIsClient] = useState(false);

  // The useEffect is for this condition {isClient && a}

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // The useEffect is for this condition {isClient? a : null}

  useEffect(() => {
    if (!isClient) {
      setIsClient(true);
    }
  }, []);
  return (
    <div>
      {/* There is one more problem we may encounter which is hyderation error and this happens because when there is a mismatch between the server-rendered HTML and the client-side React components due to changes made after the initial server render and here we know we have two different results in (math.random) first one in rendering on the terminal and second one is rendering on the browser */}
      {/* //! To handle the hyderation error we can use three different approches */}
      {/* 1. using useEffect
          2. Dynamic imports
          3. Suppress the warning */}

      {/* {isClient && a} */}

      {/* In the above condition we are saying if {isClient && a}, if isClient is true, you'll see what's inside the "a" box. But if isClient is false, you won't see anything, and the a box remains closed. This is called "short-circuiting" because the && operator stops evaluating as soon as it finds a false value, just like how a circuit breaker stops electricity flow when there's a problem. */}

      {/* //! We can use the above condition in different way as well for better understanding*/}
      {/* The only difference between the both condition {isClient && a} {isClient ? a: null} is in first we are saying if the isClient is false do not render the a and in second condition we are saying if the "isclient" returns true return a and if it is false return null*/}
      {isClient ? a : null}

      <div>contact</div>

      {/* and the third approch is to suppress the hyderation warning by giving the tag to the component example below */}

      {/* <div suppressHydrationWarning>{a}</div> */}
    </div>
  );
};

export default Contact;
