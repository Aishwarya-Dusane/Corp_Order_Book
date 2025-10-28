import {
  TableWrapper,
  Title,
  Table,
  Th,
  Td,
} from "../styles/SellOrdersTable.styles";
import type { SellOrder } from "../types/types";
import { SELL_ORDERS } from "../constants/sellOrderConstants";

interface SellOrdersTableProps {
  sellOrders: SellOrder[];
}

const SellOrdersTable = ({ sellOrders }: SellOrdersTableProps) => {
  const sortedOrders = [...sellOrders].sort(
    (a, b) => new Date(a.submitted).getTime() - new Date(b.submitted).getTime()
  );

  return (
    <TableWrapper>
      <Title>{SELL_ORDERS.TITLE}</Title>
      <Table>
        <thead>
          <tr>
            <Th>{SELL_ORDERS.HEADERS.COMPANY}</Th>
            <Th>{SELL_ORDERS.HEADERS.QUANTITY}</Th>
            <Th>{SELL_ORDERS.HEADERS.SUBMITTED}</Th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order, index) => (
            <tr key={index}>
              <Td>{order.company}</Td>
              <Td>{order.quantity}</Td>
              <Td>{new Date(order.submitted).toLocaleString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default SellOrdersTable;
