import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const Contact = () => {
    const {register, unregister, handleSubmit, setValue, errors} = useForm();

    const submitEmail = (data) => {
        console.log(data);
    };

    useEffect(() => {
        register(
            "email",
            { 
                required: "O campo Email não pode estar em branco",
                pattern: { 
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Email inválido' 
                        } 
            }
        );

        register("name");
        register("message");
    
        return () => {
            unregister("email");
            unregister("name");
            unregister("message");
        }
    }, [register, unregister]);
     
     
    return(
        <StyledDivContainerMain>
            <form onSubmit={handleSubmit(submitEmail)}>
                <label htmlFor="name">Nome</label>
                <input type='text' id="name" onChange={(e) => setValue("name", e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type='text' id="email" onChange={(e) => setValue("email", e.target.value)} />
                {errors.email && <h4>{errors.email.message}</h4>}

                <label htmlFor="message">Mensagem</label>
                <textarea type='text-area' id="message" onChange={(e) => setValue("message", e.target.value)} />

                <input type="submit" value="Enviar" />
            </form>
        </StyledDivContainerMain>    
    );
}

export default Contact;

const StyledDivContainerMain = styled.div`
    --highlight-color: #4A38FF;

    width: 100%;
    height: 100vh;
    background-color: #e2e2e2;
    display: flex;

    form{
        width: 50%;
        margin: auto;

        label{
            color: black;
            font-size: 17px;
            letter-spacing: 1px;
        }
        
        input{
            height: 35px;
            width: 100%;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 15px;
            margin-bottom: 15px;
        }

        input[type="submit"]{
            background-color: var(--highlight-color);
            height: 45px;
            width: 95px;
            color: white;
            font-size: 17px;
            cursor: pointer;

            @media(max-width: 992px){
                height: 40px;
                width: 75px;
                font-size: 15px;
            }
        }

        textarea{
            width: 100%;
            border: none;
            outline: none;
            height: 30vh;
            margin-bottom: 15px;
            border-radius: 5px;
        }

        h4{
            margin-top: -10px;
            color: red;
        }
    }

    
`;