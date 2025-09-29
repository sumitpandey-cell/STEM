import type { SVGProps } from "react";

export const AtomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2.04-2.04 2.04-5.36 0-7.4s-5.36-2.04-7.4 0" />
    <path d="M3.8 3.8c-2.04 2.04-2.04 5.36 0 7.4s5.36 2.04 7.4 0" />
    <path d="M20.2 3.8c-2.04 2.04-5.36 2.04-7.4 0s-2.04-5.36 0-7.4" />
    <path d="M3.8 20.2c2.04-2.04 5.36-2.04 7.4 0s2.04 5.36 0 7.4" />
  </svg>
);
