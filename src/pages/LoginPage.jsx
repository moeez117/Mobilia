import React from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a3c6d] overflow-hidden pt-20">
      {/* --- Background Gradient + Image Overlay --- */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Corporate background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a3c6d]/95 via-[#0a3c6d]/90 to-[#00bfa6]/40" />
      </div>

      {/* --- Decorative Blur Circles --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#00bfa6]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-[#00bfa6]/20 rounded-full blur-3xl" />

      {/* --- Login Container --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/15 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-[0_0_40px_rgba(0,191,166,0.15)] w-[90%] max-w-md mx-auto"
      >
        {/* --- Logo / Header --- */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-extrabold text-white tracking-wide drop-shadow-[0_3px_8px_rgba(0,0,0,0.25)]"
          >
            Welcome Back
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d2e4f5] mt-2 text-sm max-w-xs mx-auto"
          >
            Sign in to continue to your dashboard
          </motion.p>
        </div>

        {/* --- Login Form --- */}
        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#c7d9e8] mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3 w-5 h-5 text-[#00bfa6]" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/10 text-white placeholder-[#a5bdd4] border border-white/20 rounded-xl pl-12 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00bfa6] outline-none transition-all hover:border-[#00bfa6]/40"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-[#c7d9e8] mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-3 w-5 h-5 text-[#00bfa6]" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/10 text-white placeholder-[#a5bdd4] border border-white/20 rounded-xl pl-12 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00bfa6] outline-none transition-all hover:border-[#00bfa6]/40"
              />
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center text-[#c7d9e8] gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#00bfa6] w-4 h-4 rounded"
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-[#00bfa6] hover:text-[#00a892] transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(0,191,166,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#00bfa6] to-[#00a892] text-white py-2.5 rounded-full font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 mt-3"
          >
            Sign In
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-[#c7d9e8] text-sm">or</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-[#c7d9e8] text-sm">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-[#00bfa6] hover:text-[#00a892] font-semibold transition-colors"
            >
              Create one
            </a>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
