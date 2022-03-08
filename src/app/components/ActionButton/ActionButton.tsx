import clsx from 'clsx';

import styles from './ActionButton.module.scss';

type ActionButtonProps = {
  onClick: Function;
  text: string;
  className?: string;
};

export const ActionButton = ({
  onClick,
  text,
  className,
}: ActionButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
};
