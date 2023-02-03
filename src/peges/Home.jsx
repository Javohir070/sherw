import React, {createContext, useContext} from 'react';
export let UserContext = createContext([]);
function Home() {
    let {state, setState} = useContext(UserContext);
    // console.log(abc);
    return (
        <div>
            {state?(<div>
                <div>Home</div>
                <div onClick={()=>setState(0)}>login  ichdan chiqish</div>
            </div>):(<div>
                <div>login</div>
                <div onClick={()=>setState(1)}>login in</div>
            </div>)}
        </div>
    );
}

export default Home;