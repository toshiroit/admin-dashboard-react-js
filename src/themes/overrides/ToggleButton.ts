// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - TABS ||============================== //

export default function ToggleButton(theme: Theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            borderColor: theme.palette.divider,
            color: theme.palette.text.disabled
          }
        }
      }
    }
  };
}
