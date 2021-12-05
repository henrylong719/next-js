import React from 'react';
// use for meta data keywords etc.
import Head from 'next/head';
import Nav from '../components/nav';

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>this is the about page</h1>
    </div>
  );
};

export default about;
