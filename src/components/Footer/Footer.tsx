import React from 'react';
import { FooterContainer } from './Footer.styles';

export const Footer: React.FC = () => (
  <FooterContainer>
    <span>&copy; Petr Bukov {new Date().getFullYear()}</span>
  </FooterContainer>
);
