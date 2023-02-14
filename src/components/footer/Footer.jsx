import React from "react";
import {
  SFooter,
  FooterTop,
  SForm,
  ContactBlock,
  InfoContainer,
  FooterBottom,
  Content,
  LinksContainer,
} from "./Footer.styled";

import headphonsIcon from "../../assets/icons/headphons.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import Logo from "../core-ui/logo/Logo";
import { Link } from "react-router-dom";
import Social from "../social/Social";

const Footer = () => {
  return (
    <SFooter>
      <FooterTop>
        <h5>Subscribe newsletter</h5>
        <div>
          <SForm>
            <input
              placeholder='Email address'
              type='email'
            />
            <button aria-label='send to mail'>
              <SendIcon />
            </button>
          </SForm>
          <ContactBlock>
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
          </ContactBlock>
        </div>
      </FooterTop>
      <FooterBottom>
        <InfoContainer>
          <Logo blue />
          <address>64 st james boulevard hoswick , ze2 7zj</address>
          <Social />
        </InfoContainer>
        <Content>
          <LinksContainer>
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
          </LinksContainer>
          <LinksContainer>
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
          </LinksContainer>
        </Content>
      </FooterBottom>
    </SFooter>
  );
};

export default Footer;
