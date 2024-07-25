import React, { useState, useEffect } from 'react';

const Greeting = ({ name = "Euralio" }) => {
  const [greeting, setGreeting] = useState(`Hola ${name}`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting("Hola Alfonsina");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <p>{greeting}</p>;
};

export default Greeting;