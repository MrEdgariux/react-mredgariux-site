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

const DiscordTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const TableHeader = styled.th`
    padding: 10px;
    font-size: 1.2rem;
    background-color: #3498db;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
`;

const TableData = styled.td`
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    text-align: center;
`;

const JoinButton = styled.button`
    color: #fff;
    background: rgba(60, 60, 60, 0.4);
    backdrop-filter: blur(10px);
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
        background-color: #3498db;
        border-color: #2980b9;
        color: #fff;
    }

    ${(props) => props.disabled && `
        background-color: #7f8c8d;
        cursor: not-allowed;
        &:hover {
            background-color: #7f8c8d;
        }
    `}
`;

export {Form, Textarea, FormGroup, Input, DiscordTable, TableHeader, TableData, JoinButton};