import { decodeEntity } from 'html-entities';
import RegularButton from '../RegularButton/RegularButton';
export const EmojiButton = ({
  emoji,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
  index,
}) => {
  const btnContent =
    selectedCardEntry || matchedCardEntry
      ? decodeEntity(emoji.htmlCode[0])
      : '?';

  const btnStyle = matchedCardEntry
    ? 'btn--emoji__back--matched'
    : selectedCardEntry
    ? 'btn--emoji__back--selected'
    : 'btn--emoji__front';

  const btnAria = matchedCardEntry
    ? `${decodeEntity(emoji.name)}. Matched.`
    : selectedCardEntry
    ? `${decodeEntity(emoji.name)}. Not matched yet.`
    : 'Card upside down.';

  return (
    <RegularButton
      handleClick={selectedCardEntry ? null : handleClick}
      className={btnStyle}
      style="btn--emoji"
      disabled={matchedCardEntry}
      ariaLabel={`Position ${index + 1}: ${btnAria}`}
      ariaLive="polite"
    >
      {btnContent}
    </RegularButton>
  );
};
