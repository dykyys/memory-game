import { useEffect, useState } from 'react';

import Form from './components/Form/Form';
import MemoryCard from './components/MemoryCard/MemoryCard';
import { fetchEmoji } from './services/emojihubAPI';
import { AssistiveTechInfo } from './components/AssistiveTechInfo/AssistiveTechInfo';
import { GameOver } from './components/GameOver/GameOver';
import { ErrorCard } from './components/ErrorCard/ErrorCard';
import { getEmojisArray } from './helpers/getEmojisArray';
import { getRandomIndices } from './helpers/getRandomIndices';
import { Text } from './components/Text/text';

export default function App() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [formData, setFormData] = useState({
    category: 'animals-and-nature',
    number: 5,
  });
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        ...selectedCards,
      ]);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (emojisData.length && matchedCards.length === emojisData.length) {
      setAreAllCardsMatched(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedCards]);

  const handleFormChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const startGame = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchEmoji(formData.category);
      const dataSlice = getRandomIndices(data, formData).map(
        (number) => data[number]
      );
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (error) {
      console.log(error.message, 'Could not fetch data from API😕');
      setIsError(true);
    } finally {
      setIsFirstRender(false);
    }
  };
  const turnCard = (name, index) => {
    if (selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index },
      ]);
    } else if (selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  };

  const resetGame = () => {
    setIsGameOn(false);
    setSelectedCards([]);
    setMatchedCards([]);
    setAreAllCardsMatched(false);
  };

  const resetError = () => {
    setIsError(false);
  };

  return (
    <main>
      <Text className="title" text="Memory" type="h1" />
      {!isGameOn && !isError && (
        <Form
          handleSubmit={startGame}
          handleChange={handleFormChange}
          isFirstRender={isFirstRender}
        />
      )}
      {isGameOn && !areAllCardsMatched && (
        <AssistiveTechInfo
          emojisData={emojisData}
          matchedCards={matchedCards}
        />
      )}
      {areAllCardsMatched && <GameOver handleClick={resetGame} />}
      {isGameOn && (
        <MemoryCard
          handleClick={turnCard}
          data={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
      {isError && <ErrorCard handleClick={resetError} />}
    </main>
  );
}
