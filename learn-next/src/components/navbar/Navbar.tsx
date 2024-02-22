import Link from "next/link";
import Links from "./links/links";

const Navbar = () => {
  return (
    <div>
        <div>Logo</div>
        <div>
            <Links/>
        </div>
    </div>
  );
}

export default Navbar;