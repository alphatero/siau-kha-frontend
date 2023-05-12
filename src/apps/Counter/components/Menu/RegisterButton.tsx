import clsx from 'clsx';
import AddCustomerImg from '@/assets/images/add-customer.png';
import Image from 'next/image';

export const RegisterButton = () => (
  <button
    className={clsx('relative z-10 flex w-[190px]', 'items-center justify-end')}
  >
    <div className="h-8 w-5/6 justify-self-end rounded-md bg-primary" />
    <div className="absolute flex w-full items-center space-x-2">
      <div className="rounded-full border border-primary bg-white p-2">
        <Image src={AddCustomerImg} alt="Add Customer" />
      </div>
      <div className="rounded-md bg-primary py-1">
        <h5 className="flex items-center space-x-2 text-h5 text-white">
          登記候位
        </h5>
      </div>
    </div>
  </button>
);

export default RegisterButton;
