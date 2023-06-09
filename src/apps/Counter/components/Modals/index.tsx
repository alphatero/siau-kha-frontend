import { Modal } from '@/components/common';
import { useModalStore } from '@/stores/modal';
import { useStore } from '../../stores';
import { Reservation } from './Reservation';
import { TableMeal } from './TableMeal';

export const Modals = () => {
  const { triggerModal } = useStore();
  const { isOpen, setIsOpen } = useModalStore();
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {triggerModal === 'reservation' && <Reservation />}
      {triggerModal === 'tableMeal' && <TableMeal />}
    </Modal>
  );
};

export default Modals;
