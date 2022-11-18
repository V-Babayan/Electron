import styled from "styled-components";

const InfoContainer = styled.div`
  height: calc(37% - 10px);

  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 10px;
`;

const Title = styled.h5`
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: auto;
`;

const Price = styled.div`
  font-weight: 600;
  color: #4a4a4a;
`;

export { InfoContainer, Title, Price };
