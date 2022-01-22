import {useState} from "react"
import {useEffect} from "react"

const ItemListContainer = (greeting) => {
    //console.log(greeting);
    const [count, setCount] = useState(0)
    //const objPersona = arrayState[0]
    //const count = 0
    const obj = {nombre: "Diego", ape: "Bruno"}
    const handlerCount = () =>{
        setCount(count+2)//count++
    }
    useEffect(()=>{
        console.log("carge asincronica");
    })
  
    return (
        <div>

            
            <h1>{greeting.tit}</h1>

            {count}
            <button onClick={handlerCount}>Aumentar</button>
        </div>
    )
    
}

export default ItemListContainer
