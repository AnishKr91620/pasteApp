import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { addToPaste,updateToPaste,resetAllPaste,removeToPaste } from '../features/pasteSlice'
import { useEffect } from 'react'


const Home = () => {
    const [title,setTitle] = useState("")
    const [value,setValue] = useState('')
    const dispatch = useDispatch()

    const[searchParams,setSearchParam] = useSearchParams()
    const pasteId = searchParams.get("pasteId")

    const allPastes = useSelector((state) => state.paste.pastes)

    function createPaste(){
        const paste = {
            title: title,
            value: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(), // Corrected date conversion
        };
        if(pasteId){
            //update
            dispatch(updateToPaste(paste));

        }
        else{
            //create
            dispatch(addToPaste(paste));

        }
        setTitle('');
        setValue('');
        if (!pasteId) {
            setSearchParam({}) // Clear search parameters if it's a new paste
        }
        
    }
    useEffect(() => {
        console.log("Detected pasteId:", pasteId);
        if(pasteId){
            const currPaste = allPastes.find((p) => p._id === pasteId)
            setTitle(currPaste.title)
            setValue(currPaste.value)
        }
    }, [pasteId]);
  return (
    <>
    <div className={"flex flex-col place-content-between"}>
        <div className={"flex flex-row gap-4 "}>
            <input type="text" placeholder='enter the title'
            value={title} onChange={(e) => setTitle(e.target.value)}
            className={"p-2 rounded-xl mt-2 w-[75%]"}/>

            <button className={"p-2 rounded-xl mt-2"} onClick={createPaste}>
                {
                    pasteId?"Upadate Paste":"Create Paste"
                }
            </button>
        </div>
        <div className="mt-5">
            <textarea
                placeholder="Enter the content"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows="20" // Set the number of rows
                className="p-2 rounded-xl mt-2 min-w-[500px] border border-gray-300"
            />
        </div>
    </div>
        
    </>
  )
}

export default Home
