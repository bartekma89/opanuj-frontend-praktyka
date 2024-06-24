import Input from './Input';
import Select from './Select';
import { SelectOptions } from '../lib/selectOptions';
import { useMemo } from 'react';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  const genderOptions: SelectOptions = useMemo(
    () => [
      { label: 'Any Gender', value: '' },
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
      { label: 'Genderless', value: 'genderless' },
      { label: 'Unknown', value: 'unknown' },
    ],
    []
  );

  const sortOptions: SelectOptions = useMemo(
    () => [
      { label: 'Initial', value: '' },
      { label: 'Name', value: 'name' },
      { label: 'Created Date', value: 'created' },
    ],
    []
  );

  return (
    <form className="space-x-4 flex items-end justify-center">
      <Input
        label="Name"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={setName}
      />
      <Select
        label="Gender"
        value={gender}
        onChange={setGender}
        options={genderOptions}
      />
      <Select
        label="Sort by"
        value={sortOption}
        onChange={setSortOption}
        options={sortOptions}
      />
    </form>
  );
}

export default SearchForm;
