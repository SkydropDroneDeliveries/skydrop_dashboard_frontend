import { Icon } from '@iconify/react';
import homeFilled from '@iconify/icons-ant-design/home-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, CardActionArea } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//urls
import { PYTHON_SCRIPT_URL } from 'src/constants/urls';
//axios
const axios = require('axios');

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

export default function AppBugReports(props) {
  function handleClick(apartmentNo){
    console.log("BUgs "+ PYTHON_SCRIPT_URL)
    // Make a request for a user with a given ID
    axios.get(PYTHON_SCRIPT_URL , {
      params: {
        apartmentNo: apartmentNo
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <CardActionArea onClick={()=>{handleClick(props.apartmentNo)}}>
      <RootStyle>
        <IconWrapperStyle>
          <Icon icon={homeFilled} width={24} height={24} />
        </IconWrapperStyle>
        <Typography variant="h3">{fShortenNumber(props.apartmentNo)}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Apartment
        </Typography>
      </RootStyle>
    </CardActionArea>
  );
}
