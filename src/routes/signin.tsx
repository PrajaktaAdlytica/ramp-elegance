import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Chrome, KeyRound } from "lucide-react";
import { WovenLightHero } from "@/components/site/Backgrounds";
import { Logo } from "@/components/site/Logo";
import { ShimmerButton, OutlineButton } from "@/components/site/Button";
import { HoverCard } from "@/components/site/HoverCard";

export const Route = createFileRoute("/signin")({
  component: SignIn,
  head: () => ({
    meta: [
      { title: "Sign in — Ledgerza" },
      { name: "description", content: "Sign in to your Ledgerza finance operations workspace." },
    ],
  }),
});

function SignIn() {
  return (
    <WovenLightHero className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 py-16">
        <Link to="/"><Logo className="h-8" /></Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full"
        >
          <HoverCard className="p-8">
            <h1 className="display text-3xl">Welcome back.</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to your Ledgerza workspace.</p>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="text-sm font-medium">Work email</label>
                <input
                  type="email"
                  placeholder="anna@northwind.eu"
                  className="mt-2 block w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-[15px] focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Password</label>
                  <a href="#" className="text-xs text-accent hover:underline">Forgot password?</a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 block w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-[15px] focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-border accent-[color:var(--accent)]" />
                Remember me
              </label>
              <ShimmerButton type="submit" withArrow>Sign In</ShimmerButton>
            </form>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" /> or continue with <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-3">
              <OutlineButton>
                <Chrome className="h-4 w-4" /> Continue with Google
              </OutlineButton>
              <OutlineButton>
                <KeyRound className="h-4 w-4" /> Continue with SSO
              </OutlineButton>
            </div>
          </HoverCard>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/request-demo" className="text-accent hover:underline">
              Request a demo
            </Link>
          </p>
        </motion.div>
      </div>
    </WovenLightHero>
  );
}
