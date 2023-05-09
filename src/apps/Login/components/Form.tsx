import { TextInput, Label, Button } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { Loading } from '@/components/common/Loading';
import type { User } from '@/types/User';
import { useAuth } from '../hooks/useAuth';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<User>();

  const { onSubmit, isLoading, error } = useAuth();

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

      {error && (
        <div className="text-sm text-red-500">帳號或密碼錯誤，請重新輸入</div>
      )}
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>

      {isLoading && <Loading />}
    </form>
  );
};

export default Form;
