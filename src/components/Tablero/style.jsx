import styled from 'styled-components';

export const TableroContainer = styled.div`
    width: max-content;
    background: #000000;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
    margin-bottom: 30px;
    justify-items: center;
`;

export const Casilla = styled.div`
    width: 150px;
    height: 150px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    cursor: pointer;

    &:hover{
        background: #ccc;
    }
`;