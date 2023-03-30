import { Container, Form } from "./styles";

import { Background } from "./styles";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { PasswordInput } from "../../components/PasswordInput"

import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/Auth"
import { useState } from "react";




export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [notSeePassword, setNotSeePassword] = useState(false)
    const [checkCapsLock, setCheckCapsLock] = useState(false)

    const { signIn } = useAuth();

    function handleSignIn() {

        signIn({ email, password })
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
            <Form>
                <h1>Rocket Notes</h1>
                <span>Aplicação para salvar e gerenciar seus links úteis</span>
                <h2>Faça seu Login</h2>

                <div>
                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordInput
                        placeholder="Senha"
                        icon={FiLock}
                        onChange={(e) => setPassword(e.target.value)}

                    />

                    {
                        checkCapsLock &&
                        <p>
                            Caixa alta Ligada
                        </p>
                    }

                    <Button title="Entrar" onClick={handleSignIn} />
                </div>



                <Link to="/register">
                    Cadastrar usuário
                </Link>
            </Form>
            <Background />
        </Container>
    )
}