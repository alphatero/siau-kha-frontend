import React from 'react';
import clsx from 'clsx';
import { Icons } from './Icons';

type PropsType = {
  containerClasses?: string;
  iconClasses?: string;
  icon: 'edit' | 'delete' | 'plus' | 'minus' | 'search' | 'bill' | 'settlement'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = (props: PropsType) => {
  const { containerClasses, iconClasses, icon } = props;

  const getIcon = (iconType: string, iconClass?: string) => {
    switch (iconType) {
      case 'edit':
        return <Icons.Pencil className={clsx(iconClass)} />;
      case 'delete':
        return <Icons.TrashCan className={clsx(iconClass)} />;
      case 'plus':
        return <Icons.Plus className={clsx(iconClass)} />;
      case 'minus':
        return <Icons.Minus className={clsx(iconClass)} />;
      case 'bill':
        return <Icons.Bill className={clsx(iconClass)} />;
      case 'settlement':
        return <Icons.Settlement className={clsx(iconClass)} />;
      case 'search':
      default:
        return <Icons.Magnifier className={clsx(iconClass)} />;
    }
  };

  return (
    <button className={containerClasses}>
      { getIcon(icon, iconClasses) }
    </button>
  );
};

export default IconButton;
