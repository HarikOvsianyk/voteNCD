import { styled } from '@mui/system';
import { colors } from '../../constants/colors';

export const Button = styled('button')({
    backgroundColor: colors.main,
    color: colors.white,
    fontWeight: '700',
    fontSize: '0.875rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    minWidth: '64px',
    padding: '5px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
  });