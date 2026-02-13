import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function LoginPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to access your account and saved designs.</p>

          <form className="mt-6 space-y-4" action="#">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none ring-accent/30 transition focus:border-accent focus:ring-4"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none ring-accent/30 transition focus:border-accent focus:ring-4"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-600">
            New here?{' '}
            <Link href="/register" className="font-medium text-accent hover:text-violet-700">
              Create an account
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
