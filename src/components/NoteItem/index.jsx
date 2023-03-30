import { Container} from "./styles";
import {FiX, FiPlus} from "react-icons/fi"

export function NoteItem({IsNew,value,onClick,...rest}){
    return(
        <Container isNew={IsNew}>
            <input 
            type="text" 
            value={value}
            readOnly={!IsNew}
            {...rest}
            />

            <button
            type="button"
            onClick={onClick}
            className={IsNew ? 'button-add': 'button-delete'}
            >
                {IsNew ? <FiPlus/> : <FiX/>}

            </button>

        </Container>

    )
    
    
}