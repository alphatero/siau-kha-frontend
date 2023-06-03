import clsx from 'clsx';
import { ProductFilterButton } from './ProductFilterButton';
import { Product } from './Product';

type Props = {
  tableName: string;
};

export const TableOrder = (props: Props) => {
  const {
    tableName,
  } = props;

  const productList = [
    {
      id: '1',
      product_name: 'A5 日本和牛套餐',
      note: '瘦肉多一點',
      status: 'IN_PROGRESS',
      is_delete: false,
      is_alert: true,
    },
    {
      id: '2',
      product_name: '燒角精選飲品',
      note: '少冰',
      status: 'IN_PROGRESS',
      is_delete: false,
      is_alert: false,
    },
    {
      id: '3',
      product_name: '安格斯牛小排',
      status: 'FINISH',
      is_delete: false,
      is_alert: false,
    },
  ];

  return (
    <div
      className={clsx(
        'flex max-h-[75vh] w-full flex-col',
        'rounded-md border border-black/10 bg-white',
      )}
    >
      <div className='border-b border-black/10 px-6 pb-4 pt-6'>
        <h5 className="text-h5">{tableName}</h5>
      </div>

      <ul className='flex gap-[10px] px-6 pb-4 pt-6'>
        <li>
          <ProductFilterButton title='全部' active={true} quantity={8} />
        </li>
        <li>
          <ProductFilterButton title='未出菜' active={false} quantity={2} />
        </li>
        <li>
          <ProductFilterButton title='已出菜' active={false} quantity={6} />
        </li>
      </ul>

      <ul className={clsx(
        'mx-6 mb-6 overflow-y-auto',
        'flex flex-row flex-wrap gap-y-4',
      )}>
        {
          productList?.map((product) => (
            <li key={product.id} className='w-full'>
              <Product productName={product.product_name} note={product.note} status={product.status} isAlert={product.is_alert} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TableOrder;
