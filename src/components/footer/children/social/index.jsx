import React from "react";

import googleIcon from "assets/icons/google.svg";
import facebookIcon from "assets/icons/facebook.svg";
import whatsappIcon from "assets/icons/whatsapp.svg";

import * as Styled from "./styled";

const Social = () => {
  return (
    <Styled.SocialContainer>
      <a href={`mailto:?body="${window.location.href}`}>
        <img
          src={googleIcon}
          alt='Google icon'
          width='25'
          height='24'
          loading='lazy'
        />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
        <img
          src={facebookIcon}
          alt='Facebook icon'
          height='24'
          width='25'
          loading='lazy'
        />
      </a>
      <a href={`whatsapp://send?text=${window.location.href}`}>
        <img
          width='25'
          height='24'
          src={whatsappIcon}
          alt='Whatsapp icon'
          loading='lazy'
        />
      </a>
    </Styled.SocialContainer>
  );
};

export { Social };
