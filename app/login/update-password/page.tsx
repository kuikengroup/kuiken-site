import AuthForm from "../AuthForm";

export default function UpdatePage() {
  return (
    <div
      id="login-shell"
      className="portal-auth-atmosphere flex min-h-screen items-center px-6 py-20 text-[#E7DCC1]"
    >
      <section className="portal-auth-card mx-auto w-full max-w-xl rounded-[2rem] border border-[#E7DCC1]/12 p-8 shadow-[0_35px_100px_rgba(0,0,0,.28)] sm:p-11">
        <div className="section-label">Secure account</div>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.05em]">
          Choose a new password.
        </h1>
        <p className="mt-5 text-sm leading-7 text-[#E7DCC1]/60">
          Create a strong password to finish securing your portal account.
        </p>
        <AuthForm mode="update" />
      </section>
    </div>
  );
}
