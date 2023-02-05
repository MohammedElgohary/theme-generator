import { Flex } from "../../design/components/Grid/Flex";
import ColorSetter from "./components/ColorSetter";
import { SettingsContainer } from "./settings.styles";

export default function SettingsPage() {
  return (
    <SettingsContainer>
      <h1>Settings</h1>

      <Flex justifyContent="space-around">
        <ColorSetter type="primary" />
        <ColorSetter type="secondary" />
        <ColorSetter type="tertiary" />
        <ColorSetter type="quaternary" />
        <ColorSetter type="quinary" />
      </Flex>
    </SettingsContainer>
  );
}
