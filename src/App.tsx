import { useState } from "react";
import BuyOrderForm from "./components/BuyOrderForm";
import SellOrdersTable from "./components/SellOrdersTable";
import type { SellOrder } from "./types/types";
import { AppContainer } from "./styles/App.styles";
import {
  APP_CONSTANTS,
  INITIAL_SELL_ORDERS,
  MESSAGE_CONSTANTS,
} from "./constants/appConstants";

function App() {
  const [sellOrders, setSellOrders] =
    useState<SellOrder[]>(INITIAL_SELL_ORDERS);

  const handleBuyOrder = (quantity: number): boolean => {
    const totalAvailable = sellOrders.reduce(
      (sum, order) => sum + order.quantity,
      0
    );

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
      <BuyOrderForm
        pricePerUnit={APP_CONSTANTS.PRICE_PER_UNIT}
        onBuyOrder={handleBuyOrder}
      />
      <SellOrdersTable sellOrders={sellOrders} />
    </AppContainer>
  );
}

export default App;
