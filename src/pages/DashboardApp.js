// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
return (
    <Page title="Dashboard | SkyDrop">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back.</Typography>
          <Typography variant="h5">Click on the required apartment to start drone delivery.</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales apartmentNo="1"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers apartmentNo="2"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders apartmentNo="3"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports apartmentNo="4"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers apartmentNo="5"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders apartmentNo="6"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports apartmentNo="7"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales apartmentNo="8"/>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
