// //stateless functional component: component nhưng không sử dụng state
// function Toggle1(){
//     return(
//         <div className="toggle"></div>
//     )
// }
// //stateful functional component: component có sử dụng state
// function Toggle1() {
//     const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }
import React,{useState} from "react";
import "./ToggleStyles.css";

function Toggle(){
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state
  // 4. update state
//   const array = useState(false);
  const [on, setOn]=useState(false);
//   console.log(on);
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div className={`spinner ${on?"active":""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </div>
  );
  
} 
export default Toggle;