"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"

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
        <Button onClick={choisirNouveauNom}>Choisir un nouveau nom</Button>
      </div>
  );
}
