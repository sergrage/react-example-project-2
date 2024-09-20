declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module '*.svg?react' {
  import React from 'react';

  const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;