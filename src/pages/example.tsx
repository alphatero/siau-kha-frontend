import { useState } from 'react';
import clsx from 'clsx';
import { Dropdown } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Example() {
  // React hook example
  const [isRed, setIsRed] = useState(false);
  const handleClick = () => {
    setIsRed(!isRed);
  };

  // React hook form example
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  // React query example
  const getTodos = async () => {
    const response = [
      {
        userId: 1,
        id: 1,
        title: 'response title 01',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'response title 02',
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: 'response title 03',
        completed: false,
      },
    ];
    return response;
  };

  const postTodo = async (todo: any) => {
    console.log('postTodo', todo);
  };

  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <div>
      <h2 className='text-lg'>Example page</h2>
      <p className={clsx(
        'font-bold text-blue-500',
        isRed && 'text-red-500',
      )}>
        測試 clsx 運行的字串
      </p>

      <button
        className={clsx(
          'rounded px-4 py-2 font-bold',
          'bg-blue-500 hover:bg-blue-700 active:bg-red-400',
          'text-white active:text-black',
        )}
        onClick={() => handleClick()}
      >
        switch color
      </button>

      <h2 className='mt-2 text-lg'>Flowbite example</h2>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>

      <h2 className='mt-2 text-lg'>React hook form example</h2>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form className='bg-blue-400 p-2' onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className='cursor-pointer' type="submit" />
      </form>

      <h2 className='mt-2 text-lg'>React query example</h2>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
