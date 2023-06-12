import { Button } from '@/components/common';

type Props = {
  text: string
  onClick: () => void
}

export const CalButton = (props: Props) => {
  const { text, onClick } = props;

  return (
    <Button
      className='w-full py-2'
      color='primary'
      outline
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CalButton;
