"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
  // Client Side Navigation Fetch
  const router = useRouter();
  const pathname = usePathname(); // /navigationtest
  const searchParams = useSearchParams(); // /navigationtest?q=test
  const result = searchParams.get("q"); // get is a method of useSearchParams to fetch the query result from url and here q= test
  console.log(result); // test

  console.log(pathname); // it will fetch the pathname except the base url "/navigationtest"

  const handleClick = () => {
    console.log("clicked");
    // router.push("/");
    // if we use router.replace it will not add new entry in browser history.
    // router.replace("/");
    // it will refresh the page
    // router.refresh();
    // router.back();
    router.forward();
  };
  return (
    <div>
      {/* The prefetch attribute in the Link component from Next.js controls whether Next.js should prefetch the linked page in the background. When prefetch is set to true, Next.js will prefetch the linked page, meaning it will start loading the linked page's code and assets before the user clicks on the link, improving the perceived performance when the user does click. */}
      <Link href="/" prefetch={false}>
        click here
      </Link>
      <br />
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
