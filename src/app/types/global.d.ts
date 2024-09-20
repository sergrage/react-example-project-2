declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;