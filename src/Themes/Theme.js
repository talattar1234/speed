import {createMuiTheme} from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import CONFIG from "../config";

const theme = createMuiTheme({
    direction: CONFIG.direction,
    palette: {
        primary: blue
      },
    typography: {
        useNextVariants: true,
        htmlFontSize: 16,
      }
});

export default theme;

