import { useEffect, useRef } from 'react';
import RegularButton from '../RegularButton/RegularButton';
import { Wrapper } from '../Wrapper/Wrapper';
import { Text } from '../Text/text';

export const ErrorCard = ({ handleClick }) => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <Wrapper accent ref={divRef} tabIndex={-1}>
      <Text size="large" text="Sorry, there was an error." />
      <Text
        size="regular"
        text="Please come back later or click the button below to try restarting the
        game."
      />
      <RegularButton handleClick={handleClick}>Restart game</RegularButton>
    </Wrapper>
  );
};
