import { Container, Form } from "./styles";

import { Background } from "./styles";

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { PasswordInput } from "../../components/PasswordInput";

import { FiLogIn, FiMail, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom";
import { api } from "../../services/api"
import { useState } from "react";



export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkCapsLock, setCheckCapsLock] = useState(false)

    async function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Todos os campos precisam ser preeenchidos')
        };

        try {
            const response = await api.post("/users", { name, email, password })
            alert("Usuário cadastrado com sucesso.")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        }
    }

    function handleCheckCapsLock(event) {
        if (event.getModifierState("CapsLock")) {
            setCheckCapsLock(true)
        } else {
            setCheckCapsLock(false)
        }
    }
    return (
        <Container onKeyUp={handleCheckCapsLock}>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <span>Aplicação para salvar e gerenciar seus links úteis</span>
                <h2>Crie sua conta</h2>

                <div>
                    <Input
                        placeholder="Nome"
                        type="text"
                        icon={FiLogIn}
                        onChange={event => setName(event.target.value)}
                    />

                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        onChange={event => setEmail(event.target.value)}
                    />


                    <PasswordInput
                        placeholder="Senha"
                        icon={FiLock}
                        onChange={event => setPassword(event.target.value)}

                    />

                    {
                        checkCapsLock &&
                        <p>
                            Caixa alta Ligada
                        </p>
                    }


                    <Button title="Cadastrar" onClick={handleSignUp} />
                </div>

                <Link to="/">
                    Voltar para login
                </Link>

            </Form>

        </Container>



    )


}


