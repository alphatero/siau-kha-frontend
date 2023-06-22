import { Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';
import { Reservation } from './Reservation';
import { TableMeal } from './TableMeal';
import { ReservationMeal } from './ReservationMeal';
import { Calculator } from './Calculator';
import { SelectTable } from './SelectTable';

export const Modals = () => {
  const { triggerModal } = useStore();
  const { isOpen, setIsOpen } = useModalStore();

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {triggerModal === 'reservation' && <Reservation />}
      {triggerModal === 'tableMeal' && <TableMeal />}
      {triggerModal === 'reservationMeal' && <ReservationMeal />}
      {triggerModal === 'calculate' && <Calculator />}
      {triggerModal === 'selectTable' && <SelectTable />}
    </Modal>
  );
};

export default Modals;
