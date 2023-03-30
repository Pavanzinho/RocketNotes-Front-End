import { Container, Links, Content } from './styles'
import { Header } from "../../components/Header"
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from "../../components/ButtonText"

import { Tag } from "../../components/Tag"

import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'




export function Details() {
    const [data, setData] = useState(null)
    const navigate = useNavigate();
    const params = useParams();
    // acessa o parametro que esta no navegador, como lá em home usamos u navigate para acessar
    //a rota "notes/${id} no navegador, consiguimos capturar o valor desse id aqui"

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente excluir esta nota ?")

        if (confirm) {
            await api.delete(`/notes/${params.id}`);
            navigate(-1)
        }
    }


    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)

            setData(response.data)


        }
        fetchNote()

    }, [])


    return (
        <Container>
            <Header />

            {
                data &&
                <main>
                    <Content>
                        <ButtonText
                            title="Excluir nota"
                            onClick={handleRemove}
                        />

                        <h1>
                            {data.title}
                        </h1>

                        <p>
                            {data.description}
                        </p>

                        {
                            data.links &&
                            <Section title="Links úteis">
                                <Links>
                                    {
                                        data.links.map(link =>
                                            < li key={String(link.id)}>
                                                <a
                                                    target="_blank"
                                                    href={link.url}>
                                                    {link.url}
                                                </a>
                                            </li>
                                        )
                                    }

                                </Links>
                            </Section>
                        }

                        {data.tags &&
                            <Section title="Marcadores">

                                {
                                    data.tags.map((tag) => (
                                        <Tag
                                            key={String(tag.id)}
                                            title={tag.name} />
                                    ))
                                }


                            </Section>
                        }
                        <Button
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </Content>
                </main>}
        </Container >
    )
}

/*<Button title="Entrar"/> :
      criação de propriedade que fica dentro do objeto "props", do react mesmo.
      Assim, lá na construção do componente, neste caso o button, pode-se acessar essa propriedade utilizando
      "props.propriedade"
*/