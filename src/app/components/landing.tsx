import Link from "next/link"
import '../styles/landing.css'
import Button from "./button"
export default function Landing(){
    return(
        <main>
            <h1>{`Hi, I'm Imaan`}</h1>
            <p>Aspiring Full Stack Developer</p>
    <Link href="/about"><Button>Explore My Journey</Button> </Link>
        </main>
    )
}