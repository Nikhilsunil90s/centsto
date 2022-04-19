import React from 'react';
import './LandingPage.css';
import { Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { request } from 'http';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function LandingPage() {
  return (

<>
<div className='parent-div'>
<Grid container spacing={2}>
  <Grid item xs={12} md={6} >
    <Card className='parent-card'>
      <CardContent >
        <Typography >
    <h1 className='card-title'>Level up your business with Centerstone SBA Lending</h1> 
        
        </Typography>
        <Typography >
          <p className='card-content'>As a non-bank SBA 7(a) lender, we are proud to support small businesses with industry solutions.</p>
        </Typography>
      </CardContent>
      <CardActions className='btn-class'>
        <img className='img-cloud' src={require("./images/cloud.svg").default} />
        <Button  className='btn-btn'>Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} md={6} className='bg-img-Right'>
<img src={require("./images/right-img.svg").default} />
  </Grid>
</Grid>
</div>
<section >
  <Grid container className='back-img'>
<Grid xs={12} md={12}>
<Typography className='Sba-title'>
<strong>
  What is an SBA 7(a) Loan?
  </strong>
</Typography>
 
<Typography className='content-p'>
The Small Business Administration (SBA) is a federal agency dedicated to strengthening America’s small businesses through a variety of initiatives. Among the various types of SBA loan program, its most popular is the SBA 7a Loan program.
</Typography>
<p className='content-p'>
SBA-guaranteed loans range from small to large, can be used for most business purposes, including long- term fixed assets and operating capital, and generally have rates and fees that are comparable to non- guaranteed loans. The terms and conditions may vary by the type of loan and must meet SBA eligibility requirements.</p>
<Typography className='Benefits'>
Benefits of an SBA 7(a) Loan include:
</Typography>

</Grid>
<Grid container >
<Grid item xs={12} md={12} className="flex-col">
<Card className='card-class'>
<Grid container>
  <Grid item xs={1} md={1}>
<img className='check' src={require("./images/Check.svg").default} />
  </Grid>
  <Grid item xs={5} md={5}>
<Typography>Up to 90% financing for qualified applicants</Typography>
  </Grid>
  <Grid item xs={1} md={1}>
  <img className='check' src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography >Fully amortized loans, no balloon payments</Typography>
  </Grid>
  
  <Grid item xs={1} md={1}>
<img className='check1' src={require("./images/Check.svg").default} />
  </Grid>
  <Grid item xs={5} md={5}>
<Typography className='pd-pd'>Longer terms</Typography>
  </Grid>
  <Grid item xs={1} md={1}>
  <img className='check1' src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='pd-pd'>Lower down payments</Typography>
  </Grid>
  </Grid>
</Card>
</Grid>
</Grid>
{/* card 2 */}
<Grid container >
<Grid item xs={12} md={12} className="flex-col">
<Card className='card-class1'>
<Grid container className='container-flex'>
  <Grid item xs={3} md={3}  className="center">
<img className='check2' src={require("./images/bakery.svg").default} />
<Typography>Business Financing</Typography>
<p>Up to 80% LTV
Up to 10 years terms</p>
  </Grid>
  <Grid item xs={3} md={3} className="center">
  <img className='check2' src={require("./images/lock.svg").default} />
<Typography >Real Estate Acquisition</Typography>
<p>Up to 90% LTV
Up to 25 year terms
51% owner-occupied</p>
  </Grid>
  <Grid item xs={3} md={3} className="center">
  <img className='check2' src={require("./images/cam.svg").default} />
<Typography className=''>Debt Refinance</Typography>
<p>Business and/or Commercial Real Estate</p>
  </Grid>
  </Grid>
</Card>
</Grid>
</Grid>
  </Grid>
</section>
<section className='pd-top'>
  <Grid container spacing={2} className="bg-ora">
    <Grid item xs={12} md={12}>
<Typography className='Sba-title'>
  <strong>
  Why Choose Centerstone?
  </strong>
</Typography>
<Grid container >
  <Grid item xs={6} md={6} className="pd-left">
<img src={require("./images/girl.svg").default} />
  </Grid>
  <Grid item xs={6} md={6}>
  <Grid container >
<Grid item xs={12} md={12} className="flex-col">
<Card className='card-class2'>
<Grid container>
  <Grid item xs={1} md={1} className='check-left'>
<img   src={require("./images/Check.svg").default} />
  </Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr'>Solution-Based Lending</Typography>
  </Grid>
  <Grid item xs={1} md={1} className='check-left'>
  <img src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >Common Sense Lending</Typography>
  </Grid>
  
  <Grid item xs={1} md={1} className='check-left'>
<img  src={require("./images/Check.svg").default} />
  </Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >Full Team Approach</Typography>
  </Grid>
  <Grid item xs={1} md={1} className='check-left'>
  <img  src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >Efficient Processing</Typography>
  </Grid>
  <Grid item xs={1} md={1} className='check-left'>
  <img  src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >High Closing Rate</Typography>
  </Grid>
  <Grid item xs={1} md={1} className='check-left'>
  <img  src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >Direct PLP Lender</Typography>
  </Grid>
  <Grid item xs={1} md={1} className='check-left'>
  <img  src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >Fast Turnaround</Typography>
  </Grid>
  <Grid item xs={1} md={1} className='check-left'>
  <img  src={require("./images/Check.svg").default} />
</Grid>
  <Grid item xs={5} md={5}>
<Typography className='padding-tr' >Nationwide Lender</Typography>
  </Grid>
  </Grid>
</Card>
</Grid>
</Grid>
    </Grid>
</Grid>
    </Grid>

  </Grid>
</section>
</>
  );
}

export default LandingPage;
