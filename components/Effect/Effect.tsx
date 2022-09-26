import React from 'react';
import { EffectContainer } from './style';

const Effect = ({ effect, medicines }) => {
  return (
    <EffectContainer>
      <div>{effect}</div>
      <div>{medicines}회</div>
    </EffectContainer>
  );
};

export default Effect;
