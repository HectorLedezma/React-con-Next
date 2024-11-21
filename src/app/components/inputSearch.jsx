'use client'

import { FaSearch } from "react-icons/fa";
import { useState } from "react";


function InputSearch(props){

    const [active,SetActive] = useState(true);

    return(
        <div className="input-search-box flex primary-bg-op items-center p-1 rounded">
            <input 
                className={`
                    transparent 
                    border-none full-width 
                    border-slate-0
                    outline outline-0 outline-offset-0
                `+(active?" input-search-active":" input-search-inactive")
                }
                placeholder={props.placeholder}
                type="text"
            />
            <FaSearch role="button" className="input-search-icon m-1" onClick={
                ev=>{
                    ev.preventDefault();
                    SetActive(!active);
                }
            }/>
        </div>
    )
}

export default InputSearch