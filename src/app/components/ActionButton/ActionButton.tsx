import styles from './ActionButton.module.scss';
type ActionButtonProps = {
  doAction: Function;
  text: string;
};

export const ActionButton = ({ doAction, text }: ActionButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        doAction();
      }}
    >
      {text}
    </button>
  );
};
