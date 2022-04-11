import React from "react";
import { Link } from "react-router-dom";

import headphonsIcon from "assets/icons/headphons.svg";
import FooterForm from "./Form";
import Social from "../social/Social";
import { Logo } from "../core-ui/";

import * as Styled from "./styled";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterTop>
        <h5>Subscribe newsletter</h5>
        <div>
          <FooterForm />
          <Styled.ContactBlock>
            <img
              src={headphonsIcon}
              alt='Headphons icon'
              loading='lazy'
              height='41'
              width='41'
            />
            <div>
              <div>Call us 24/7:</div>
              <a href='tel:(+62) 0123 567 789'>(+62) 0123 567 789</a>
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
                <Link>About us</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>Return policy</Link>
              </li>
              <li>
                <Link>Privacy policy</Link>
              </li>
              <li>
                <Link>Payment policy</Link>
              </li>
            </ul>
          </Styled.LinksContainer>
          <Styled.LinksContainer>
            <h5>About us</h5>
            <ul>
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Service</Link>
              </li>
              <li>
                <Link>Our policy</Link>
              </li>
              <li>
                <Link>Customer care</Link>
              </li>
              <li>
                <Link>Faq's</Link>
              </li>
            </ul>
          </Styled.LinksContainer>
        </Styled.Content>
      </Styled.FooterBottom>
    </Styled.Footer>
  );
};

export { Footer };
