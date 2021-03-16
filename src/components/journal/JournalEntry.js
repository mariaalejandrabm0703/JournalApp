import React from "react";
import moment from 'moment';

export const JournalEntry = ({ note }) => {

const noteDate = moment(note.date)
console.log(noteDate)

  return (
    <div className="journal__entry pointer">
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
        <p className="journal__entry-title">{note.tittle}</p>
        <p className="journal__entry-content">{note.body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};
