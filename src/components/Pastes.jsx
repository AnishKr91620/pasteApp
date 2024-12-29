import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { removeToPaste } from '../features/pasteSlice';   

const Pastes = () => {
    const dispatch = useDispatch()
    const pastes = useSelector((state) => state.paste.pastes)
    const [searchData,setSearchData] = useState('')
    const filterData = pastes.filter((paste) =>
        paste.title.toLowerCase().includes(searchData.toLowerCase())
      )

    const handleRem = (id) => {
        dispatch(removeToPaste(id));
    };
    const handleUpdate = (id) => {
        
    };
    const handleView = (id) => {
        
    };
  return (
    <div>
        <input type="search" placeholder='Search'
        className={"p-2 rounded-xl mt-2 w-[500px]"}
        value={searchData} onChange={(e) => setSearchData(e.target.value)} />

        <div className={"flex flex-col"}>
            {
                filterData.length > 0 &&
                filterData.map(
                    (pastes) => {
                        return(
                            <div key={pastes._id} className={"p-2 border rounded-xl mt-2 w-[500px] min-h-[100px] max-h-[100px] overflow-hidden"}>
                                 <div>
                                    <button>
                                        {/* <a href={`/?pastesId=${pastes._id}`}>Upd</a> */}
                                        <a href={`/?pasteId=${pastes._id}`}>Upd</a>
                                        
                                    </button>
                                    <button  onClick={() => handleRem(pastes._id)}>Rem</button>
                                    <button>
                                        <a href={`/pastes/pasteId=${[pastes._id]}`}>View</a>
                                    </button>
                                </div>
                                <div>{pastes.title}</div>
                                <div>{pastes.value}</div>
                                

                            </div>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Pastes
