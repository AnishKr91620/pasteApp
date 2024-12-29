import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste } from '../features/pasteSlice';

const ViewPaste = () => {
  const { id } = useParams(); // Extract pasteId from the URL

    const pasteId = id.split('=')[1]; // Extract the part after '='
    console.log(pasteId);
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === pasteId);

  console.log("Paste ID from URL:", pasteId);  // Debugging log
  console.log("All Pastes:", allPastes);      // Debugging log
  console.log("Selected Paste:", paste);      // Debugging log
  const dispatch = useDispatch();

  if (!paste) {
    return <div>Paste not found</div>;
  }
  function handleAddToMypaste(){
    dispatch(addToPaste(paste))
  }

  return (
    <div className="flex flex-col place-content-between">
      <div className="flex flex-row gap-4">
        <input
          type="text"
          placeholder="The title"
          value={paste.title}
          readOnly
          className="p-2 rounded-xl mt-2 w-[75%]"
        />
        <button className="p-2 rounded-xl mt-2" onClick={handleAddToMypaste}>Add To MyPaste</button>
      </div>
      <div className="mt-5">
        <textarea
          placeholder="The content"
          value={paste.value}
          readOnly
          rows="20"
          className="p-2 rounded-xl mt-2 min-w-[500px] border border-gray-300"
        />
      </div>
    </div>
  );
};

export default ViewPaste;
