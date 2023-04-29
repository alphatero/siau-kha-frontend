import clsx from 'clsx';
import { colors, outlineColors } from './constants';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  outline?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className, outline, color, ...rest } = props;

  let classes = colors[color ?? 'primary'];
  let outlineClasses = outlineColors[color ?? 'primary'];

  return (
    <button
      className={clsx(
        'py-1 px-2 rounded-md',
        'transition-all duration-200',
        outline ? `border ${outlineClasses}` : `text-white ${classes}`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
