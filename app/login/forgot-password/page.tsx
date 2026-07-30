import AuthForm from "../AuthForm";

export default function ForgotPage() {
  return (
    <div
      id="login-shell"
      className="portal-auth-atmosphere flex min-h-screen items-center px-6 py-20 text-[#E7DCC1]"
    >
      <section className="portal-auth-card mx-auto w-full max-w-xl rounded-[2rem] border border-[#E7DCC1]/12 p-8 shadow-[0_35px_100px_rgba(0,0,0,.28)] sm:p-11">
        <div className="section-label">Account recovery</div>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.05em]">
          Reset your password.
        </h1>
        <p className="mt-5 text-sm leading-7 text-[#E7DCC1]/60">
          We’ll send a secure link to the email associated with your portal
          account.
        </p>
        <AuthForm mode="reset" />
      </section>
    </div>
  );
}
