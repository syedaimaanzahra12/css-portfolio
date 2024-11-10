import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;  // children can be any valid JSX element or string
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // optional onClick handler          
  type?: 'button' | 'submit' | 'reset';  // specify valid button types
  className?: string;  // optional additional className
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;