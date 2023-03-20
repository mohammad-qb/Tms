import { extendTheme } from "@chakra-ui/react";
import ColorsTheme from "./colors";
import ButtonTheme from "./components/buttonTheme";
import CheckboxTheme from "./components/checkboxTheme";
import TextTheme from "./components/textTheme";
import StylesTheme from "./styles";

const override = {
  styles: StylesTheme,
  colors: ColorsTheme,
  components: {
    Button: ButtonTheme,
    Text: TextTheme,
    Checkbox: CheckboxTheme,
  },
};

export const theme = extendTheme(override);
