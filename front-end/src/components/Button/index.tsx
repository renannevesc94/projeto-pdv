import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type ButtonProps = {
  variant: string;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.outlined]: variant === "outlined",
      })}
    >
      {children}
    </button>
  );
};
