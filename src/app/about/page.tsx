import "./style.css";
import Image from "next/image";
import Card from "../components/card";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export default function About() {
  const skills: Skill[] = [
    { name: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: "TypeScript", icon: <SiTypescript size={24} color="#007ACC" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#38B2AC" /> },
    { name: "Next.js", icon: <SiNextdotjs size={24} color="#000000" /> },
  ];

  return (
    <section>
      <Image
        src="/profile.jpeg"
        alt="profile img"
        className="profileImage"
        width={320}
        height={320}
      />
      <h1>{`Hi, I'm Imaan!`}</h1>
      <div className="card-container">
        <Card
          title="My Story"
          paragraph="My journey into web development is quite an unexpected one.
                  Initially, I had little interest in computer related subjects,
                  which is why I pursued my matriculation in Biology. But as I
                  explored web development, I found myself genuinely interested
                  and excited by the possibilities."
        />
        <Card
          title="My Skills"
          paragraph="Here are some of the technologies I've worked with:"
          skills={skills}
        />
        <Card
          title="Hobbies"
          paragraph="I have keen interest and passion for art of all forms like painting, sketching, poetry.I also have a strong interest in 3D web technologies like Three.js, which I plan to explore in the future."
        />
      </div>
    </section>
  );
}
