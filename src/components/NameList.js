import React,{useState} from 'react'
import data from './data'

const NameList=()=>{

    const [people,setName] = useState(data)

    const removeItems=(id)=>{
        let items = people.filter((person)=>person.id !== id)
        setName(items)
    }
    return(
     

        <div className=' bg-indigo-900 min-h-screen'> 
               {
                   people.map((person)=>{
                    const {id,name,age,image} = person

                    return(

                     
                        <div key={id} className='main-control flex p-2 justify-center'>

                                 <div className=' bg-gray-200 w-96 p-4 rounded-xl'>
                                  <div className='image-section'>
                                       <img className=' w-11 rounded-full ' src={image} alt=''/>
                                  </div>
                                  <div className='flex justify-center space-x-14'>
                                       <h2>{name}</h2>
                                       <p>Age:{age}</p>
                                       <div className='  bg-purple-600 px-3 py-1 rounded text-white font-bold' >
                                       <button onClick={()=>removeItems(id)}>remove</button>
                                       </div>
                                       

                                       
                                  </div>
                                 
                                  </div>

                                  
                                  
                                 
                        </div> 
                                      
                        
                    )
                   })
                                       
               }
                                       <div className='flex justify-center'>
                                       <button className=' bg-purple-800 px-4 py-1 rounded text-white font-bold' onClick={()=>setName([])}>Clear Items</button>
                                       </div> 
                                      
             
                                                        
                                       
        </div>
                                       

        
    )
}

export default NameList