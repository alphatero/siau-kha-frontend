export const List = () => (
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
          <tr>
            <td className='py-2 text-center'>1</td>
            <td className='text-left'>A5 日本和牛套餐</td>
            <td className='text-center'>1</td>
            <td className='text-center'>5,680</td>
            <td className='text-center'>5,680</td>
          </tr>
          <tr>
            <td className='py-2 text-center'>2</td>
            <td className='text-left'>巨干貝</td>
            <td className='text-center'>2</td>
            <td className='text-center'>160</td>
            <td className='text-center'>320</td>
          </tr>
          <tr>
            <td className='py-2 text-center'>3</td>
            <td className='text-left'>燒角認證米</td>
            <td className='text-center'>4</td>
            <td className='text-center'>20</td>
            <td className='text-center'>80</td>
          </tr>

        </tbody>
      </table>
      <div className='flex w-full justify-between border-t border-primary pt-2'>
        <span>
          合計 3 項
        </span>
        <p>
          <span>共</span>
          <span className='ml-2 text-h6 text-warn'>NT$ 6,080</span>
        </p>
      </div>
    </div>
);

export default List;
