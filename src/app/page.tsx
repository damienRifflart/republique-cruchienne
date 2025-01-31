"use client"

import { useState } from 'react';

export default function Home() {
  const noms = ['Thibault', 'Eliott', 'Elsa', 'Damien', 'Bastien'];
  const [nomChoisi, setNomChoisi] = useState('Thibault');

  const choisirNouveauNom = () => {
    const random_n = Math.floor(Math.random() * noms.length)
    setNomChoisi(noms[random_n]);
  };

  return (
      <div className="flex justify-center items-center flex-col h-screen gap-5">
        <h1>Nom choisi : {nomChoisi}</h1>
        <button onClick={choisirNouveauNom} className={"border border-black rounded-lg p-3 bg-gray-200"}>Choisir un nouveau nom</button>
      </div>
  );
}
