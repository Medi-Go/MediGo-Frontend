import React, { useEffect } from 'react';

const Effect = ({ effect, medicines }) => {
  useEffect(() => {
    console.log('effect', effect, medicines);
  }, []);
  return (
    <>
      <div>{effect}</div>
      <div>{medicines}회</div>
    </>
  );
};

export default Effect;
