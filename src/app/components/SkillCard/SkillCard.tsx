import styles from './SkillCard.module.scss';

type SkillCardProps = {
  title: string;
  icons: JSX.Element[];
};

export const SkillCard = ({ title, icons }: SkillCardProps) => {
  return (
    <div className={styles.skillCardBackground}>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.skillIcons}>{icons}</div>
      </div>
    </div>
  );
};
