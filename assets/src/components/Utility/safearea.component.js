import { StatusBar } from "react-native";
import styled from "styled-components";

export const SafeView = styled.SafeAreaView`
  flex: 1;
  backgroundcolor: ${(props) => props.theme.colors.brand.primary};
  margin-top: ${StatusBar.currentHeight}px;
`;
