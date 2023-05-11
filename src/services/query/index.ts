import { useQuery } from '@tanstack/react-query';
import { queries } from './queries/order';

export const useTable = () => useQuery(queries.table());

export default useTable;
