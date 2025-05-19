import { Button, styled, type ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  padding?: string;
}

export const ColorButton = styled(Button, {
  shouldForwardProp: (prop) =>
    !['textColor', 'bgColor', 'fontSize', 'padding'].includes(prop as string),
})<CustomButtonProps>(
  ({
    textColor = '#ffffff',
    bgColor = '#1976d2',
    fontSize = '0.8rem',
    padding = '0.5rem 2rem',
  }) => ({
    color: textColor,
    backgroundColor: bgColor,
    fontSize,
    padding,
    '&:hover': {
      backgroundColor: bgColor,
    },
  })
);
