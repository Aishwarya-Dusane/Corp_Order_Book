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
`;

export const Message = styled.p`
  text-align: center;
  color: green;
  margin-top: 1rem;
`;
