import styled from "styled-components";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const FormGroup = styled.label`
    margin: 5px 0;
    width: 100%;
    text-align: center;
    color: white;
    font-family: monospace;
    background: rgba(40, 44, 52, 0.3);
    padding: 10px;
    border-radius: 10px;
`;

const Input = styled.input`
    padding: 8px;
    width: 100%;
    border: 2px solid #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    background: none;
    font-family: "Baloo 2",serif;
    text-align: center;
    color: white;
    border-radius: 4px;
    outline: none; /* Remove default outline on focus */
    box-sizing: border-box;
    transition: border-color 0.5s ease;
    
    &:focus {
        border-color: red;
    }
`;

const Textarea = styled.textarea`
    padding: 8px;
    width: 100%;
    height: 100px;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none; /* Remove default outline on focus */
    box-sizing: border-box;
    transition: border-color 0.5s ease;

    &:focus {
        border-color: red;
    }
`;

export {Form, Textarea, FormGroup, Input};