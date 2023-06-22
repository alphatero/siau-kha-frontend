import { useStore } from '@/apps/Counter/stores';

export const List = () => {
  const { bill: { dataList, total } } = useStore();

  return (

    <div className='flex w-1/2 flex-col justify-between'>

      <table className='w-full table-auto'>
        <thead className='border-b border-primary text-h5 text-black/85'>
          <tr>
            <th className='pb-2 text-center'>#</th>
            <th className='text-left'>品名</th>
            <th className='text-center'>數量</th>
            <th className='text-center'>單價</th>
            <th className='text-center'>金額</th>
          </tr>
        </thead>
        <tbody className='text-fs-6 text-black/85'>
          {
            dataList.map((item, index) => (
              <tr key={index}>
                <td className='py-2 text-center'>{index + 1}</td>
                <td className='text-left'>{item.name}</td>
                <td className='text-center'>{item.quantity}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center'>{item.finalPrice}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
      <div className='flex w-full justify-between border-t border-primary pt-2'>
        <span>
          合計 {dataList.length} 項
        </span>
        <p>
          <span>共</span>
          <span className='ml-2 text-h6 text-warn'>NT$ { total}</span>
        </p>
      </div>
    </div>
  );
};

export default List;
