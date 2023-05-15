import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IconButton } from '@/components/common/IconButton';

type PropsType = {
  placeholder: string;
};

type SearchText = {
  content: string;
};

export const SearchBar = (props: PropsType) => {
  const { placeholder } = props;
  const {
    register,
    handleSubmit,
  } = useForm<SearchText>();

  const onSubmit: SubmitHandler<SearchText> = (data: SearchText) => {
    console.log(data);
  };

  return (
    <form
      className={clsx(
        'flex flex-row justify-between',
        'h-12 w-full px-4',
        'rounded-lg border border-black/10 bg-white',
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        id="searchBar"
        type="text"
        className='flex-1 border-none px-0 py-3 focus:ring-transparent'
        placeholder={placeholder}
        {...register('content', { required: false })}
      />
      <IconButton
        containerClasses='h-full w-7'
        icon='search'
      />
    </form>
  );
};

export default SearchBar;
