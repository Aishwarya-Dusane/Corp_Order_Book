// src/constants/appConstants.ts

export const APP_CONSTANTS = {
  NAME: "XYZ Order Book",
  PRICE_PER_UNIT: 3.98,
};

export const INITIAL_SELL_ORDERS = [
  { company: "Corp A", quantity: 50, submitted: "2025-10-22T14:05:00Z" },
  { company: "Corp B", quantity: 200, submitted: "2025-10-22T14:10:00Z" },
  { company: "Corp C", quantity: 100, submitted: "2025-10-22T14:03:00Z" },
];

export const MESSAGE_CONSTANTS = {
  ERROR: {
    INSUFFICIENT_SHARES: (totalAvailable: number) =>
      `Not enough shares available. You can buy up to ${totalAvailable} shares only.`,
  },
};
