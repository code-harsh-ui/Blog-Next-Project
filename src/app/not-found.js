import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <h1>Sorry! The requested page can not be found...!</h1>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
}
