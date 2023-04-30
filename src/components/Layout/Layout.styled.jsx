import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    color: #212121;
    text-decoration: none;
    
    
    &.active {
        color: purple;
    }
`;

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
`;