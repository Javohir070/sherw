import React,{useState} from 'react';
import { UserContext } from '../peges/Home';
import { HomesContext } from './home';
import { UserContext1 } from './user';

function MainContext({children}) {
    let [state, setState] = useState(false);
    return (
        <UserContext.Provider value={{state, setState}}>
            <UserContext1.Provider value={'salom'}>
                <HomesContext.Provider value={'salom'}>
                    {children}
                </HomesContext.Provider>
            </UserContext1.Provider>
        </UserContext.Provider>
    );
}

export default MainContext;