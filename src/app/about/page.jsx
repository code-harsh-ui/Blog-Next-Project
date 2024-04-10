// import HyderationTest from "@/components/HyderationTest";
//! 2nd method is to fix the hyderation error is to use the dynamic import from next/dynamic and then we can use that client component in server side component without fetching the hyderation error

import dynamic from "next/dynamic";
const HyderationTestNoSSr = dynamic(
  () => import("@/components/HyderationTest"),
  { ssr: false }
);

const About = ({}) => {
  return (
    <div>
      <div>
        <div>About Page</div>
      </div>
      <HyderationTestNoSSr />
    </div>
  );
};

export default About;
