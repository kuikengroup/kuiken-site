import AuthForm from "../../login/AuthForm";

export default function ResetPasswordPage() {
  return (
    <div className="portal-auth-atmosphere flex min-h-screen items-center px-6 py-20 text-[#E7DCC1]">
      <section className="portal-auth-card mx-auto w-full max-w-xl rounded-[2rem] border border-[#E7DCC1]/12 p-8 sm:p-11">
        <div className="section-label">Secure account</div>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.05em]">Choose a new password.</h1>
        <p className="mt-5 text-sm leading-7 text-[#E7DCC1]/60">Use at least 12 characters. This password will work in both the website portal and mobile app.</p>
        <AuthForm mode="update" />
      </section>
    </div>
  );
}
