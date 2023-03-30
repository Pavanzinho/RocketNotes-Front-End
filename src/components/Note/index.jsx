
import { Container } from "./styles";
import { Tag } from "../../components/Tag"

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(data => <Tag key={data.id} title={data.name} />)
                    }
                </footer>



            }



        </Container>
    )
}