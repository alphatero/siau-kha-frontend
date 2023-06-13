import { IconButton } from '@/components/common';
import { useStore } from '@/apps/Counter/stores';

export const Top = () => {
  const { list, selectedTable } = useStore();

  const table = list.find((item) => item.id === selectedTable);

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
        <h4 className="text-h5 text-primary">{table?.name}</h4>
        </div>
        <p className='space-x-2 text-fs-6 text-black/85'>
        <span>人數：{ table?.customer}</span>
        <span>時間：{ table?.time}</span>
        </p>
      </div>
  );
};

export default Top;
