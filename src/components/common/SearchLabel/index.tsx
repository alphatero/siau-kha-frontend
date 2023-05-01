import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Icons } from '../Icons';

type PropsType = {
  placeholder: string;
};

type SearchText = {
  content: string;
};

export const SearchLabel = (props: PropsType) => {
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
        id="searchLabel"
        type="text"
        className='border-none px-0 py-3 focus:ring-transparent'
        placeholder={placeholder}
        {...register('content', { required: false })}
      />
      <button className='h-full w-7'>
        <Icons.Magnifier />
      </button>
    </form>
  );
};

export default SearchLabel;
