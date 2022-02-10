import styles from './ActionButton.module.scss';
type ActionButtonProps = {
  doAction: Function;
  text: string;
  className?: string;
};

export const ActionButton = ({
  doAction,
  text,
  className,
}: ActionButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => {
        doAction();
      }}
    >
      {text}
    </button>
  );
};
