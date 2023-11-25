import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ThemeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#896cc9"),
    backgroundColor: "#636365",
    '&:hover': {
      backgroundColor: "#896cc9",
    },
  }));
export default ThemeButton; 