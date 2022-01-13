import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

//original width: 40, height: 40, ...sx
export default function Logo({ sx }) {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 240, height: 100, ...sx }} />;
}
