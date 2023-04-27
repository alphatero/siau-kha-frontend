import { TextInput, Label, Button } from 'flowbite-react';

export const Form = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" type="password" required={true} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
