import { ComponentPropsWithoutRef, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type LabeledInputProps = {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  icon?: React.ReactNode;
  inputWithLine?: boolean;
  hasError: boolean;
} & ComponentPropsWithoutRef<"input">;

export const LabeledInput = ({
  label,
  inputRef,
  icon,
  inputWithLine,
  hasError,

  ...props
}: LabeledInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.container}>
      {label && (
        <label className={clsx(styles.label, { [styles.noLabel]: !isFocused })}>{label}</label>
      )}

      <input
        className={clsx(styles.input, {
          [styles.inputWithLine]: inputWithLine,
          [styles.hasError]: hasError,
        })}
        placeholder={isFocused ? "" : label}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!e.target.value) setIsFocused(false);
        }}
        ref={inputRef}
        {...props}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};
