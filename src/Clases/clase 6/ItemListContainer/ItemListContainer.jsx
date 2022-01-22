
const task = new Promise( (res,rej)=>{
    //Accion
     let condicion = true
    if(condicion){
        
        setTimeout(()=>{
            res([
                {name:"iphone 13 pro",
                description:"pantalla oled",
                stock: 15},
                {name:"iphone 13",
                description:"pantalla retina",
                stock: 25},
                {name:"iphone 13 mini",
                description:"pantalla retina",
                stock: 35},
            ])

        },3000)
    }else{

        rej("404 not found")
    }
   
})
const ItemListContainer = () => {
    task
    .then(res => {console.log(res)
   //throw new Error ("esto  es un error despues de la respuesta")
  // return res
    })
    //.then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
    //.finally(()=>console.log("si o si al final"))
    return (
        <div>

      
        </div>
    )
    
}

export default ItemListContainer
