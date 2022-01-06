import React from 'react';
import styled from 'styled-components';
import paymentsImg from '../assets/payment.png';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Furnify</span>
      </h5>
      <h5>All rights reserved</h5>
      <span className="paymentsImg">
        <img src={paymentsImg} alt="payment" />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .paymentsImg {
    margin-top: 5px;
    margin-left: 0px;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
  .paymentsImg {
    margin-left: 40px;
  }
`;

export default Footer;
