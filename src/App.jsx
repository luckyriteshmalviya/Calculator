import { useState } from 'react'
function form() {
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")  
  const [count, setcount] = useState(0)
  return (
    <>
    <form>

   <input type="text" placeholder='Name' value={fname}  onChange={(e)=>{setfname(e.target.value)}} />
   <input type="text" placeholder='Name' value={lname}  onChange={(e)=>{setlname(e.target.value)}} />
   <div>
   <button onClick={(e)=>{e.preventDefault(); setcount(count+1)}}>Count</button>
   </div>
    </form>
    <p>Hi I am {fname} {lname}</p>
    <p>count no. : {count}</p>
    </>
  )
}

export default form
