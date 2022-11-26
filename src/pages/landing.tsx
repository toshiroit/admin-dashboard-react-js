// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia } from '@mui/material';

// project import
import Hero from 'sections/landing/Header';
// import NumberBlock from 'sections/landing/NumberBlock';
// import BrowserBlock from 'sections/landing/BrowserBlock';
// import CallToAction from 'sections/landing/CallToAction';
// import FeatureBlock from 'sections/landing/FeatureBlock';
// import DemoBlock from 'sections/landing/DemoBlock';
// import TestimonialBlock from 'sections/landing/TestimonialBlock';
// import ElementBlock from 'sections/landing/ElementBlock';
// import PartnerBlock from 'sections/landing/PartnerBlock';

// assets
import headerbg from 'assets/images/landing/bg-mockup.png';

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          bgcolor: theme.palette.mode === 'dark' ? 'grey.0' : 'grey.800',
          overflow: 'hidden',
          minHeight: '100vh',
          '&>*': {
            position: 'relative',
            zIndex: 5
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 2,
            background: 'linear-gradient(329.36deg, #000000 14.79%, rgba(67, 67, 67, 0.28) 64.86%);'
          }
        }}
      >
        <CardMedia
          component="img"
          image={headerbg}
          sx={{
            position: 'absolute',
            width: { xs: '100%', md: '70%', xl: '75%' },
            right: '0%',
            top: '-10%',
            zIndex: 1,
            display: { xs: 'none', md: 'block' }
          }}
        />
        <Hero />
      </Box>
      {/* <FeatureBlock />
      <DemoBlock />
      <CallToAction />
      <NumberBlock />
      <BrowserBlock />
      <ElementBlock />
      <PartnerBlock />
      <TestimonialBlock /> */}
    </>
  );
};

export default Landing;
