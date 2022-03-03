import styles from './Skills.module.scss';
import { SkillCard } from '../SkillCard/SkillCard';
import { Icon } from '../Icon/Icon';

export const Skills = () => {
  const arrayOfIcons = [
    <Icon path="/assets/icons/html.svg" description="HTML" />,
    <Icon path="/assets/icons/CSS.svg" description="CSS" />,
    <Icon path="/assets/icons/JS.svg" description="JS" />,
    <Icon path="/assets/icons/sass.svg" description="SASS" />,
    <Icon path="/assets/icons/npm.svg" description="NPM" />,
    <Icon path="/assets/icons/git.svg" description="GIT" />,
    <Icon path="/assets/icons/figma.svg" description="FIGMA" />,
    <Icon path="/assets/icons/react.svg" description="REACT" />,
    <Icon path="/assets/icons/ts.svg" description="TYPE SCRIPT" />,
    <Icon path="/assets/icons/mongo.svg" description="MONGO DB" />,
    <Icon path="/assets/icons/node.svg" description="NODE JS" />,
    <Icon path="/assets/icons/react.svg" description="REACT NATIVE" />,
  ];

  return (
    <div className={styles.skillsCardContainer}>
      <SkillCard
        title="Umiejętności"
        icons={arrayOfIcons.slice(0, 7).map((icon) => (
          <div key={icon.props.description}>{icon}</div>
        ))}
      />
      <SkillCard
        title="W trakcie nauki"
        icons={arrayOfIcons.slice(7, 9).map((icon) => (
          <div key={icon.props.description}>{icon}</div>
        ))}
      />
      <SkillCard
        title="W planach"
        icons={arrayOfIcons.slice(9, 12).map((icon) => (
          <div key={icon.props.description}>{icon}</div>
        ))}
      />
    </div>
  );
};
