"use client"

import { useState } from 'react';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false); // animation

  const [noms, setNoms] = useState(['Thibaud', 'Eliott', 'Elsa', 'Damien', 'Bastien']);
  const [couleurs, setCouleurs] = useState(['#554971', '#8AC6D0', '#FF6663', '#DDF45B', '#CBE896']);
  const [nouveauNom, setNouveauNom] = useState('');

  const [nomChoisi, setNomChoisi] = useState('Thibaud');
  const [couleurChoisi, setCouleurChoisi] = useState('#554971');

  const choisirNouveauNom = () => {
    const random_n = Math.floor(Math.random() * noms.length)
    setNomChoisi(noms[random_n]);
    setCouleurChoisi(couleurs[random_n])

    // Déclenche l'animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Désactive après 300ms
  };

  const ajouterNom = () => {
    let random_color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`

    setNoms([...noms, nouveauNom]);
    setCouleurs([...couleurs, random_color])
    setNouveauNom('');
  } 

  return (
      <div className={`flex justify-center items-center h-screen w-screen`} style={{backgroundColor: couleurChoisi }} onClick={choisirNouveauNom}>
        <h1 className={`text-5xl transition-all duration-300 ${isAnimating ? "scale-125" : ""}`}>{nomChoisi}</h1>
        <div className="w-[20rem] h-[20rem] bg-white rounded-xl absolute right-20" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center mt-5 w-full flex-col">
            {
              noms.map((nom, key) => (
                <h2 key={key} className="text-2xl">{nom}</h2>
              ))
            }
          </div>

          <div className="flex flex-row gap-3 justify-center mt-5" >
            <button className="border border-gray-300 rounded-md p-2" onClick={ajouterNom}>Ajouter un nom</button>
            <input type="text" placeholder='  un nom' className="w-[9rem] rounded-md border border-gray-300"
              value={nouveauNom}
              onChange={(e) => setNouveauNom(e.target.value)}
            />
          </div>

        </div>
      </div>
  );
}
