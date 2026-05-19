// Your Task
// Create a UserCard component that accepts name and role props
// Render an <h2> with the name
// Render a <p> with the role
// Wrap both in a <div> with className="user-card"
// In the App component, render two UserCard components:
// One with name "Alice" and role "Developer"
// One with name "Bob" and role "Designer"

function UserCar({ name, role }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCar name="Alice" role="Developer" />
      <UserCar name="Bob" role="Designer" />
    </div>
  );
}
