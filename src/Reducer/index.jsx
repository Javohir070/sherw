import React,{useReducer} from 'react';
function Reducer() {
    let reduce = (state, payload)=>{
        switch(payload.tayp){
            case 'mins':
                return{...state , count:state.count-1};
            case 'puls':
                return{...state , count:state.count+1};
            case 'inputvaue':
                return{...state , input:payload.value};
            case 'hisob':
                return{...state , count:state.count + +state.input};
                default:
        }
    }
    let [state, pispatch]=useReducer(reduce,{count:0, input:0});
    return (
        <div>
            <input type="number" onChange={({target})=>pispatch({tayp:'inputvaue', value:target.value})} />
            <span onClick={()=>pispatch({tayp:'hisob'})}>add</span>
            <div onClick={()=>pispatch({tayp:'mins'})}>-</div>
               <div>count: {state.count}</div>
            <div onClick={()=>pispatch({tayp:'puls'})}>+</div>
        </div>
    );
}

export default Reducer;
