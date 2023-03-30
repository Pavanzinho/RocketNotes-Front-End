import {Container} from './styles'

export function Button({title, loading,...rest}){
    return(
        <Container 
            type="button" 
            disabled={loading}
            
            {...rest}

        >
            {loading ? 'Carregando...' : title}
           
            
        </Container>
    )
}
    /*Outra forma é desestruturando o props direto: 
        export function Button({title}){
            return(
                <Container type="button">
                    {title}
                </Container>
            )
        }
    */