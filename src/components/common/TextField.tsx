import { forwardRef, ForwardedRef } from 'react';

type TextFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, ...rest } = props;
  return (
    <div className="flex flex-col space-y-2">
      <label>{label}</label>
      <input type="text"
      ref={ref}
        {...rest} className='rounded-md border border-black/10' />
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;
