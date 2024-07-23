import React, { useRef } from 'react';

function Sscmemo() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef = useRef();
 
    return (
  <div>
  <form >
    <h1>marks sheet</h1>
  <div>
    <div>
        <label>First Name:</label>
        <input type="text" ref={firstNameInputRef}></input>
     </div>
        <label>Last Name:</label>
        <input type="text" ref={lastNameInputRef }></input>
     </div>
     <div>
        <label>Telugu</label>
        <input type="number" ref={telInputRef}></input>
     </div>
     <div>
        <label>English</label>
        <input type="number" ref={engInputRef}></input>
     </div>
     <div>
        <label>Hindi</label>
        <input type="number" ref={hindiInputRef}></input>
     </div>
     <div>
        <label>Maths</label>
        <input type="number" ref={mathsInputRef}></input>
     </div>
     <div>
        <label>Science</label>
        <input type="number"ref={sciInputRef} ></input>
     </div>
     <div>
        <label>Social</label>
        <input type="number" ref={socInputRef}></input>
     </div>
     <div>
        <button type="button" onClick={()=>{
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let telMarks = Number(telInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let hindiMarks = Number(hindiInputRef.current.value);
            let mathsMarks = Number(mathsInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);

            let totalMarks = telMarks+engMarks+hindiMarks+mathsMarks+sciMarks+socMarks;
          //alert(enginputRef.current.value);
          alert(`Total Marks are ${totalMarks}`);
          resultParaRef.current.innerHTML = `${firstName} ${lastName} got total Marks are ${totalMarks}`;
          console.log(totalMarks);


        }}>Calculate Result</button>
     </div>
    <p ref={resultParaRef}>Please Enter values and Click Calculate</p>
    </form>
    </div>
  )
}

export default Sscmemo