import styled from "styled-components";

export const PageHeader = styled.header`
  width: 100%;
  text-align: center;
  background: #9ea1a3ff;
  color: white;
  padding: 1rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 2rem;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const FormWrapper = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  input[type="number"] {
    width: 160px;
    padding: 0.4rem;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: 500;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0.6rem 1.2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #cccccc;
    color: #666666;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
export const Message = styled.p<{ color?: string }>`
  text-align: center;
  color: ${(props) => props.color || "green"};
  margin-top: 1rem;
  font-weight: 500;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledLabel = styled.label`
  min-width: 80px;
  font-weight: 500;
  color: #213547;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.4);
  }

  &:invalid {
    border-color: #ff4d4f;
  }

  &[disabled] {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;
