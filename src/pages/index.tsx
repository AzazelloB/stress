import { createSignal, type Component } from 'solid-js';

import Card, { Suit } from '~/components/Card';
import Stack, { type Card as TCard } from '~/components/Stack';

const HomePage: Component = () => {
  const [colL, setColL] = createSignal<TCard[]>([
    {
      suit: Suit.CLUB,
      face: 11,
    },
    {
      suit: Suit.SPADE,
      face: 5,
    },
    {
      suit: Suit.DIAMOND,
      face: 6,
    },
  ])
  const [colR, setColR] = createSignal<TCard[]>([
    {
      suit: Suit.CLUB,
      face: 11,
    },
    {
      suit: Suit.CLUB,
      face: 3,
    },
    {
      suit: Suit.HEART,
      face: 2,
    },
  ])
  
  return (
    <div class="flex flex-col h-full">
      <div>
        <div class="w-32">
          <Card face={1} suit={Suit.HEART} />
        </div>
      </div>

      <div class="grow flex items-center justify-center gap-64">
        <Stack cards={colL()} />

        <div>
          btn
        </div>

        <Stack cards={colR()} />
      </div>

      <div>
        <div class="w-32">
          <Card face={1} suit={Suit.SPADE} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
