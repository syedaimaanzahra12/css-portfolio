import Link from 'next/link';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <p>
        &copy; {new Date().getFullYear()} Imaan. All rights reserved.
      </p>
    </footer>
  );
}

