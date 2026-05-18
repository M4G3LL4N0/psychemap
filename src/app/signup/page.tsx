import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export const metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="text-3xl font-semibold text-slate-100">Sign up</h1>
      <p className="mt-2 text-slate-400">Create an account when auth is enabled. Maps work without signup today.</p>
      <form className="mt-8 space-y-4">
        <div>
          <label htmlFor="signup-email" className="block text-sm text-slate-400">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
          />
        </div>
        <div>
          <label htmlFor="signup-password" className="block text-sm text-slate-400">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white hover:bg-blue-500"
        >
          Create account
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-400 hover:text-blue-300">
          Log in
        </Link>
      </p>
    </div>
  </>
  )
}
