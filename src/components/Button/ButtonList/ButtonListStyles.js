import styled from "styled-components";

export default styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  & > button {
    margin: 12px 0;
  }
`;
