import React,{useState} from 'react'
import data from './data'

const NameList=()=>{

    const [name,setName] = useState(data)
    return(
        <div> 
               {
                   name.map((person)=>{
                    const {id,name,age,image} = person

                    return(
                        <div key={id} className='main-control'>
                                  <div className='image-section'>
                                       <img src={image} alt=''/>
                                  </div>
                                  <div>
                                       <h2>{name}</h2>
                                       <p>{age}</p>
                                       
                                  </div>
                                 <button onClick={()=>setName([])}>Clear Items</button>
                        </div> 
                    )
                   })
               }
        </div>
    )
}

export default NameList