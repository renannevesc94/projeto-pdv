import { ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";

type SelectProps = {
  label: string;
  options: string[];
} & ComponentPropsWithoutRef<"select">;

export const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="discountType">{label}</label>
      <select name="discountType" id="" {...props}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
