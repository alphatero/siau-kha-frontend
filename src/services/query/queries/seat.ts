import * as api from '../api/seat';

export const seat = {
  getReservation: {
    queryKey: ['getReservation'],
    queryFn: api.getReservation,
  },
};

export default seat;
