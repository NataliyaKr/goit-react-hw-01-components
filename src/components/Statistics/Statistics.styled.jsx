import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
width: 300px;
margin: 0 auto;
padding: 30px;
border-radius: 4px;
background-color: lightgrey;
`;

export const Title = styled.h2`
font-weight: 700;
font-size: 20px;
text-align: center;
text-transform: uppercase;
padding: 20px;
background-color: white;
border-radius: 4px;
`;

export const StatList = styled.ul`
display: flex;
justify-content: center;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
width: 50px;
border-radius: 2px;
`;

export const Label = styled.span`
font-weight: 500;
font-size: 16px;
`;

export const Percentage = styled.span`
font-weight: 700;
font-size: 18px;
`;