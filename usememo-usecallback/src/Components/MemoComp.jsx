import React from 'react'
// Memo() : used to control renders
// when ever props is changes component re render

const MemoComp = ({User}) => {
    console.log("Memo Componet Rendered")
    return (
        <div>
            ****  Memo component  ****
            {/* countValue : {newcount} */}
            <h2>
                Login User : {User.Name}
                Cart Count : {User.CartCount}
            </h2>
        </div>
    )
}

// const newComp = React.memo(MemoComp)

// export default MemoComp

export default React.memo(MemoComp)