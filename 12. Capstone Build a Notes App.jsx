// Capstone: Build a Notes App
// Time to put it all together! Build a simple notes application using everything you've learned.

// Requirements
// Custom Hook useNotes:

// Manages an array of notes in state
// Each note: { id, text }
// Returns: { notes, addNote, deleteNote }
// addNote(text) creates a note with a unique id (use Date.now())
// deleteNote(id) removes a note by id
// Add Note Form:

// Input with id "note-input" for typing
// Button with id "add-btn" to add the note
// Clear input after adding
// Don't add empty notes
// Notes List:

// <ul id="notes-list"> containing all notes
// Each <li> displays the note text and a delete button with className="delete-btn"
// Note Count:

// <span id="note-count"> showing the number of notes
// Structure
// App
// ├── Note input + Add button
// ├── Note count
// └── Notes list
//     └── Note item (text + delete button) × N
// This is the final challenge — use state, events, lists, custom hooks, and composition!

const useNotes = () => {
  // notes state
  const [notes, setNotes] = useState([]);

  // add note
  const addNote = (text) => {
    // prevent empty notes
    if (text === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      text: text,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // delete note
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return {
    notes,
    addNote,
    deleteNote,
  };
};

function App() {
  // use custom hook
  const { notes, addNote, deleteNote } = useNotes();

  // input state
  const [inputValue, setInputValue] = useState("");

  // add button function
  const handleAdd = () => {
    addNote(inputValue);

    // clear input
    setInputValue("");
  };

  return (
    <div>
      <h1>My Notes</h1>

      <input
        id="note-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button id="add-btn" onClick={handleAdd}>
        Add
      </button>

      <br />
      <br />

      <span id="note-count">{notes.length}</span>

      <ul id="notes-list">
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}

            <button className="delete-btn" onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
