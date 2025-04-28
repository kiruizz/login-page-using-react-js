import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, UserIcon, LockIcon, MailIcon } from 'lucide-react';
import { Logo } from './Logo';
export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const togglePasswordVisibility = (field: 'password' | 'confirm') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication or registration
    console.log(isLogin ? 'Login submitted' : 'Registration submitted');
  };
  const validatePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    setPasswordMatch(password === confirmPassword);
  };
  return <div className="flex min-h-screen w-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-gradient-x">
      <div className="relative w-full max-w-md m-auto">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-lg transform rotate-3 transition-transform duration-300"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          <div className="px-6 py-8 opacity-0 animate-fade-in">
            <div className="flex justify-center mb-8 transform hover:scale-105 transition-transform duration-300">
              <Logo />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 animate-slide-up">
              {isLogin ? 'Welcome back' : 'Create Account'}
            </h2>
            <p className="text-center text-gray-600 mb-8 animate-slide-up delay-100">
              {isLogin ? 'Sign in to your kiruiz account' : 'Join the kiruiz community'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && <div className="transform transition-all duration-300 hover:translate-x-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon size={18} className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                    </div>
                    <input id="name" name="name" type="text" required className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300" placeholder="John Doe" />
                  </div>
                </div>}
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon size={18} className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                  </div>
                  <input id="email" name="email" type="email" required className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300" placeholder="name@company.com" />
                </div>
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  {isLogin && <a href="#" className="text-sm text-purple-600 hover:text-purple-500 transition-colors duration-300">
                      Forgot password?
                    </a>}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon size={18} className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                  </div>
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} required className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300" placeholder="••••••••" onChange={e => {
                  if (!isLogin) {
                    const confirm = document.getElementById('confirm-password') as HTMLInputElement;
                    if (confirm.value) {
                      setPasswordMatch(e.target.value === confirm.value);
                    }
                  }
                }} />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => togglePasswordVisibility('password')}>
                    {showPassword ? <EyeOffIcon size={18} className="text-gray-400 hover:text-purple-500 transition-colors duration-300" /> : <EyeIcon size={18} className="text-gray-400 hover:text-purple-500 transition-colors duration-300" />}
                  </div>
                </div>
              </div>
              {!isLogin && <div className="transform transition-all duration-300 hover:translate-x-1">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon size={18} className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                    </div>
                    <input id="confirm-password" name="confirm-password" type={showConfirmPassword ? 'text' : 'password'} required className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 hover:border-purple-300 ${passwordMatch ? 'border-gray-300 focus:ring-purple-500 focus:border-purple-500' : 'border-red-500 focus:ring-red-500 focus:border-red-500'}`} placeholder="••••••••" onChange={validatePasswords} />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => togglePasswordVisibility('confirm')}>
                      {showConfirmPassword ? <EyeOffIcon size={18} className="text-gray-400 hover:text-purple-500 transition-colors duration-300" /> : <EyeIcon size={18} className="text-gray-400 hover:text-purple-500 transition-colors duration-300" />}
                    </div>
                  </div>
                  {!passwordMatch && <p className="mt-1 text-sm text-red-500">
                      Passwords do not match
                    </p>}
                </div>}
              {isLogin && <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-colors duration-300" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {isLogin ? 'Sign in' : 'Create Account'}
              </button>
            </form>
            <p className="mt-8 text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-300">
                {isLogin ? 'Create account' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>;
}