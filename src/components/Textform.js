import React , {useState} from 'react'

// rfc extension code

export default function Textform(props) {

const handleUpClick= () => {
//    console.log("Uppercase was clicked"+text);
   let newText = mytext.toUpperCase();
   setText(newText);
   props.showAlert("Converted to UpperCase","success");
}


const handleLoClick= () => {
    //    console.log("Uppercase was clicked"+text);
       let newText = mytext.toLowerCase();
       setText(newText);
       props.showAlert("Converted to LowerCase","success");
}

const handleCaClick= () => {
    //    console.log("Uppercase was clicked"+text);
    let newText= mytext.slice(0,1).toUpperCase() + mytext.slice(1, mytext.length)
       setText(newText);
       props.showAlert("Capitalized First Letter","success");
}

const handleClClick= () => {
    //    console.log("Uppercase was clicked"+text);
    // let newText = '';
    setText('');
    // setText(newText);
    props.showAlert("Cleared Input Field", "warning") ;
}

const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied from clipboard","success");
}

const handleExtraSpace = () => {
    let data1=mytext.trim().split('  ').filter(word=>word!=='')
    let newText=data1.join(' ');
    setText(newText);
    props.showAlert("Removed extra space from clipboard","success");
};


const handleOnChange= (event) => {
    // console.log("handleOnChange click onchange");
    setText(event.target.value);
 }

const [mytext,setText] = useState('');
// text = "new text"; //wrong way to change the state 
//setText("new Text"); //right way to change the state 
    return (
        <>
        <div className="container">
            <div  style={{color : props.mode === 'light'? 'black':'white' }}>
                <h1 >{props.taheading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value ={mytext} id="myBox" rows="9" onChange={handleOnChange}
                style={{backgroundColor : props.mode === 'dark'? 'grey':'white',color : props.mode === 'light'? 'black':'white' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCaClick}>Convert to Capatlize</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Extra Remove Space</button>

                
            </div>
            <div className='container my-3' style={{color : props.mode === 'light'? 'black':'white' }}>
                <h2>Your Text Summary</h2>
                <p>these are {mytext.split("").length} and  {mytext.length}</p>
                <p>{0.008*mytext.split("").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{mytext.length>0?mytext:"Enter something in the text box above to preview it here"}</p>
            </div>
        </div>
        </>
    
  )
}


