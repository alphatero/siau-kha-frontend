import { IconButton } from '@/components/common';

export const Top = () => {
  const onClick = () => {
    console.log('click');
  };
  return (
      <div className="flex justify-between border-b border-black/10 pb-4">
        <div className="flex space-x-4">
          <IconButton
            containerClasses="w-2 text-black"
            icon="back"
            onClick={onClick}
          />
          <h4 className="text-h5 text-primary">Table A2</h4>
        </div>
        <p className='space-x-2 text-fs-6 text-black/85'>
          <span>人數：4</span>
          <span>時間：2023/03/06 19:20</span>
        </p>
      </div>
  );
};

export default Top;
