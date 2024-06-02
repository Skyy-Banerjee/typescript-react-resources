//Restricting Props 🙅🏻‍♂️

import RandomNum from "./components/restrictions/RandomNum";

function App() {
  return (
    <div>
      <RandomNum value={28} isPositive />
      <RandomNum value={-10} isNegative />
    </div>
  );
}

export default App;
