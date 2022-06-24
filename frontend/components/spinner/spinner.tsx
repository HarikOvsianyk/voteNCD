import { FunctionComponent, useContext } from 'react';
import { Audio } from  'react-loader-spinner'
import Box from '@mui/material/Box';
import { Context } from '../../context/context';
import { colors } from '../../constants/colors';

export const Spinner: FunctionComponent = () => {
    const { spinner } = useContext(Context);
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 5,
      }}
    >
      <Audio
    height="250"
    width="250"
    color={colors.main}
    ariaLabel='loading'
    visible={spinner}
  />
    </Box>
  );
};
