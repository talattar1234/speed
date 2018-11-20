import {createMuiTheme} from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import CONFIG from "../config";

const theme = createMuiTheme({
    direction: CONFIG.direction,
    palette: {
        type: "light",
        primary: blue
      },
    typography: {
        useNextVariants: true,
        htmlFontSize: 10,
      }
});

export default theme;

