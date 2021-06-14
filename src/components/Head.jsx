import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{`Platzi Merch - ${title}`}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soyalextreme" />
      <meta name="twitter:creator" content="@soyalextreme" />
      <meta name="twitter:title" content="Platzi Conf Store" />
      <meta name="twitter:description" content="Platzi Conf Store" />
      <meta property="og:title" content="Platzi Conf Store" />
      <meta property="og:description" content="Platzi Conf Store" />
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Platzi Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
  );
};

export default Head;
