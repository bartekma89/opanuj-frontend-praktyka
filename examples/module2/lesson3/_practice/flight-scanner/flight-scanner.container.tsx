import { useForm } from './hook/useForm';
import { Trip, FlightFormFields, FlightFormSchema } from './models/flight-form';

function FlightScanner() {
  const { handleChange, formData, errors, handleValidation } =
    useForm<FlightFormFields>(FlightFormSchema, {
      destination: '',
      origin: '',
      startDate: '',
      endDate: '',
      trip: Trip.ONE_WAY,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidation();
  };

  return (
    <div>
      <form id="flight-form" className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <label htmlFor="origin" className="flex flex-col">
          Origin
          <input
            id="origin"
            name="origin"
            type="text"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Cracow, Poland"
            className="border border-gray-200 rounded-md p-2"
          />
        </label>
        <label htmlFor="destination" className="flex flex-col">
          Destination
          <input
            id="destination"
            name="destination"
            type="text"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Boston, USA"
            className="border border-gray-200 rounded-md p-2"
          />
        </label>
        <div className="flex flex-col">
          <label htmlFor="one-way">
            <input
              type="radio"
              id="one-way"
              name="trip"
              value={Trip.ONE_WAY}
              onChange={handleChange}
              checked={formData.trip === Trip.ONE_WAY}
            />
            One way
          </label>
          <label htmlFor="round-trip">
            <input
              type="radio"
              id="round-trip"
              name="trip"
              value={Trip.ROUND_TRIP}
              onChange={handleChange}
              checked={formData.trip === Trip.ROUND_TRIP}
            />
            Round trip
          </label>
        </div>
        <div className="grid grid-cols-2 space-x-2">
          <label htmlFor="startDate" className="flex flex-col">
            Start at
            <input
              id="startDate"
              name="startDate"
              type="text"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="01-05-2024"
              className="border border-gray-200 rounded-md p-2"
            />
          </label>
          <label htmlFor="endDate" className="flex flex-col">
            Return at
            <input
              id="endDate"
              name="endDate"
              type="text"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="10-05-2024"
              className="border border-gray-200 rounded-md p-2"
            />
          </label>
        </div>
        <button
          className="bg-blue-500 text-white rounded-md p-2 w-full"
          type="submit"
        >
          Search
        </button>
      </form>
      <ul className="mt-4 text-red-500">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
}

export default FlightScanner;
