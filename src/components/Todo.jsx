import React , {useState, useEffect} from 'react';
// import logo from './Assets/to-do.png';
import './todo.css'



// -------------------------get data------------------------------

const getItems = ()=>{
    let list = localStorage.getItem('lists')

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return[]
    }
}

const Todo = () => {

    const [userInput, setUserInput]= useState('');

    const [items, setItems] = useState(getItems())


    // ---------------------addItem-----------------------
   
    const addItem = ()=>{

        if(!userInput){
                
                // Nothing 


        }else{

            setItems([...items , userInput]);
            setUserInput('')
        }


    }
    

    // --------------------------deleteItem-------------------


    const deleteItem = (id)=>{
        console.log(id)
        const updated = items.filter((elem, ind)=>{
            return ind !== id; 
        });
        setItems(updated)
    }



    // -----------------------------clearall--------------------------

    const clearall= ()=>{
        setItems([]);
    }



    // ------------------------------localStorage-------------------------------

    useEffect(() => {
        localStorage.setItem('lists' , JSON.stringify(items))

        
    }, [items])

      
    
    return (
        <>
          <div className="main-body">

                <div className="contents">
                    <div className="header-image">
                        <img src="/Assets/to-do.png" alt="" />
                        
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Add Item"
                        
                        value={userInput}
                        onChange={(e)=> setUserInput(e.target.value)}
                        
                        />
                        <i className="fas fa-plus add-btn" id="myBtn" onClick={addItem}   ></i>
                    </div>

                    <div className="items">

                        {
                            items.map((elem , ind) => {

                                return(
                                    <div className="item">
                                        <div className="title" key={ind}>

                                            <h3>{elem}</h3>
                                        </div>
                                        <div className="icon" onClick={()=> deleteItem(ind)}>
                                            <i className="far fa-trash-alt delete-btn" > </i>

                                        </div>
                  

                        
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    <div className="button">
                        <button onClick={clearall} >Clear All</button>
                    </div>
                </div>

            </div>  
        </>
    )
}

export default Todo
