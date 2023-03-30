import { Container } from "./styles";




export function Section({title,children}){ 
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}
/* 
"children" é um parametro específico do react, ele, neste caso, significa que tudo que eu colocar dentro do Container 
da Sections, vai ser adicionado, assim, não é necessário definir conteudo especifico para a section, se torna apenas um espaço
organizado e configurado para receber qualquer coisa que for colocado dentro e colocar logo em seguida do h2 ,
Ou seja, ao usar um componente, que não tem conteudo ou configuração de propriedades, o children é usado para aceitar qualquer
componente que for colocado dentro do Container de Sections.

*/

