"use client"

import { useState } from 'react';
import { Menu, CircleX } from 'lucide-react';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [noms, setNoms] = useState(['Thibaud', 'Eliott', 'Elsa', 'Damien', 'Bastien']);
  const [couleurs, setCouleurs] = useState(['#554971', '#8AC6D0', '#FF6663', '#DDF45B', '#CBE896']);
  const [nouveauNom, setNouveauNom] = useState('');
  const [nomChoisi, setNomChoisi] = useState('Thibaud');
  const [couleurChoisi, setCouleurChoisi] = useState('#554971');
  const [menuOuvert, setMenuOuvert] = useState(false);

  const choisirNouveauNom = () => {
    const random_n = Math.floor(Math.random() * noms.length);
    setNomChoisi(noms[random_n]);
    setCouleurChoisi(couleurs[random_n]);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const ajouterNom = () => {
    if (nouveauNom.trim() === '') return;
    const random_color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setNoms([...noms, nouveauNom]);
    setCouleurs([...couleurs, random_color]);
    setNouveauNom('');
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen w-full p-4 text-center transition-all duration-300" 
      style={{ backgroundColor: couleurChoisi }} 
      onClick={choisirNouveauNom}
    >
      <h1 className={`text-5xl font-bold transition-transform duration-300 ${isAnimating ? "scale-125" : ""}`}>{nomChoisi}</h1>
      
      <button 
        className="absolute top-5 left-5 bg-gray-700 text-white p-2 rounded-md md:hidden" 
        onClick={(e) => { e.stopPropagation(); setMenuOuvert(!menuOuvert); }}
      >
        {menuOuvert ? <Menu size={24} /> : <CircleX size={24} />}
      </button>
      
      <div 
        className={`absolute left-5 bg-white shadow-lg rounded-xl p-5 w-64 transition-all duration-300 ${menuOuvert ? "translate-x-0" : "-translate-x-[calc(100%+10rem)]"} md:translate-x-0`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          {noms.map((nom, key) => (
            <h2 key={key} className="text-lg font-medium text-gray-700">{nom}</h2>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center mt-5">
          <input 
            type="text" 
            placeholder='Ajouter un nom' 
            className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md text-center" 
            value={nouveauNom} 
            onChange={(e) => setNouveauNom(e.target.value)}
          />
          <button 
            className="w-full md:w-1/3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition" 
            onClick={ajouterNom}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
