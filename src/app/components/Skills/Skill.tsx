import styles from './Skills.module.scss';
import { SkillCard } from '../SkillCard/SkillCard';
import { Icon } from '../Icon/Icon';

export const Skills = () => {
  return (
    <div className={styles.skillsCardContainer}>
      <SkillCard
        title="Umiejętności"
        icons={[
          <Icon path="/assets/icons/html.svg" description="HTML" />,
          <Icon path="/assets/icons/CSS.svg" description="CSS" />,
          <Icon path="/assets/icons/JS.svg" description="JS" />,
          <Icon path="/assets/icons/sass.svg" description="SASS" />,
          <Icon path="/assets/icons/npm.svg" description="NPM" />,
          <Icon path="/assets/icons/git.svg" description="GIT" />,
          <Icon path="/assets/icons/figma.svg" description="FIGMA" />,
        ]}
      />
      <SkillCard
        title="W trakcie nauki"
        icons={[
          <Icon path="/assets/icons/react.svg" description="REACT" />,
          <Icon path="/assets/icons/ts.svg" description="TYPE SCRIPT" />,
        ]}
      />
      <SkillCard
        title="W planach"
        icons={[
          <Icon path="/assets/icons/mongo.svg" description="MONGO DB" />,
          <Icon path="/assets/icons/node.svg" description="NODE JS" />,
          <Icon path="/assets/icons/react.svg" description="REACT NATIVE" />,
        ]}
      />
    </div>
  );
};
