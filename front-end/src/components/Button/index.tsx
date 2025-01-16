import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type ButtonProps = {
  variant: string;
} & React.ComponentPropsWithRef<"button">;

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.outlined]: variant === "outlined",
        [styles.alert]: variant === "alert",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
