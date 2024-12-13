import styles from "./styles.module.css";

type FallbackErrorProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
export const fallbackError = ({ error, resetErrorBoundary }: FallbackErrorProps) => {
  return (
    <div role="alert" className={styles.errorContainer}>
      <p>Algo deu errado: </p>
      <p className={styles.errorMessage}>{`${error.message} `}</p>
      <span onClick={resetErrorBoundary}>Tentar novamente</span>
    </div>
  );
};
