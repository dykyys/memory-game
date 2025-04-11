import { EmojiButton } from '../EmojiButton/EmojiButton';
import s from './MemoryCard.module.css';

export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}) {
  return (
    <ul className={s.cardList}>
      {data.map((emoji, index) => {
        const selectedCardEntry = selectedCards.find(
          (emoji) => emoji.index === index
        );
        const matchedCardEntry = matchedCards.find(
          (emoji) => emoji.index === index
        );

        const cardStyle = matchedCardEntry
          ? 'card-item--matched'
          : selectedCardEntry
          ? 'card-item--selected'
          : '';
        return (
          <li key={index} className={s[cardStyle]}>
            <EmojiButton
              emoji={emoji}
              handleClick={() => handleClick(emoji.name, index)}
              selectedCardEntry={selectedCardEntry}
              matchedCardEntry={matchedCardEntry}
              index={index}
            />
          </li>
        );
      })}
    </ul>
  );
}
