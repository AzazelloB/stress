import type { Component } from 'solid-js';

interface Props {
	class?: string;
	title?: string;
}

const Club: Component<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <title>{props.title}</title>
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"/>
      <path d="M12 17.66L12 22"/>
    </svg>
  );
};

export default Club;
