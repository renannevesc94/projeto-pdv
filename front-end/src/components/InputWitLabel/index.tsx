import { ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";
type InputWitLabelProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const InputWitLabel = ({ label, ...props }: InputWitLabelProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="quantity">{label}</label>
      <input {...props} />
    </div>
  );
};
