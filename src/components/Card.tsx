import type { Component, JSX } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import Club from '~/ui/icons/Club';
import Diamond from '~/ui/icons/Diamond';
import Heart from '~/ui/icons/Heart';
import Spade from '~/ui/icons/Spade';

export enum Suit {
  CLUB,
  SPADE,
  HEART,
  DIAMOND,
}

export type Face = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

interface CardProps {
  face: Face;
  suit: Suit;
  class?: string;
  style?: JSX.CSSProperties;
}

const Card: Component<CardProps> = (props) => {
  const getFace = () => {
    switch (props.face) {
      case 1:  return 'A';
      case 11: return 'J';
      case 12: return 'Q';
      case 13: return 'K';
      default: return props.face;
    }
  }

  const getSuit = () => {
    switch (props.suit) {
      case Suit.CLUB:    return <Club class="w-5 h-5" />;
      case Suit.SPADE:   return <Spade class="w-5 h-5" />;
      case Suit.HEART:   return <Heart class="w-5 h-5" />;
      case Suit.DIAMOND: return <Diamond class="w-5 h-5" />;
    }
  }
  
  return (
    <div
      class={twMerge(
        'bg-slate-100 aspect-[2/3] rounded-lg shadow-lg px-3 py-2 font-mono text-3xl',
        'flex',
        props.suit === Suit.CLUB || props.suit === Suit.SPADE ? 'text-black' : 'text-red-600',
        props.class,
      )}
      style={props.style}
    >
      <div class="text-center">
        {getFace()}
        {getSuit()}
      </div>

      <div>
        {/* image */}
      </div>

      <div class="text-center rotate-180 ml-auto">
        {getFace()}
        {getSuit()}
      </div>
    </div>
  );
};

export default Card;
