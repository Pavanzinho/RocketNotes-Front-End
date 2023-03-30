
import { Container } from "./styles"

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useState } from "react"


export function PasswordInput({ icon: Icon, ...rest }) {
    const [notSeePassword, setNotSeePassword] = useState(true)
    const [valuePassword, setValuePassword] = useState("")

    function handleShowPassword() {
        setNotSeePassword(!notSeePassword)
    }

    return (
        <Container {...rest}>

            {Icon && <Icon size={20} />}

            <input {...rest}
                type={notSeePassword ? "password" : "text"}
                onChange={(e) => setValuePassword(e.target.value)}
                
            />


            <button
                onClick={handleShowPassword}
                type="button">

                {
                    notSeePassword ?
                        <AiFillEye
                            name="eye"
                            size={20}
                        />
                        :
                        <AiFillEyeInvisible
                            name="invisibleEye"
                            size={20}
                        />

                }
            </button>



        </Container>
    )
}