import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.scss';
import { routes } from '../../Scenes/router';

function Footer() {
  return (
    <div className={[s.footer, 'footer'].join(' ')}>
      <Link className={s.footer__item} to={routes.terms}>Copyright © 2017.</Link>
      <Link className={s.footer__item} to={routes.privacy}>Privacy Policy.</Link>
    </div>
  );
};

export default Footer;