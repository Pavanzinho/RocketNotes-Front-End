import { FiArrowLeft } from "react-icons/fi"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Container } from "./styles";
import { Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Avatar } from "./styles"


import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/Auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"


export function Profile() {
    const { user, userUpdate } = useAuth()
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);


    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl)// avatar já existente no user;exibido em tela.
    const [avatarFile, setAvatarFile] = useState(null)// estado que receberá o novo avatar/será enviado para o backend.


    async function handleUpdateProfile() {
        const updated = {
            name: name,
            email: email,
            oldPassword: oldPassword,
            newPassword: newPassword,

        }
        const userUpdated = Object.assign(user, updated)
        await userUpdate({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)

    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <Container>
            <header>
                <button onClick={handleBack}>
                    <FiArrowLeft />
                </button>

            </header>
            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="Foto do Usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input      //  será utilizado para abrir a janela de carregar a imagem, ficará invisível,
                            //  o mesmo id da label, já que a label que irá conter a imagem onde se clicara para carregar 
                            //  o type="file"
                            type="file"
                            id="avatar"
                            onChange={handleChangeAvatar}
                        />


                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}

                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Salvar"
                    onClick={handleUpdateProfile}
                />

            </Form>
        </Container>
    )
}