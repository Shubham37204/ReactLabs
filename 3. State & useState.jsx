// State is data that changes over time. When state changes, React re-renders the component to reflect the new data.

// How useState Works
// const [count, setCount] = useState(0);
// //     ^          ^                ^
// //   value    setter fn     initial value
// useState returns an array: [currentValue, setterFunction]
// Calling the setter triggers a re-render
// Never modify state directly — always use the sette

// Your Task
// Build a counter component:
// Initialize a count state to 0 using useState
// Display the count in an <h2> with id "count"
// Add an Increment button (id: "increment") that increases count by 1
// Add a Decrement button (id: "decrement") that decreases count by 1
// Add a Reset button (id: "reset") that sets count back to 0

// 1
function App() {
  const [count, setCount] = useState(0);

  function ChangeCountByOne() {
    setCount((c) => c + 1);
  }
  function ChangeCountByNegativeOne() {
    setCount((c) => c - 1);
  }
  function ChangeCountToZero() {
    setCount(0);
  }

  return (
    <div>
      <h2 id="count">Count: {count}</h2> {/* count ha initila value as 0 */}
      <button id="increment" onClick={ChangeCountByOne}>
        +
      </button>
      <button id="decrement" onClick={ChangeCountByNegativeOne}>
        -
      </button>
      <button id="reset" onClick={ChangeCountToZero}>
        0
      </button>
    </div>
  );
}

// 2
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 id="count">Count: {count}</h2>

      <button id="increment" onClick={() => setCount((c) => c + 1)}>
        +
      </button>

      <button id="decrement" onClick={() => setCount((c) => c - 1)}>
        -
      </button>

      <button id="reset" onClick={() => setCount(0)}>
        0
      </button>
    </div>
  );
}
