import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
margin: 0 auto;
width: 360px;
padding: 10px;
border-collapse: collapse;
border: 2px solid grey;

& th,
& td {
    text-align: center;
    border-bottom: 1px solid grey;
    padding: 8px;
}

& th {
    font-weight: bold;
    background-color: lightblue;
}

& td {
    background-color: white;
}

& td:hover,
& td:hover ~ td {
    background-color: lightgrey;
}
`;
