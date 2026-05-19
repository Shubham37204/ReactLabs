//JSX looks like HTML but lives inside JavaScript. Under the hood, <h1>Hello</h1> becomes React.createElement('h1', null, 'Hello').

// Your Task
// Create an App component that renders:

// A <div> wrapper containing:
// An <h1> with the text "Hello, React!"
// A <p> that displays the value of const year = 2026 using a JSX expression
// A <p> with className="subtitle" containing any text

function App() {
  const year = 2026;

  return (
    <>
      <div>
        <h1>"Hello, React!"</h1>
        <p className="subtitle">{year}</p>
      </div>
    </>
  );
}
