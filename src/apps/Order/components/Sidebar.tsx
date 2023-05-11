import clsx from 'clsx';
import { Icons } from '@/components/common';
import { useState } from 'react';
import { Auth } from '../../../components/common/Auth';

const productTags = [
  {
    tag_name: '套餐',
  },
  {
    tag_name: '肉品',
  },
  {
    tag_name: '沙拉',
  },
];

export const Sidebar = () => {
  const [currentTag, setCurrentTag] = useState(productTags[0].tag_name);

  const onClick = (tag: string) => {
    setCurrentTag(tag);
  };

  return (
    <>
      <ul className="space-y-4 py-8 text-h5">
        {productTags.map((tag, i) => (
          <li key={i}>
            <button
              className={clsx(
                'flex w-full space-x-3 px-4',
                currentTag === tag.tag_name
                  && 'border-r border-secondary text-secondary',
              )}
              onClick={() => onClick(tag.tag_name)}
            >
              <span className="w-[7px]">
                <Icons.Fork
                  className={clsx(
                    currentTag === tag.tag_name ? 'block' : 'hidden',
                  )}
                />
              </span>
              <span>{tag.tag_name}</span>
            </button>
          </li>
        ))}
      </ul>

      <Auth />
    </>
  );
};

export default Sidebar;
