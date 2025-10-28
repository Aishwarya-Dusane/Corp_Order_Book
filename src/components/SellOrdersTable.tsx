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
          {sellOrders.length > 0 ? (
            sellOrders.map((order) => (
              <tr key={order.submitted}>
                <Td>{order.company}</Td>
                <Td>{order.quantity}</Td>
                <Td>
                  {order.submitted
                    ? new Date(order.submitted).toLocaleString()
                    : "N/A"}
                </Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td colSpan={3}>No sell orders available</Td>
            </tr>
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default SellOrdersTable;
