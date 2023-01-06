import styled from 'styled-components';
import pattern from '../../assets/images/pattern-bg.png';
import arrow from '../../assets/images/icon-arrow.svg';

export const Headerstyle = styled.div`
	padding: 1.5rem 0 0 0;
	text-align: center;
	background-image: url(${pattern});
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
	height: 25vh;
	// border: 1px solid red;
`;
export const Form = styled.form`
	display: flex;
	max-width: 600px;
	width: 95%;
	margin: 1rem auto 3rem auto;
`;
export const H1 = styled.h1`
	color: white;
	font-weight: 500;
	font-size: clamp(1.3rem, 2vw, 1.5rem);
`;
export const H2 = styled.h2`
	color: #959595;
	font-weight: 500;
	font-size: clamp(0.7rem, 1.5vw, 0.85rem);
	text-align: left;
	margin-bottom: 1rem;
	@media only screen and (max-width: 600px) {
		margin-bottom: 0.25rem;
		font-size: 0.7rem;
		text-align: center;
	}
`;
export const H3 = styled.h3`
	color: #252525;
	font-weight: 500;
	font-size: clamp(0.9rem, 1.5vw, 1rem);
	@media only screen and (max-width: 600px) {
		font-size: 1.1rem;
	}
`;

export const Button = styled.button`
	border: none;
	color: white;
	background-color: black;
	width: 10%;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background-image: url(${arrow});
	background-repeat: no-repeat;
	background-position: center;
`;
export const LocatioInf = styled.div`
	padding: 1rem;
	// border: 1px solid red;
	position: absolute;
	transform: translateX(50%);
	max-width: 700px;
	width: 95%;
	z-index: 20;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	display: flex;
	justify-content: center;
	border-radius: 12px;
	background-color: #fff;
	// min-height: 100px;
	transition: 0.4s width ease-in-out;
	top: 77%;
	right: 50%;
	@media only screen and (max-width: 613px) {
		bottom: -4.5rem;
	}
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		bottom: -10.8rem;
		padding: 0;
	}
`;
export const Details = styled.div`
	padding: 0 15px;
	text-align: left;
	border-right: 1px solid #d8d8d8;
	// border: 1px solid black;

	@media only screen and (max-width: 600px) {
		margin-bottom: 1rem;
		border-right: 0;
		text-align: center;
	}
`;
export const Search = styled.input.attrs((props) => ({
	type: 'text',
	placeholder: 'search for any ip address or domain',
}))`
	width: 90%;
	padding: 15px;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	border: none;
	font-size: 1rem;
	&:focus {
		outline: none;
	}
`;
