import clsx from 'clsx';
import { Icons } from '@/components/common/Icons';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        'fixed left-0 top-0 z-50',
        'h-screen w-screen overflow-y-auto overflow-x-hidden',
        'flex items-center justify-center',
      )}
    >
      <div
        className={clsx('fixed left-0 top-0 h-full w-full', 'bg-black/85')}
      />
      <div
        className={clsx(
          'absolute rounded-md bg-white p-6',
          'flex flex-col',
          'min-h-lg min-w-md',
          'animate-scale-up transition-all duration-200',
        )}
      >
        <button
          className={clsx(
            'absolute right-0 top-0 flex',
            'rounded-full bg-secondary p-3',
            '-translate-y-4 translate-x-4',
          )}
          onClick={onClose}
        >
          <span className="h-[14px] w-[14px] text-white">
            <Icons.Close />
          </span>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
