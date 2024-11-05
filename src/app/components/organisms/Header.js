import Button from '../atoms/Button';

export default function Header({ onFetch, onClear }) {
  return (
    <header className="mb-4 flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold">Midterm Prep!</h1>
      <div className="flex flex-col space-y-2 mt-6 sm:flex-row sm:space-y-0 sm:space-x-2">
        <Button onClick={onFetch} className="border-black">
          Fetch Data
        </Button>
        <Button onClick={onClear} className="border-red-500 text-red-500">
          Clear Data
        </Button>
      </div>
    </header>
  );
}