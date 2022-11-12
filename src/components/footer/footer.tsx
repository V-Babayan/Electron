import React from "react";
import { Link } from "react-router-dom";

import { HeadphonesIcon } from "~/assets/icons";

import { Logo } from "../core-ui";
import { Form, Social } from "./children";

import * as Styled from "./styled";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterTop>
        <h5>Subscribe newsletter</h5>
        <div>
          <Form />
          <Styled.ContactBlock>
            <HeadphonesIcon loading="lazy" height="41" width="41" />
            <div>
              <div>Call us 24/7:</div>
              <a href="tel:(+62) 0123 567 789">(+62) 0123 567 789</a>
            </div>
          </Styled.ContactBlock>
        </div>
      </Styled.FooterTop>
      <Styled.FooterBottom>
        <Styled.InfoContainer>
          <Logo blue />
          <address>64 st james boulevard hoswick , ze2 7zj</address>
          <Social />
        </Styled.InfoContainer>
        <Styled.Content>
          <Styled.LinksContainer>
            <h5>Get help</h5>
            <ul>
              <li>
                <Link to="">About us</Link>
              </li>
              <li>
                <Link to="">Contact us</Link>
              </li>
              <li>
                <Link to="">Return policy</Link>
              </li>
              <li>
                <Link to="">Privacy policy</Link>
              </li>
              <li>
                <Link to="">Payment policy</Link>
              </li>
            </ul>
          </Styled.LinksContainer>
          <Styled.LinksContainer>
            <h5>About us</h5>
            <ul>
              <li>
                <Link to="">News</Link>
              </li>
              <li>
                <Link to="">Service</Link>
              </li>
              <li>
                <Link to="">Our policy</Link>
              </li>
              <li>
                <Link to="">Customer care</Link>
              </li>
              <li>
                <Link to="">Faq&apos;s</Link>
              </li>
            </ul>
          </Styled.LinksContainer>
        </Styled.Content>
      </Styled.FooterBottom>
    </Styled.Footer>
  );
};

export { Footer };
