import { EmojiButton } from '../EmojiButton/EmojiButton';
export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}) {
  return (
    <ul className="card-container">
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
          <li key={index} className={`card-item ${cardStyle}`}>
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
