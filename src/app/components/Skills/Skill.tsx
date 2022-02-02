import styles from './Skills.module.scss';
import { SkillCard } from '../SkillCard/SkillCard';
import { Icon } from '../Icon/Icon';

export const Skills = () => {
  return (
    <div className={styles.skillsCardContainer}>
      <SkillCard
        title="Umiejętności"
        icons={[
          <Icon
            path="/assets/icons/html.svg"
            alt=""
            className=""
            description="HTML"
          />,
          <Icon
            path="/assets/icons/CSS.svg"
            alt=""
            className=""
            description="CSS"
          />,
          <Icon
            path="/assets/icons/JS.svg"
            alt=""
            className=""
            description="JS"
          />,
          <Icon
            path="/assets/icons/sass.svg"
            alt=""
            className=""
            description="SASS"
          />,
          <Icon
            path="/assets/icons/npm.svg"
            alt=""
            className=""
            description="NPM"
          />,
          <Icon
            path="/assets/icons/git.svg"
            alt=""
            className=""
            description="GIT"
          />,
          <Icon
            path="/assets/icons/figma.svg"
            alt=""
            className={styles.lastChild}
            description="FIGMA"
          />,
        ]}
      />
      <SkillCard
        title="W trakcie nauki"
        icons={[
          <Icon
            path="/assets/icons/react.svg"
            alt=""
            className=""
            description="REACT"
          />,
          <Icon
            path="/assets/icons/ts.svg"
            alt=""
            className=""
            description="TYPE SCRIPT"
          />,
          <Icon path="/assets/icons/.svg" alt="" className="" description="" />,
        ]}
      />
      <SkillCard
        title="W planach"
        icons={[
          <Icon
            path="/assets/icons/mongo.svg"
            alt=""
            className=""
            description="MONGO DB"
          />,
          <Icon
            path="/assets/icons/node.svg"
            alt=""
            className=""
            description="NODE JS"
          />,
          <Icon
            path="/assets/icons/react.svg"
            alt=""
            className=""
            description="REACT NATIVE"
          />,
        ]}
      />
    </div>
  );
};
