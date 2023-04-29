import clsx from 'clsx';
import { Sidebar } from 'flowbite-react';

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

export const Menu = () => {
  return (
    <div className="w-fit border border-black-50 min-h-screen">
      <div
        className={clsx(
          'flex justify-center items-center',
          'h-[60px] border-b border-black-50',
        )}
      >
        <h1>燒角 Siau Kha</h1>
      </div>
      <Sidebar
        className="first:m-0 first:p-0"
        aria-label="Sidebar with logo branding example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {product_tags.map((tag, i) => (
              <Sidebar.Item key={i} href="#">
                {tag.tag_name}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
