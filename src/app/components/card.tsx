import styles from '../styles/Card.module.css';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface CardProps {
  title: string;
  paragraph?: string;
  skills?: Skill[]; // Change listItems to skills
}

const Card: React.FC<CardProps> = ({ title, paragraph, skills }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
      {skills && skills.length > 0 && (
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.skillItem}>
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;