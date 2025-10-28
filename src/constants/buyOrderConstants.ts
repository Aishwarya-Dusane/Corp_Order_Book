export const APP_NAME = "XYZ Order Book";

export const BUY_ORDER = {
  TITLE: "Place Buy Order",
  BUTTON_TEXT: "Submit Buy Order",
  BUY_BY_LABEL: "Buy by:",
  QUANTITY_LABEL: "Quantity",
  TOTAL_COST_LABEL: "Total Cost",
  VALUE_LABEL: "Value:",
};

export const PLACEHOLDERS = {
  QUANTITY: "Quantity",
  TOTAL: "Total (£)",
};

export const BUY_MODES = {
  QUANTITY: "quantity",
  TOTAL: "total",
} as const;

export const MESSAGES = {
  INVALID_VALUE: "Please enter a positive value.",
  SUCCESS: "Your order is successfully placed.",
};

// Numeric constants
export const DEFAULT_PRICE_PER_UNIT = 3.98;

// Messages
export const ERROR_MESSAGES = {
  INVALID_VALUE: "Please enter a positive value.",
  INSUFFICIENT_SHARES: (max: number) =>
    `Not enough shares available. You can buy up to ${max} shares only.`,
};

// URLs or paths
export const ROUTES = {
  HOME: "/",
  ORDERS: "/orders",
};