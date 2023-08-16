import styled from '@emotion/styled';

export const List = styled.ul`
margin: 70px;
`;
export const Item = styled.li`
display: flex;
align-items: center;
margin: 20px;
width: 330px;
padding: 15px;
background-color: pink;
border-radius: 8px;
margin-left: auto;
margin-right: auto;
`;
export const Status = styled.span`
width: 15px;
height: 15px;
margin-right: 15px;
border-radius: 50%;
background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
export const Avatar = styled.img`
margin-left: 15px;
width: 50px;
height: 50px;
`;
export const Name = styled.p`
margin-left: 25px;
text-align: center;
font-weight: 700;
font-size: 18px;
`;