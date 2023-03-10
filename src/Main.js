
const Main = ({ activeNote, onUpdateNote, onSaveNote }) => {
  const onEditField = (field, value) => {
    // Remove any Markdown syntax from the value
    value = value.replace(/(\*{2}|_{2}|`)(.*?)\1/gm, "$2");
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };
  

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <div className="note-edit-header">
          <input
            type="text"
            id="title"
            placeholder="Note Title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          />
          <div className="note-edit-formatting">
            <button
              onClick={() =>
                onEditField("body", `${activeNote.body} <strong>B</strong>`)
              }
            >
              <strong>B</strong>
            </button>
            <button
              onClick={() =>
                onEditField("body", `${activeNote.body} <em>I</em>`)
              }
            >
              <em>I</em>
            </button>
            <button
              onClick={() =>
                onEditField("body", `${activeNote.body} <u>U</u>`)
              }
            >
              <u>U</u>
            </button>
            <select
              onChange={(e) =>
                onEditField("body", `##${e.target.value} ${activeNote.body}`)
              }
            >
              <option value="">Font size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <button className="save-button" onClick={onSaveNote}>Save</button>
        </div>
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Main;
