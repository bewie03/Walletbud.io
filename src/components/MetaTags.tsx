import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
}

export const MetaTags = ({ 
  title = "WalletPup - Your Loyal Wallet Companion",
  description = "Your Loyal Wallet Companion"
}: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WalletPup" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/Banner.png" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};
