import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className={'flex flex-col items-center justify-center'}>
       <Link href={'/login'} prefetch={true}>Login</Link>
       <Link href={'/movies'} prefetch={true}>Movies</Link>
   </div>
  );
}
