import clsx from 'clsx';
import { Icons } from '@/components/common';
import { useState } from 'react';

const product_tags = [
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
  const [currentTag, setCurrentTag] = useState(product_tags[0].tag_name);

  const onClick = (tag: string) => {
    setCurrentTag(tag);
  };

  return (
    <ul className="text-h5 py-8 space-y-4">
      {product_tags.map((tag, i) => (
        <li key={i}>
          <button
            className={clsx(
              'flex space-x-3 px-4 w-full',
              currentTag === tag.tag_name &&
                'text-secondary border-r border-secondary',
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
  );
};
