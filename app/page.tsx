import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold pb-3 text-blue-400">
        API Runner Dev Login
      </h1>
      <p>Praveen</p>
      <p>Mahesh</p>
      <p>Chandu</p>
      <p>Faheem</p>
      <p>Swetha</p>
      <p>Bhargavi</p>
      {/* <p>Sharon</p> */}
      <Link href={"/login"}>
        <p className="px-3 py-2 bg-red-400 w-max mt-4 rounded-sm">Login</p>
      </Link>
    </div>
  );
}
