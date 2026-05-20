// Context API
// When data needs to be accessed by many components at different nesting levels, Context lets you pass it without threading props through every level.

// How It Works
// // 1. Create context
// const ThemeContext = createContext('light');

// // 2. Provide value at top level
// <ThemeContext.Provider value="dark">
//   <App />
// </ThemeContext.Provider>

// // 3. Consume anywhere below
// function Button() {
//   const theme = useContext(ThemeContext);
//   return <button className={theme}>Click</button>;
// }
// Your Task
// Build a theme switcher using Context:

// Create a ThemeContext using createContext
// In App, track theme state ("light" or "dark"), starting with "light"
// Wrap children in ThemeContext.Provider with value { theme, toggleTheme }
// Create a ThemeDisplay component that:
// Uses useContext(ThemeContext) to read the theme
// Renders <div id="theme-display"> with text "Current theme: light" or "dark"
// Renders a button with id "toggle-btn" that calls toggleTheme
// ThemeDisplay must NOT receive theme as a prop — it must use Context

const ThemeContext = createContext();  //Create context

function ThemeDisplay() {
  // Use context here to get theme and toggleTheme
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div id="theme-display">
      {/* Display theme and toggle button */}
       Current theme: {theme}

      <button
        id="toggle-btn"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <ThemeContext.Provider value={ {theme, toggleTheme} }>
          <ThemeDisplay />
      </ThemeContext.Provider>
    </div>
  );
}
