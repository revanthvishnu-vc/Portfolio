import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/revanth-vishnu-854550208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home__social-links" target='_blank' rel='noreferrer'>
        <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/revanthvishnu-vc" className="home__social-links" target='_blank' rel='noreferrer'>
        <i className="fa-brands fa-github"></i>
        </a>
    </div>
  );
}

export default HeaderSocials;
