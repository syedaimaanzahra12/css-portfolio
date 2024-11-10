import HamburgerMenu from "./menu";
import Link from "next/link";
import "../styles/header.css";
export default function Header() {
  return (
    <header>
      <h3 className="logo">{`Imaan's Porfolio`}</h3>
      <nav>
        <HamburgerMenu />
        <div>
          <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
