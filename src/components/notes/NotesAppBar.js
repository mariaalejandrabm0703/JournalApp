import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUpLoading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePicture = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
      const file = e.target.files[0]
      if(file){
        dispatch(startUpLoading(file));
      }
  };

  return (
    <div className="notes__appbar" onClick={handlePicture}>
      <span>{active.date}</span>

      <input
        id="fileSelector"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn">Picture</button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
