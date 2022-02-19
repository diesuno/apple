import React, {useState} from 'react';

export const Input = () => {
    const [data, setData] = useState({letra: ""})
    const inputHandler = (event) =>{

        
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }
    console.log(data);
  return <div>
      <div>
          <input name='letra' type="text"onClick={inputHandler} />
      </div>
  </div>;
};
