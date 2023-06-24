import { Top } from './Top';
import { List } from './List';
import { CountSide } from './CountSide';

export const Calculator = () => (
  <div className="flex h-full w-[800px] flex-1 flex-col space-y-6">
    <Top />

    <div className="flex h-full flex-1 gap-x-6 px-9">
      <List />

        <CountSide />
    </div>
  </div>
);

export default Calculator;
