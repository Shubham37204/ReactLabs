// In React, form elements like <input>, <textarea>, and <select> can be controlled — their value is driven by React state.

// Pattern
// const [name, setName] = useState('');
// <input value={name} onChange={(e) => setName(e.target.value)} />
// Your Task
// Build a registration form:

// A text input for name with id "name-input"
// An email input with id "email-input"
// A <select> for role with id "role-select" and options: "student", "developer", "designer"
// A submit button with id "submit-btn"
// All inputs must be controlled (value + onChange)
// On submit, prevent page reload and show a <div id="summary"> displaying: "Name: [name], Email: [email], Role: [role]"
// The summary should only appear after submission

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="role-select">Role:</label>

        <select
          id="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">student</option>
          <option value="developer">developer</option>
          <option value="designer">designer</option>
        </select>

        <button id="submit-btn" type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div id="summary">
          Name: {name}, Email: {email}, Role: {role}
        </div>
      )}
    </div>
  );
}
