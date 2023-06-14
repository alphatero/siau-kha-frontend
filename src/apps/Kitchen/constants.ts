import { ProductDetailStatus } from '@/types/kitchen';

export const FilterButton = [
  {
    title: '全部',
    status: ProductDetailStatus.ALL,
  },
  {
    title: '未出菜',
    status: ProductDetailStatus.IN_PROGRESS,
  },
  {
    title: '已出菜',
    status: ProductDetailStatus.FINISH,
  },
];

export default FilterButton;
