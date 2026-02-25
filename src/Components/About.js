// import React, {useState} from 'react'

export default function About(props) {

  //ye neeche toggleStyle function aur myStyle state dark mode ke liye hai, lekin abhi dark mode ka button nahi hai, isliye comment out kar diya hai, abb mtstyle se bhi kaam chal jayega toh vo neeche bna rha hu.

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // })

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
  }


  // ye comment out wala code dark mode ke liye hai, lekin abhi dark mode ka button nahi hai, isliye comment out kar diya hai

  // const [btnText, setBtnText] = useState("Enable dark mode")
  
  // const toggleStyle = () =>{
  //   if(myStyle.color === "black"){
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     })
  //     setBtnText("Enable light mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     })
  //     setBtnText("Enable dark mode")
  //   }
  // }
   
  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
        {/* <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUlits is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        {/* <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        {/* <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
</div>

{/* ye button comment out kardiya hai , ye about us k neeche aata tha, lekin abhi dark mode ka button nahi hai, iske liye uper jo toggleStyle function hai, usko bhi comment out kar diya hai
 */}
{/* <div className="container my-3 mx-2 ">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
</div> */}
    </div>
  )
}
