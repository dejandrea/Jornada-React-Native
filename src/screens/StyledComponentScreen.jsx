import { useNavigation } from "@react-navigation/native";
import StyledContainer from "../components/StyledContainer";
import StyledTitle from "../components/StyledTitle";
import StyledButton from "../components/StyledButton";

export default function StyledComponentScreen() {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <StyledContainer color="#e6d3d5">
      <StyledTitle>Styled Components</StyledTitle>
      <StyledButton bgColor="#1c1a1d" color="#fff" onPress={navigateBack}>
        Voltar
      </StyledButton>
    </StyledContainer>
  );
}
