'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: '',
    role: '',
    company: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const avatarColors = [
    'from-orange-400 to-gray-900',
    'from-blue-400 to-violet-500',
    'from-green-400 to-cyan-500',
    'from-purple-400 to-gray-900',
    'from-yellow-400 to-orange-500',
    'from-rose-400 to-red-500',
  ];

  const roles = [
    { id: 'founder', label: 'Founder / Entrepreneur', icon: '🚀' },
    { id: 'designer', label: 'Designer', icon: '🎨' },
    { id: 'developer', label: 'Developer', icon: '💻' },
    { id: 'marketer', label: 'Marketer', icon: '📈' },
    { id: 'product', label: 'Product Manager', icon: '📋' },
    { id: 'other', label: 'Other', icon: '✨' },
  ];

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('AppNode_users') || '[]');
    if (users.some((u: { email: string }) => u.email === formData.email)) {
      setError('An account with this email already exists');
      return;
    }

    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.avatar) {
      setError('Please select an avatar color');
      return;
    }
    setStep(3);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.role) {
      setError('Please select your role');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Save user to localStorage
    const users = JSON.parse(localStorage.getItem('AppNode_users') || '[]');
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      avatar: formData.avatar,
      role: formData.role,
      company: formData.company,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem('AppNode_users', JSON.stringify(users));

    // Set as current user
    localStorage.setItem('AppNode_current_user', JSON.stringify(newUser));

    setIsLoading(false);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc] dark:bg-black transition-colors">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-black dark:bg-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white dark:bg-black rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white dark:bg-black rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white dark:text-black">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Start building today</h2>
            <p className="text-lg text-white/80 dark:text-black/70">
              Create your free account and start building amazing applications with AI in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>2 free generations to start</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Full access to all templates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
              <svg className="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">AppNode</span>
          </Link>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s 
                      ? 'bg-black dark:bg-white text-white dark:text-black' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {step > s ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : s}
                </div>
                {s < 3 && (
                  <div className={`w-12 h-1 mx-2 rounded ${step > s ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                )}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Step 1: Account Details */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create your account</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Start building amazing apps with AI</p>

              <form onSubmit={handleStep1Submit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-90 transition-all shadow-lg"
                >
                  Continue
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  Log in
                </Link>
              </p>
            </>
          )}

          {/* Step 2: Choose Avatar */}
          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Personalize your profile</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Choose an avatar color that represents you</p>

              <form onSubmit={handleStep2Submit} className="space-y-6">
                <div className="flex justify-center mb-8">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${formData.avatar || 'from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800'} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                    {formData.name.charAt(0).toUpperCase()}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {avatarColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormData({ ...formData, avatar: color })}
                      className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-2xl font-bold transition-all hover:scale-105 ${
                        formData.avatar === color ? 'ring-4 ring-black dark:ring-white ring-offset-2 dark:ring-offset-black' : ''
                      }`}
                    >
                      {formData.name.charAt(0).toUpperCase()}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-90 transition-all shadow-lg"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Step 3: Role Selection */}
          {step === 3 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tell us about yourself</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">This helps us personalize your experience</p>

              <form onSubmit={handleFinalSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    What best describes your role?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, role: role.id })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.role === role.id
                            ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{role.icon}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{role.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Company name <span className="text-gray-400 dark:text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Acme Inc."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 py-3 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      'Create account'
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                By creating an account, you agree to our{' '}
                <Link href="/terms" className="text-gray-900 dark:text-white hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-gray-900 dark:text-white hover:underline">Privacy Policy</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
