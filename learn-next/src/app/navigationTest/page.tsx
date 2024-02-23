"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {



  //Client Side navigation
  const router = useRouter();

  const pathName = usePathname();

  const query = useSearchParams();
  const q = query.get("q");

  console.log(pathName);
  console.log(q);

  const handleClick = () => {
    // Write some data to the session storage
   console.log("clicked")
   router.push("/");
  }

  return (
    <>
    <Link href="/" prefetch={false}>Home</Link>
    <button onClick={handleClick}> Write and Redirect</button>
    </>
  );
}
export default NavigationTest;

//default behavior of Link is prefetching given URl

//prefetch={false} will disable prefetching for given URL

//router.push() will add the given URL to the history stack and navigate to the given URL
//router.replace() will replace the current URL with the given URL
//router.refresh() will refresh the current URL and fetch data from api