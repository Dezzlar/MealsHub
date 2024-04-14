import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.components";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../MealsHub.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background_color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background_color: rgba(255, 255, 255, 1);
  padding: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 60px;
  font-weight: bold;
  color: rgb(255, 255, 255);
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
