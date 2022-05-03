import * as Styled from "./styled";

const Control = ({ url, setImageUrl, title }) => {
  const changeImageHandler = () => setImageUrl(url);

  return (
    <Styled.Control
      url={url}
      onClick={changeImageHandler}>
      <Styled.Image
        src={url}
        alt={title}
        loading='lazy'
      />
    </Styled.Control>
  );
};

export { Control };
