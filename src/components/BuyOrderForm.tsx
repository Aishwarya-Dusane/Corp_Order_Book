import React, { useEffect, useState } from "react";
import {
  PageHeader,
  FormWrapper,
  Title,
  InputGroup,
  RadioGroup,
  Button,
  Message,
} from "../styles/BuyOrderForm.styles";
import type { BuyMode, BuyOrderFormProps } from "../types/types";
import {
  APP_NAME,
  BUY_ORDER,
  PLACEHOLDERS,
  MESSAGES,
  BUY_MODES,
} from "../constants/buyOrderConstants";

interface ExtendedBuyOrderFormProps extends BuyOrderFormProps {
  onBuyOrder: (quantity: number) => boolean;
}

const BuyOrderForm = ({}: ExtendedBuyOrderFormProps) => {
  const [mode, setMode] = useState<BuyMode>(BUY_MODES.QUANTITY);
  const [value, setValue] = useState<number | "">("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setValue("");
    setMessage("");
  }, [mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value === "" || value <= 0) {
      setMessage(MESSAGES.INVALID_VALUE);
      return;
    } else {
      setMessage(MESSAGES.SUCCESS);
    }
  };

  return (
    <>
      <PageHeader>
        <h1>{APP_NAME}</h1>
      </PageHeader>

      <FormWrapper>
        <Title>{BUY_ORDER.TITLE}</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <RadioGroup>
              <span>{BUY_ORDER.BUY_BY_LABEL}</span>
              <label>
                <input
                  type="radio"
                  name="buyMode"
                  value={BUY_MODES.QUANTITY}
                  checked={mode === BUY_MODES.QUANTITY}
                  onChange={() => setMode(BUY_MODES.QUANTITY)}
                />
                {BUY_ORDER.QUANTITY_LABEL}
              </label>
              <label>
                <input
                  type="radio"
                  name="buyMode"
                  value={BUY_MODES.TOTAL}
                  checked={mode === BUY_MODES.TOTAL}
                  onChange={() => setMode(BUY_MODES.TOTAL)}
                />
                {BUY_ORDER.TOTAL_COST_LABEL}
              </label>
            </RadioGroup>

            <label>
              {BUY_ORDER.VALUE_LABEL}{" "}
              <input
                type="number"
                placeholder={
                  mode === BUY_MODES.QUANTITY
                    ? PLACEHOLDERS.QUANTITY
                    : PLACEHOLDERS.TOTAL
                }
                value={value}
                onChange={(e) => {
                  const val = e.target.value;
                  setValue(val === "" ? "" : Number(val));
                  setMessage("");
                }}
              />
            </label>
          </InputGroup>

          <Button type="submit">{BUY_ORDER.BUTTON_TEXT}</Button>
        </form>

        {message && <Message>{message}</Message>}
      </FormWrapper>
    </>
  );
};

export default BuyOrderForm;
