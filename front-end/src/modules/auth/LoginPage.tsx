import FormLogin from "./components/FormLogin";

export default function LoginPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-amber-500">
      <div className="flex items-center justify-center w-4/6 h-4/5 bg-secondary rounded-2xl">
        <div className="flex justify-center bg-border foreground size-full rounded-l-2xl">
          <img src="/logo.png" />
        </div>
        <div className="flex flex-col items-center  bg-secondary w-full size-full rounded-r-2xl">
          <h3 className="text-[1.8rem] font-bold mt-12">Seja Bem Vindo!</h3>
          <span className=" text-[0.9rem]">Faça login para continuar</span>
          <FormLogin />
        </div>
      </div>
    </main>
  );
}
