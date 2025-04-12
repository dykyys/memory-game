import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrapper } from '../Wrapper/Wrapper';
import RegularButton from '../RegularButton/RegularButton';

export const GameOver = ({ handleClick }) => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Wrapper accent ref={divRef} tabIndex={-1}>
          <p className="p--large">You&apos;ve matched all the memory cards!</p>
          <RegularButton handleClick={handleClick}>Play again</RegularButton>
        </Wrapper>
      </motion.div>
    </AnimatePresence>
  );
};
