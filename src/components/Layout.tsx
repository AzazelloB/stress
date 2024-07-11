import { RouteSectionProps } from '@solidjs/router';
import type { Component } from 'solid-js';

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <div class="flex flex-col min-h-screen">
			<div class="flex grow">
				<main class="w-full p-4">
          {props.children}
        </main>
			</div>
		</div>
  );
};

export default Layout;
