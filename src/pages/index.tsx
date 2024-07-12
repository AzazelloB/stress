import { createSignal, type Component } from 'solid-js';

import { pluck, shuffle } from '~/utils/array';

import { Face, Suit } from '~/components/Card';
import Stack, { type Card } from '~/components/Stack';

const deck: Card[] = [];

const suits = Object.values(Suit).filter(Number.isInteger) as Suit[]
for (const suit of suits) {
  for (let face = 1; face <= 13; face++) {
    deck.push({
      suit,
      face: face as Face,
    })
  }
}

const HomePage: Component = () => {
  const [colL, setColL] = createSignal<Card[]>([])
  const [colR, setColR] = createSignal<Card[]>([])
  const [hand, setHand] = createSignal<Card[]>([])
  const [enemyHand, setEnemyHand] = createSignal<Card[]>([])

  const startGame = () => {
    const randomizedDeck = shuffle(deck)

    pushColL(pluck(randomizedDeck))
    pushColR(pluck(randomizedDeck))

    setHand(randomizedDeck.splice(0, Math.floor(randomizedDeck.length / 2)))
    setEnemyHand(randomizedDeck)
  }

  const pushColL = (card: Card) => {
    setColL(prev => [...prev, card])
  }

  const pushColR = (card: Card) => {
    setColR(prev => [...prev, card])
  }

  startGame()

  return (
    <div class="flex flex-col h-full">
      <div>
        <Stack cards={enemyHand()} growDir="left" />
      </div>

      <div class="grow flex items-center justify-center gap-64">
        <Stack cards={colL()} growDir="left" />

        <div>
          btn
        </div>

        <Stack cards={colR()} growDir="right" />
      </div>

      <div>
        <Stack cards={hand()} growDir="left" />
      </div>
    </div>
  );
};

export default HomePage;
