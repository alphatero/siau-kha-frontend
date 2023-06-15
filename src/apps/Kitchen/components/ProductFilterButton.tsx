import clsx from 'clsx';

type Props = {
  title: string,
  quantity: number,
  active: boolean,
  onClick: () => void,
};

export const ProductFilterButton = (props: Props) => {
  const {
    title,
    quantity,
    active,
    onClick,
  } = props;

  return (
    <button className={clsx(
      'rounded-full px-2 py-1',
      active ? 'border border-primary bg-primary text-white' : 'border border-primary bg-white text-primary',
    )}
      onClick={() => onClick()}
    >
      <span className="text-fs-6">{`${title}(${quantity})`}</span>
    </button>
  );
};

export default ProductFilterButton;
