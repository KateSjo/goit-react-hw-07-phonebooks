import styled from '@emotion/styled';

export const FormStyled = styled.form`
  margin-bottom: 50px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: red;
`;

export const InputStyled = styled.input`
  width: 250px;
  margin-bottom: 45px;
  padding: 10px;
  border: 4px solid green;
  border-radius: 10px;
`;

export const SubmitButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  font-size: 15px;
  font-weight: 700;

  background-color: red;
  border: 4px solid black;
  border-radius: 20px;

  cursor: pointer;

  &:hover {
    color: white;
    border-color: black;
    background-color: green;
  }
`;
