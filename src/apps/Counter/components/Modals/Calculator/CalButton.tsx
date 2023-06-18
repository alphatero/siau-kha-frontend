import { Button } from '@/components/common';

type Props = {
  text?: string
  onClick: () => void
  children?: React.ReactNode
}

export const CalButton = (props: Props) => {
  const { text, onClick, children } = props;

  return (
    <Button
      className='w-full'
      color='primary'
      outline
      onClick={onClick}
    >
      {text}

      {children}
    </Button>
  );
};

export default CalButton;
