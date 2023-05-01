import styled from "styled-components";

const Wrapper = styled.article`
  padding: ${({ theme }) => `${theme.ratio(10, 32, "mobileS")} ${theme.ratio(10, 40, "mobileS")}`};
  border: 1px solid #b8b8b8;
  border-radius: 20px;
  margin-bottom: ${({ theme }) => theme.ratio(20, 44, "mobileS")};

  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h5`
  font-weight: 600;
  font-size: 22px;

  color: ${({ theme }) => theme.color.blue};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.ratio(16, 4, "mobileS")};

  color: #4f4f4f;
`;

export { Wrapper, Title, Text };
