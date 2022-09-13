import React, { useEffect } from 'react';
import Effect from '../Effect/Effect';

const Effects = ({ title, effects }) => {
  useEffect(() => {
    console.log('effects', title, effects);
  }, []);
  return (
    <>
      <div>{title}</div>
      {effects.map((effect, idx) => (
        <Effect
          key={idx}
          effect={effect.effect}
          medicines={effect.medicines.length}
        />
      ))}
    </>
  );
};

export default Effects;
