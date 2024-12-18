import { useRef } from "react";
import { Button } from "../../components/Button";
import { LabeledInput } from "../../components/LabeledInput";
import styles from "./styles.module.css";

import { CiKeyboard } from "react-icons/ci";
import { InputPassword } from "../../components/InputPassword";

export const Login = () => {
  const inputRef = useRef(null);
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
            <form action="" className={styles.loginForm}>
              <LabeledInput label="E-mail" inputRef={inputRef} icon={<CiKeyboard />} />
              <InputPassword label="Senha" />

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
