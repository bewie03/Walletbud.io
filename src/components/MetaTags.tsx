import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
}

export const MetaTags = ({ 
  title = "WalletPup",
  description = "Launch your Cardano wallet companion. No need to seed liquidity."
}: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://walletpup.com/Banner.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};
