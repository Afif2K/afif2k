import { useState } from "react";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`app-sidebar ${showSidebar ? "show" : "hide"}`}>
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
        <button onClick={handleToggleSidebar}>
          {showSidebar ? "Hide" : "Show"}
        </button>
      </div>
      {showSidebar && (
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
              key={id}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
