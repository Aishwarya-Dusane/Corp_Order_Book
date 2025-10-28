import { useMemo, useState } from "react";
import BuyOrderForm from "./components/BuyOrderForm";
import SellOrdersTable from "./components/SellOrdersTable";
import type { SellOrder } from "./types/types";
import { AppContainer } from "./styles/App.styles";
import {
  INITIAL_SELL_ORDERS,
  MESSAGE_CONSTANTS,
} from "./constants/appConstants";

function App() {
  // Memoize sorted initial sell orders
  const sortedInitialOrders = useMemo(() => {
    return [...INITIAL_SELL_ORDERS].sort(
      (a, b) =>
        new Date(a.submitted).getTime() - new Date(b.submitted).getTime()
    );
  }, []);

  const [sellOrders, setSellOrders] =
    useState<SellOrder[]>(sortedInitialOrders);

  // this is intended to be extended in future to handle the buy order logic as it is not mentioned in the Assesment Document so not enabled the logic.
  const handleBuyOrder = (quantity: number): boolean => {
    const totalAvailable = sellOrders.reduce(
      (sum, order) => sum + order.quantity,
      0
    );
    // it should be sorted as per time
    if (quantity > totalAvailable) {
      alert(MESSAGE_CONSTANTS.ERROR.INSUFFICIENT_SHARES(totalAvailable));
      return false;
    }
    let remaining = quantity;
    const updatedOrders = sellOrders.map((order) => {
      if (remaining === 0) return order;

      if (order.quantity >= remaining) {
        const newQuantity = order.quantity - remaining;
        remaining = 0;
        return { ...order, quantity: newQuantity };
      } else {
        remaining -= order.quantity;
        return { ...order, quantity: 0 };
      }
    });

    setSellOrders(updatedOrders);
    return true;
  };

  return (
    <AppContainer>
      <BuyOrderForm onBuyOrder={handleBuyOrder} />
      <SellOrdersTable sellOrders={sellOrders} />
    </AppContainer>
  );
}

export default App;
