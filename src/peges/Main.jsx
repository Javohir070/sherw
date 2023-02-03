import React, {useContext} from 'react';
import { UserContext } from '../peges/Home';
function Main() {
    let {state, setState} = useContext(UserContext);
    // console.log(abc);
    return (
        <div>
            {state?(<div>
                <div>Mani</div>
                <div onClick={()=>setState(0)}>login  ichdan chiqish</div>
            </div>):(<div>
                <div>login</div>
                <div onClick={()=>setState(1)}>login in</div>
            </div>)};
        </div>
    );
}

export default Main;