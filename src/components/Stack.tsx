import { For, type Component } from 'solid-js';

import Card, { Face, Suit } from '~/components/Card';

export interface Card {
  face: Face;
  suit: Suit;
}

interface StackProps {
  cards: Card[];
}

const Stack: Component<StackProps> = (props) => {
  return (
    <div class="relative w-32 h-48">
      <For each={props.cards}>
        {(card, i) => (
          <Card
            class="absolute w-full"
            style={{
              bottom: `${i() * 3}px`,
              right: `${i() * 3}px`,
            }}
            face={card.face}
            suit={card.suit}
          />
        )}
      </For>
    </div>
  );
};

export default Stack;
