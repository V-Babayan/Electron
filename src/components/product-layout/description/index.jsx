import * as Styled from "./styled";

const Description = ({ description }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Description</Styled.Title>
      <Styled.Text>{description}</Styled.Text>
    </Styled.Wrapper>
  );
};

export { Description };
