import React from 'react';

import styled, { keyframes } from 'styled-components';

import logo from '../assets/sangam-logo.jpg';

const fadeIn = keyframes`
0% {
    opacity:.5;
}
100% {
    opacity:1;
}
`;

const StyledHeader = styled.div`
	width: 100%;
	height: 100px;
`;

const StyledNav = styled.nav`
	width: 100%;
	height: 40px;
	background: ${({ theme }) => theme.colors.main};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLink = styled.a`
	border: 1px solid mediumseagreen;
	padding: 8px 55px 8px 55px;
	font-size: 18px;
	color: white;
	text-align: center;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.colors.dark};
        /* animation: 1s ${fadeIn} ease-in; */
	}
`;

const StyledLogo = styled.img`
	height: 80px;
	width: 130px;
	margin: 10px;
`;

export default function Header(props) {
	return (
		<div>
			<StyledHeader>
				<StyledLogo src={logo} />
			</StyledHeader>
			<StyledNav>
				<StyledLink>Home</StyledLink>
				<StyledLink>Delivery</StyledLink>
				<StyledLink>Payments</StyledLink>
				<StyledLink>Contact</StyledLink>
			</StyledNav>
		</div>
	);
}
