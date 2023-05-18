import clsx from 'clsx';
import { Icons } from '@/components/common';
import { useState } from 'react';
import { Auth } from '@/components/common/Auth';
import { useProducts } from '../hooks/useUpdateProducts';

export const Sidebar = () => {
  const { isLoading, tags } = useProducts();
  const [currentTag, setCurrentTag] = useState(tags[0].name);

  const onClick = (tag: string) => {
    setCurrentTag(tag);
  };

  return (
    <div className="flex flex-1 flex-col justify-between py-8">
      <ul className="space-y-4 text-h5">
          {isLoading ? <></>
            : tags?.map((tag, i) => (
              <li key={i}>
                <button
                  className={clsx(
                    'flex w-full space-x-3 px-4',
                    currentTag === tag.name
                      && 'border-r border-secondary text-secondary',
                  )}
                  onClick={() => onClick(tag.name)}
                >
                  <span className="w-[7px]">
                    <Icons.Fork
                      className={clsx(
                        currentTag === tag.name ? 'block' : 'hidden',
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
