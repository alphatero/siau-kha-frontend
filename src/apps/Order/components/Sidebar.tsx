import clsx from 'clsx';
import { Icons } from '@/components/common';
import { Auth } from '@/components/common/Auth';
import { TagType } from '@/types/order';
import { useUpdateProducts } from '../hooks/useUpdateProducts';
import { useStore } from '../stores';

export const Sidebar = () => {
  const { tags } = useUpdateProducts();
  const { setCurrentTag, currentTag, setIsReset } = useStore();

  const onClick = (tag: TagType) => {
    setCurrentTag(tag);
    setIsReset(true);
  };

  return (
    <div className="flex flex-1 flex-col justify-between py-8">
      <ul className="space-y-4 text-h5">
          {tags.map((tag, i) => (
              <li key={i}>
                <button
                  className={clsx(
                    'flex w-full space-x-3 px-4',
                    currentTag.sortNo === tag.sortNo
                      && 'border-r border-secondary text-secondary',
                  )}
                  onClick={() => onClick(tag)}
                >
                  <span className="w-[7px]">
                    <Icons.Fork
                      className={clsx(
                        currentTag.sortNo === tag.sortNo ? 'block' : 'hidden',
                      )}
                    />
                  </span>
                  <span>{tag.name}</span>
                </button>
              </li>))}
      </ul>
      <div className="pl-4">
        <Auth position="left" />
      </div>
    </div>
  );
};

export default Sidebar;
