import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useSearchCharacters } from '../hooks/useSearchCharacters';
import { sortCharacters } from '../lib/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  const characters = useSearchCharacters({ name, gender });

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
