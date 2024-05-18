import React, { useState } from 'react'

function TodoList(){
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity(){
        // setlistData([...listData, activity]);//asynchronous way
        //synchronous way
        setlistData((listData)=>{
            const updatedList = [...listData,activity];
            setActivity('');//jayre add button click kari a to biju kai lakhvanu hoy to tya junu lakhelu jatu rahe.
            return updatedList;
        })
    }
    function removeactivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i !== id;
        })
        setlistData(updatedListData);
    }   
    function removeAll(){
        setlistData([]);
    }
    return(
        <>
        <div className='container'>
            <div className='header'>Todo List</div>
            <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
            <button onClick={addActivity}>Add</button>
            <p className='list-heading'>Here is your List :{")"}</p>
            {listData !== [] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                         <div className='listdata'>{data}</div>
                         <div className='btn-position'>
                            <button onClick={()=>removeactivity(i)}>remove</button>
                         </div>
                    </p>
                    </>
                )
            })}
            {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>};
        </div>
        
        </>
    )
}

export  default TodoList