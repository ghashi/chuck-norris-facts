import * as React from 'react';
import Helmet from 'react-helmet';
import { JsonLd, JsonLdProps } from './json-ld.component';
import {
  SocialMediaSEO,
  SocialMediaSEOProps
} from './social-media-seo.component';

/**
 * If your content is an article, you don't need to send jsonLd (just send the article data inside the socialMedia.article)
 */
export interface SEOProps extends JsonLdProps {
  socialMedia: SocialMediaSEOProps;
}

export const SEO = (props: SEOProps) => {
  const mainInfo = React.useMemo(
    () => (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="language" content="Portuguese" />
        <title>{props.socialMedia.title}</title>
        <meta name="image" content={props.socialMedia.image} />
        {props.socialMedia.description && (
          <meta name="description" content={props.socialMedia.description} />
        )}
        <link rel="canonical" href={props.socialMedia.url} />
      </Helmet>
    ),
    [
      props.socialMedia.description,
      props.socialMedia.image,
      props.socialMedia.title,
      props.socialMedia.url
    ]
  );

  return (
    <>
      <SocialMediaSEO {...props.socialMedia} />
      {props.jsonld && <JsonLd jsonld={props.jsonld} />}
      {mainInfo}
    </>
  );
};
