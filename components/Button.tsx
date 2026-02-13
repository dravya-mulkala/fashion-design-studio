import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-violet-700 focus-visible:outline-accent'
      : 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 focus-visible:outline-slate-400';

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
