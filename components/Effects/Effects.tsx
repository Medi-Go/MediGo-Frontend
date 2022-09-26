import React from 'react';
import Effect from '../Effect/Effect';

const Effects = ({ title, effects }) => {
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
