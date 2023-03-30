import { Form } from "./styles";
import { Container } from "./styles";


import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";



export function New() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate();

    //LINKS
    function handleAddLink() {
        if (newLink == "") {
            alert("Não é possivel cadastrar um campo vazio")
        } else {
            setLinks(prevState => [...prevState, newLink])
            setNewLink("")
        }
    }

    //TAGS
    function handleDeleteLink(deleted) {
        setLinks(prevState => prevState.filter((links) => links !== deleted))
    }

    function handleAddTag() {
        if (newTag == "") {
            alert("Não é possivel cadastrar um campo vazio")
        }
        else {
            setTags(prevState => [...prevState, newTag])
            setNewTag("")
        }
    }

    function handleDeleteTag(deleted) {
        setTags(prevState => prevState.filter((tag) => tag !== deleted))
    }

    function handleBack() {
        navigate(-1)
    }


    async function handleNewNote() {

        //Validações dos campos, avisando o cliente que ele digitou em algum dos campos, porém não adicionou 
        if (!title) {
            alert("Digite o título de sua nota antes de cria-la")
            return
        }


        if (newTag) {
            alert(`você inseriu um texto no campo de tag, mas não ciclou em "adicionar". Clique em "adicionar" ou deixe o campo vazio`)
            return
        }

        if (newLink) {
            alert(`você inseriu um texto no campo de link, mas não ciclou em "adicionar". Clique em "adicionar" ou deixe o campo vazio`)
            return
        }

        const response = await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        alert("nota criada com sucesso")
        navigate(-1)

    }



    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>
                            Introdução ao React
                        </h1>

                        <ButtonText
                            title="Voltar"
                            onClick={handleBack}>

                        </ButtonText>
                    </header>


                    <Input
                        placeholder="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea
                        placeholder="Observações "
                        onChange={e => setDescription(e.target.value)}

                    />

                    <Section title="Links Úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={index}
                                    value={link}
                                    onClick={() => { handleDeleteLink(link) }}
                                // quando a função tem parametro, usa-se arrow function;
                                />
                            ))
                        }

                        <NoteItem
                            IsNew
                            placeholder="Novo Link"
                            value={newLink}
                            onClick={handleAddLink}
                            onChange={e => setNewLink(e.target.value)}
                        />

                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">

                            {
                                tags.map((tag, index) => (

                                    <NoteItem
                                        key={index}
                                        value={tag}
                                        onClick={() => { handleDeleteTag(tag) }}
                                    />
                                ))
                            }

                            <NoteItem
                                IsNew
                                placeholder="Nova Tag"
                                value={newTag}
                                onClick={handleAddTag}
                                onChange={e => setNewTag(e.target.value)}

                            />

                        </div>
                    </Section>
                    <Button
                        title="Salvar"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )


}