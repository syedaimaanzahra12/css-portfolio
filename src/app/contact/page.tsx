import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import './style.css';
export default function Contact(){
    return (
        <section>
           <h2>Get in Touch</h2> 
           <p>Feel free to reach out to me directly through any of the channels below:</p>
           <div className="flex flex-col items-center space-y-4">
        <Link href="mailto:zahrasyedaimaan@gmail.com">
          <FaEnvelope  />
          <span>zahrasyedaimaan@gmail.com</span>
        </Link>
        <Link href="https:www.linkedin.com/in/syedaimaan-z-b6b46b2ba" target="_blank">
          <FaLinkedin  />
          <span>SyedaImaanZahra</span>
        </Link>
        <Link href="https://github.com/syedaimaanzahra12" target="_blank">
          <FaGithub />
          <span>syeaimaanzahra12</span>
        </Link>
      </div>
        </section>
    )
}