import React from "react";

const  validation = (props) => {
    let validationMessage ;

    if (props.inputLength <= 5){
        validationMessage = 'Text too short';
    }else{
        validationMessage = 'Text length enough'
    }
    return(
        <div>
           <p>{validationMessage}</p>
        </div>
    );
}
;
export default validation