import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ note }) => {
  const noteDate = moment(note.date);

  const dispatch = useDispatch();

  const handleEntryClick = (e) => {
    e.preventDefault();
    dispatch(activeNote(note.id, note));
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {note.url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${note.url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{note.title}</p>
        <p className="journal__entry-content">{note.body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
