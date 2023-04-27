import { TextInput, Label, Button } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from '../stores';

type User = {
  email: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>();

  const { setUser } = useStore();

  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log(data);
    setUser(data);
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@email.com"
          {...register('email', { required: true })}
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
