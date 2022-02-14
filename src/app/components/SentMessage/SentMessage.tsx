import styles from './SentMessage.module.scss';

type sentMessageProps = {
  isSent: boolean;
};

export const SentMessage = ({ isSent }: sentMessageProps) => {
  let activeClass: string;
  isSent === true ? (activeClass = styles.active) : (activeClass = '');

  return (
    <div className={`${styles.message} ${activeClass}`}>
      <p>Wiadomość wysłana</p>
    </div>
  );
};
