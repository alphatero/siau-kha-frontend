import clsx from 'clsx';
import { colors, outlineColors } from './constants';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  outline?: boolean;
  icon?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className, outline, icon, color, ...rest } = props;

  let classes = colors[color ?? 'primary'];
  let outlineClasses = outlineColors[color ?? 'primary'];

  return (
    <button
      className={clsx(
        'transition-all duration-200 ',
        outline
          ? `border py-[3px] ${outlineClasses}`
          : `text-white py-1 ${classes}`,
        !icon && 'px-2 rounded-md',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
