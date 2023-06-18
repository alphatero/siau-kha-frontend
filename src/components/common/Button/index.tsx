import clsx from 'clsx';
import React from 'react';
import { colors, outlineColors } from './constants';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  outline?: boolean;
  icon?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const {
    children, className, outline, icon, color, ...rest
  } = props;

  const classes = colors[color ?? 'primary'];
  const outlineClasses = outlineColors[color ?? 'primary'];

  return (
    <button
      className={clsx(
        'transition-all duration-200 ',
        outline
          ? `border bg-white py-[3px] ${outlineClasses}`
          : `py-1 text-white ${classes}`,
        !icon && 'rounded-md px-2',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
