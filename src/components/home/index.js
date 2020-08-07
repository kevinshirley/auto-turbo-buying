import React, { useEffect } from 'react';
import HomeSection1 from 'src/components/home/home-section-1';
import HomeSection2 from 'src/components/home/home-section-2';
import HomeSection3 from 'src/components/home/home-section-3';
import HomeSection4 from 'src/components/home/home-section-4';
import HomeSection5 from 'src/components/home/home-section-5';
import HomeSection6 from 'src/components/home/home-section-6';
import Router from 'next/router';

function Home() {
  useEffect(() => {
    const { asPath } = Router;

    if (asPath == '/' ) {
      Router.push('/en');
    }
  });

  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection4 />
    </>
  );
};

export default Home;
