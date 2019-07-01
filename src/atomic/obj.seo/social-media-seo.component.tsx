import React from 'react';
import Helmet from 'react-helmet';

/**
 * seo meta-tags
 *
 * twitter: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary
 * facebook: http://ogp.me
 *
 * test here:
 *  - facebook: https://developers.facebook.com/tools/debug/
 *  - twitter: https://cards-dev.twitter.com/validator
 *
 */
export interface SocialMediaSEOProps {
  /**
   * # twitter
   * A concise title for the related content. Platform specific behaviors:
   * - iOS, Android: Truncated to two lines in timeline and expanded Tweet
   * - Web: Truncated to one line in timeline and expanded Tweet
   *
   * # ogp
   * -  The title of your object as it should appear within the graph, e.g., "The Rock".
   */
  title: string;

  /**
   * # twitter
   * A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card support an aspect ratio of 1:1 with minimum dimensions of 144x144 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. The image will be cropped to a square on all platforms. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
   *
   * # ogp
   * An image URL which should represent your object within the graph.
   * ex: "http://ia.media-imdb.com/images/rock.jpg"
   */
  image: string;

  /**
   * # twitter
   * A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website. Platform specific behaviors:
   * - iOS, Android: Not displayed
   * - Web: Truncated to three lines in timeline and expanded Tweet
   */
  description?: string;

  /**
   * # ogp
   *  The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/".
   */
  url: string;

  /**
   * # twitter
   * A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.
   *
   * # ogp
   * A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt.
   */
  imageAlt?: string;
}

//

function areEqual(
  prevProps: SocialMediaSEOProps,
  nextProps: SocialMediaSEOProps
) {
  const mainInfoEqual =
    prevProps.title === nextProps.title &&
    prevProps.image === nextProps.image &&
    prevProps.description === nextProps.description &&
    prevProps.url === nextProps.url &&
    prevProps.imageAlt === nextProps.imageAlt;
  if (!mainInfoEqual) return false;

  return true;
}

export const SocialMediaSEO = React.memo((props: SocialMediaSEOProps) => {
  const fbAppId = '';
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@fleury_online" />
      <meta name="twitter:title" content={props.title} />
      {props.description && (
        <meta name="twitter:description" content={props.description} />
      )}
      <meta name="twitter:image" content={props.image} />
      {props.imageAlt && (
        <meta name="twitter:image:alt" content={props.imageAlt} />
      )}

      {/* # http://ogp.me/#metadata */}
      <meta property="og:type" content={'website'} />
      <meta property="og:title" content={props.title} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={props.image} />
      {props.description && (
        <meta name="og:description" content={props.description} />
      )}

      {props.imageAlt && <meta name="og:image:alt" content={props.imageAlt} />}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Fleury" />
      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}
    </Helmet>
  );
}, areEqual);
