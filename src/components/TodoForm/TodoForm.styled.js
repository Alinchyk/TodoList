import styled from 'styled-components';

export const TodosContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 500px;
  text-align: center;
  height: 100vh;
  background-color: #f0f8ff;
  border-radius: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  padding-top: 40px;
`;
