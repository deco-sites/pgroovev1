import { h } from 'preact';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ text, onClick, variant = 'primary', size = 'md' }: ButtonProps) => {
  const baseClasses = "btn capitalize transition-transform duration-250";
  const sizeClasses = size === 'sm' ? 'btn-xs' : size === 'lg' ? 'btn-lg' : 'btn-sm';
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primaryDark",

