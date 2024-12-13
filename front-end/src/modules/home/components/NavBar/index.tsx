import { Suspense } from "react";
import styles from "./styles.module.css";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackError } from "../../../../components/ErrorBoundary/fallbackError";
import { NavBarContent } from "../NavBarContent";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

export const NavBar: React.FC = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <nav className={styles.navbar}>
      <ErrorBoundary fallbackRender={fallbackError} onReset={reset}>
        <Suspense fallback={<div>Loading categories...</div>}>
          <NavBarContent />
        </Suspense>
      </ErrorBoundary>
    </nav>
  );
};
