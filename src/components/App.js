import React, { useState } from "react";
import "./../styles/App.css";



const App = () => {

  let [obj, setObj] = useState([
    {
      id: 1,
      name: "",
      age: "",
    },
  ]);

  function handleChange(e,index) {
    const { name, value } = e.target;

    setObj((prev) => (
      prev.map((element,i)=>(
        i === index ? {...element , [name] : value} : (element)
      ))
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = obj.map(({name,age})=> ({name,age}));

    console.log(formdata);
  }

  function addTask() {
    setObj((prev)=>
    [...prev,
      {
        id : prev.length+1,
        name : "",
        age : ""
      }
    ]
   )
  }

  function removeTask(index){
     setObj((prev)=> prev.filter((element,i) => i !== index))
  }

  return (
    <div>
      {

      obj.map((element,index) => (
        <form onSubmit={handleSubmit} key={index}>
          <input
            type="text"
            value={element.name}
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e,index)}
          />
          <input
            type="number"
            value={element.age}
            name="age"
            placeholder="Age"
            onChange={(e)=> handleChange(e,index)}
          />
          <button type="button" onClick={()=>removeTask(index)}>Remove</button>
          <button type="submit">Submit</button>
        </form>
      ))

      }

      <button type="button" onClick={addTask}>
        Add More...
      </button>


    </div>
  );
};

export default App;
