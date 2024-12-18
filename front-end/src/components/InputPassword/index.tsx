import clsx from "clsx";
import styles from "./styles.module.css";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

type InputWithIconProps = {
  label?: string;
  inputRef?: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = ({ label, inputRef, ...props }: InputWithIconProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.container}>
      {label && (
        <label className={clsx(styles.label, { [styles.noLabel]: !isFocused })}>{label}</label>
      )}

      <input
        className={styles.input}
        placeholder={isFocused ? "" : label}
        onFocus={() => setIsFocused(true)}
        type={showPassword ? "text" : "password"}
        onBlur={(e) => {
          if (!e.target.value) setIsFocused(false);
        }}
        ref={inputRef}
        {...props}
      />
      <div className={styles.icon} onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
      </div>
    </div>
  );
};
