import React from 'react';

import logoSVG from '../../../../public/logo.svg';

const Logo: React.FC = () => {
  return <figure>
    <img src={logoSVG} alt="logo" />
  </figure>;
}

export default Logo;