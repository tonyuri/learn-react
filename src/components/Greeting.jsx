import React from 'react'


// Arrow function Component
const Greeting = ({name, age, position, isLoggedIn, hasMessage}) => {

    // 1. If-Else method
    // if (isLoggedIn) {
    //     return <div>Hello, {name} {age} {position}</div>
    // } else {
    //     return <div>Please log in to see the greeting.</div>
    // }
    
    // 2.Ternary Operator method using `(condition) ? expression1 : expression2`
    // and Logical AND `&&` operator method (short-circuit evaluation)
    return (
        <div>
            <p>{hasMessage && <span>คุณมีข้อความใหม่</span>}</p> 
            {isLoggedIn ? "welcome" : "please log in"}
        </div>
    )


}

 
export default Greeting