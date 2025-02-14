import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  path?: string;
}

export const MetaTags = ({ 
  title = "WalletPup",
  description = "Your Loyal Wallet Companion on Cardano",
  path = ""
}: MetaTagsProps) => {
  const url = `https://walletpup.com${path}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="WalletPup" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://walletpup.com/Banner.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="theme-color" content="#5865F2" />
    </Helmet>
  );
};
