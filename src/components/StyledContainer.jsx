import styled from "styled-components/native";

export default styled.View`
    flex:1;
    margin: 32px 0 0;
    padding: 16px;
    background-color:${(props) => props.theme.colors.red};
`;