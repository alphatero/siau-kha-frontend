import { TextInput, Label, Button } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLogin } from '@/services/mutation';
import { Loading } from '@/components/common/Loading';
import { useRouter } from 'next/router';
import type { User } from '@/types/User';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<User>();

  const router = useRouter();

  const { mutateAsync, isLoading, data: loginData } = useLogin();

  const onSubmit: SubmitHandler<User> = async (data: User) => {
    const { status } = await mutateAsync(data);

    if (status === 'success') {
      router.push('/order');
    }

    if (status === 'error') {
      alert('登入失敗');
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput
          id="name"
          type="name"
          placeholder="name"
          {...register('username', { required: true })}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
      </div>
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>

      {isLoading && <Loading />}
    </form>
  );
};

export default Form;
