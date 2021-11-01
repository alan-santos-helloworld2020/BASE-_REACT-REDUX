import produce from 'immer'

const INITIAL_STATE = {
    clientes : []
}


const salvarReducer = (state = INITIAL_STATE,action)=>{
           
    switch (action.type) {
        case "SALVAR":
            return produce(state,(draft)=>{
                draft.clientes.push(action.clientes);
            })
            break;
    
        default:
            return state;
    }
    


}




export default salvarReducer;