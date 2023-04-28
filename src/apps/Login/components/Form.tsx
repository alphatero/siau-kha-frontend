import { TextInput, Label, Button } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from '../stores';

type User = {
  name: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<User>();

  const { setIsLoading } = useStore();

  const onSubmit: SubmitHandler<User> = (data: User) => {
    setIsLoading(true);
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
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
          {...register('name', { required: true })}
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
    </form>
  );
};
