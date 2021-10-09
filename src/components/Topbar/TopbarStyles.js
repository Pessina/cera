import styled from "styled-components";

export default styled.nav`
  width: 100vw;
  height: 141px;
  background-color: var(--pink);

  display: grid;
  grid-template-areas: "a b c";
  grid-template-columns: 256px 1fr 100px;
  align-items: center;

  padding: 15px 38px 35px 39px;
  color: white;
`;
