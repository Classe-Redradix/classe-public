import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'
import useTranslations from './hooks/useTranslations'

const InfoHead = ({ title, description, url, children }) => {
  const formatMessage = useTranslations()

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={formatMessage('url:og-1200x1200')} />
      <meta property="og:image" content={formatMessage('url:og-921x518')} />
      <meta property="og:image" content={formatMessage('url:og-400x400')} />
      <meta property="og:image" content={formatMessage('url:og-256x256')} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={formatMessage('url:og-1200x1200')}
      />

      <link rel="manifest" href="manifest.json" />

      {children}
    </Head>
  )
}

InfoHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default InfoHead
