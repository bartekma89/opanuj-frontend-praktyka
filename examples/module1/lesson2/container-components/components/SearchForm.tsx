import Input from './Input';
import Select from './Select';
import { SelectOptions } from '../lib/selectOptions';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

const genderOptions: SelectOptions = [
  { label: 'Any Gender', value: '' },
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Genderless', value: 'genderless' },
  { label: 'Unknown', value: 'unknown' },
];

const sortOptions: SelectOptions = [
  { label: 'Initial', value: '' },
  { label: 'Name', value: 'name' },
  { label: 'Created Date', value: 'created' },
];

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <label className="flex flex-col">
        Name
        <Input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Rick Sanchez..."
          value={name}
          onChange={setName}
        />
      </label>
      <label className="flex flex-col">
        Gender
        <Select
          value={gender}
          onChange={setGender}
          className="border h-7 mt-1"
          options={genderOptions}
        />
      </label>
      <label className="flex flex-col">
        Sort by
        <Select
          value={sortOption}
          onChange={setSortOption}
          className="border h-7 mt-1"
          options={sortOptions}
        />
      </label>
    </form>
  );
}

export default SearchForm;
