import * as React from 'react';

export interface JsonLdProps {
  jsonld?: object;
}

// src: https://blog.haroen.me/json-ld-with-react#comment-3255424415
// You can test it here: https://search.google.com/structured-data/testing-tool/u/0/
export const JsonLd: React.FunctionComponent<JsonLdProps> = props => {
  return props.jsonld ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.jsonld) }}
    />
  ) : null;
};
