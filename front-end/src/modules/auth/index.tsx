import { useRef } from "react";
import { Button } from "../../components/Button";
import { LabeledInput } from "../../components/LabeledInput";
import styles from "./styles.module.css";

import { InputPassword } from "../../components/InputPassword";
import { useLogin } from "./hooks/useLogin";
import { MdOutlineEmail } from "react-icons/md";

export const Login = () => {
  const inputRef = useRef(null);
  const { register, handleSubmit, errors, error } = useLogin();

  return (
    <>
      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <div className={styles.loginImage}>
            <img src="logo.png" />
          </div>
          <div className={styles.loginContent}>
            <div className={styles.loginTitle}>
              <h2>Bem vindo!</h2>
              <span>Faça login para continuar</span>
            </div>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              {error && <span className={styles.error}>{error.message}</span>}
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              {errors.password && <span className={styles.error}>{errors.password.message}</span>}

              <LabeledInput
                {...register("email")}
                label="E-mail"
                type="email"
                inputRef={inputRef}
                hasError={!!error || !!errors.email}
                icon={<MdOutlineEmail />}
              />
              <InputPassword {...register("password")} label="Senha" />

              <div className={styles.loginRemember}>
                <div>
                  <input type="checkbox" name="checkPassword" id="checkPassword" />
                  <label htmlFor="checkPassword">Lembrar senha</label>
                </div>

                <span>Esqueci a senha</span>
              </div>
              <Button variant="primary">Entrar</Button>
            </form>

            <div className={styles.loginFooter}>
              Desenvolvido por:
              <a href="https://github.com/renannevesc94">Renan Neves</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
