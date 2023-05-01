import { HiArrowLeft } from "react-icons/hi";
import { StyledButton, StyledLink } from "./BackLink.styled";
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            <StyledButton type="button"><HiArrowLeft size="16" />
                {children}</StyledButton>
        </StyledLink>
    );
};

BackLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}
