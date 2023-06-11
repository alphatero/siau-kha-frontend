import clsx from 'clsx';

type Props = {
  title: string,
  quantity: number,
  active: boolean
};

export const ProductFilterButton = (props: Props) => {
  const {
    title,
    quantity,
    active,
  } = props;

  return (
    <button className={clsx(
      'rounded-full px-2 py-1 hover:bg-primary/80 hover:text-white',
      active ? 'border border-primary bg-primary text-white' : 'border border-primary bg-white text-primary',
    )}
    >
      <span className="text-fs-6">{`${title}(${quantity})`}</span>
    </button>
  );
};

export default ProductFilterButton;
