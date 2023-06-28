import React from 'react'

export default function Alert(props) {
    const capatilze=(word)=>{
        let newWord= word[0].toUpperCase()+word.slice(1);
        return newWord;
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatilze(props.alert.type)}</strong> <span>{props.alert.msg}</span>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
