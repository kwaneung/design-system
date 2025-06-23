import { Button } from '@/components/ui/button';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="flex flex-col gap-4 items-start">
        <Button>count</Button>
        <Button variant="secondary">count</Button>
        <Button variant="destructive">count</Button>
      </div>
    </>
  );
}

export default App;
