import React from "react";

import { FacebookIcon, GoogleIcon, WhatsappIcon } from "~/assets/icons";

import * as Styled from "./styled";

const GOOGLE_EMAIL_URL = `mailto:?body="${window.location.href}`;
const FACEBOOK_SHARE_URL = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
const WHATSAPP_SEND_URL = `whatsapp://send?text=${window.location.href}`;

const Social = () => {
  return (
    <Styled.SocialContainer>
      <a href={GOOGLE_EMAIL_URL} aria-label="Google">
        <GoogleIcon width="25" height="24" loading="lazy" />
      </a>
      <a href={FACEBOOK_SHARE_URL} aria-label="Facebook">
        <FacebookIcon height="24" width="25" loading="lazy" />
      </a>
      <a href={WHATSAPP_SEND_URL} aria-label="WhatsApp">
        <WhatsappIcon width="25" height="24" loading="lazy" />
      </a>
    </Styled.SocialContainer>
  );
};

export { Social };
