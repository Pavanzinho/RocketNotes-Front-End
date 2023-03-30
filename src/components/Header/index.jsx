import { Container, Logout, Profile } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from "../../hooks/Auth"

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"
import { useNavigate } from "react-router-dom";

export function Header() {
    
    const { user, signOut } = useAuth();
   
    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();

    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile to="/profile">
                <img
                    src={avatarUrl}
                    alt="Foto de perfil"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>

            </Profile>

            <Logout onClick={ handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}