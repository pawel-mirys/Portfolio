import clsx from 'clsx';

import styles from './SentMessage.module.scss';

type sentMessageProps = {
  isSent: boolean;
};

export const SentMessage = ({ isSent }: sentMessageProps) => {
  return (
    <div className={clsx(styles.message, isSent && styles.active)}>
      <p>Wiadomość wysłana</p>
    </div>
  );
};
