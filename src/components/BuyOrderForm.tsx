import React, { useEffect, useState } from "react";
import {
  PageHeader,
  FormWrapper,
  Title,
  InputGroup,
  RadioGroup,
  Button,
  InputRow,
  StyledLabel,
  StyledInput,
  Message,
} from "../styles/BuyOrderForm.styles";
import type { BuyMode } from "../types/types";
import {
  APP_NAME,
  BUY_ORDER,
  PLACEHOLDERS,
  MESSAGES,
  BUY_MODES,
} from "../constants/buyOrderConstants";

// this is intended to be extended in future to handle the buy order logic as it is not mentioned in the Assessment Document so not enabled the logic.
interface ExtendedBuyOrderFormProps {
  onBuyOrder: (quantity: number) => boolean;
}

const BuyOrderForm = ({}: ExtendedBuyOrderFormProps) => {
  const [mode, setMode] = useState<BuyMode>(BUY_MODES.QUANTITY);
  const [value, setValue] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setValue("");
    setMessage("");
    setIsValid(false);
  }, [mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value === "" || value <= 0) {
      setMessage(MESSAGES.INVALID_VALUE);
      setIsValid(false);
      return;
    }

    setMessage(MESSAGES.SUCCESS);
    setIsValid(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const numVal = Number(val);

    if (val === "") {
      setValue("");
      setMessage("");
      setIsValid(false);
      return;
    }

    if (numVal <= 0) {
      setMessage("Value must be greater than 0");
      setIsValid(false);
    } else {
      setMessage("");
      setIsValid(true);
    }

    setValue(numVal);
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
            <InputRow>
              <StyledLabel htmlFor="buy-value-input">
                {BUY_ORDER.VALUE_LABEL}
              </StyledLabel>
              <StyledInput
                id="buy-value-input"
                type="number"
                placeholder={
                  mode === BUY_MODES.QUANTITY
                    ? PLACEHOLDERS.QUANTITY
                    : PLACEHOLDERS.TOTAL
                }
                value={value}
                onChange={handleChange}
              />
            </InputRow>

            {message && (
              <Message color={isValid ? "green" : "red"}>{message}</Message>
            )}
          </InputGroup>

          {/* Submit enabled only when value > 0 */}
          <Button type="submit" disabled={!isValid}>
            {BUY_ORDER.BUTTON_TEXT}
          </Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default BuyOrderForm;
