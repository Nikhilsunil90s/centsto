import React,{useEffect} from "react";
import "./CSS//LandingPage.css";
import Header from './Header/Header';
import Footer from './Footer'
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, CardActionArea, CardActions,CardContent,CardMedia } from '@mui/material';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const responsiveBlog = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />
    <Box className="Landing-color"> 
      <Box className="parent-div">
        <Grid container spacing={2}>
          <Grid   xs={12} lg={6} sm={6} className="pd-0" >
            <Card className="parent-card">
              <CardContent>
                <Typography>
                  <h1 className="card-title">
                    Level up your business with Centerstone SBA Lending
                  </h1>
                </Typography>
                <Typography>
                  <p className="card-content">
                    As a non-bank SBA 7(a) lender, we are proud to support small
                    businesses with industry solutions.
                  </p>
                </Typography>
              </CardContent>
              <CardActions className="btn-class">
                {/* <img
                  className="img-cloud"
                  src={require("./images/cloud.svg").default}
                /> */}
                <Button className="btn-btn">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid   xs={12} lg={6} sm={6} className="bg-img-Right">
            <Box className="star">
              <img src={require("./images/star.svg").default} />
            </Box>
            <img className="width" src={require("./images/Shop.svg").default} />
          </Grid>
        </Grid>
      </Box>
      <section>
        <Grid container className="back-img">
          <Grid xs={12} md={12}>
            <img
              className="f-left"
              src={require("./images/Ellipse2.svg").default}
            />
            <Typography className="Sba-title">
              <strong>What is an SBA 7(a) Loan?</strong>
            </Typography>

            <Typography className="content-p">
              The Small Business Administration (SBA) is a federal agency
              dedicated to strengthening America’s small businesses through a
              variety of initiatives. Among the various types of SBA loan
              program, its most popular is the SBA 7a Loan program.
            </Typography>
            <p className="content-p">
              SBA-guaranteed loans range from small to large, can be used for
              most business purposes, including long- term fixed assets and
              operating capital, and generally have rates and fees that are
              comparable to non- guaranteed loans. The terms and conditions may
              vary by the type of loan and must meet SBA eligibility
              requirements.
            </p>
            <Typography className="Benefits">
              Benefits of an SBA 7(a) Loan include:
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12} className="flex-col">
              <Card className="card-class">
                <Grid container>
                  <Grid item xs={3} md={1}>
                    <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    />
                  </Grid>
                  <Grid item xs={8} md={5}>
                    <Typography >
                      Up to 90% financing for qualified applicants
                    </Typography>
                  </Grid>
                  <Grid item xs={3} md={1}>
                    <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    />
                  </Grid>
                  <Grid item xs={8} md={5}>
                    <Typography>
                      Fully amortized loans, no balloon payments
                    </Typography>
                  </Grid>

                  <Grid item xs={3} md={1}>
                    <img
                      className="check1"
                      src={require("./images/Check.svg").default}
                    />
                  </Grid>
                  <Grid item xs={8} md={5}>
                    <Typography className="pd-pd">Longer terms</Typography>
                  </Grid>
                  <Grid item xs={3} md={1}>
                    <img
                      className="check1"
                      src={require("./images/Check.svg").default}
                    />
                  </Grid>
                  <Grid item xs={8} md={5}>
                    <Typography className="pd-pd">
                      Lower down payments
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          {/* card 2 */}
          <Grid container>
            <Grid item xs={12} md={12} className="flex-col">
              <Card className="card-class1">
                <Grid container className="container-flex">
                  <Grid item xs={12} md={4} className="center">
                    <img
                      className=""
                      src={require("./images/bakery.svg").default}
                    />
                    <Typography className="financing">Business Financing</Typography>
                    <p className="upto">Up to 80% LTV Up to 10 years terms</p>
                  </Grid>
                  <Grid item xs={12} md={4} className="center">
                    <img
                      className=""
                      src={require("./images/lock.svg").default}
                    />
                    <Typography className="financing">Real Estate Acquisition</Typography>
                    <p className="upto">Up to 90% LTV Up to 25 year terms 51% owner-occupied</p>
                  </Grid>
                  <Grid item xs={12} md={4} className="center">
                    <img
                      className=""
                      src={require("./images/cam.svg").default}
                    />
                    <Typography className="financing">Debt Refinance</Typography>
                    <p className="upto">Business and/or Commercial Real Estate</p>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className="pd-top">
        <Grid container spacing={2} className="bg-ora">
          <Grid item xs={12} md={12}>
            <img
              className="f-right"
              src={require("./images/Ellipse1.svg").default}
            />
            <Typography className="Sba-title">
              <strong>Why Choose Centerstone?</strong>
            </Typography>
            <Grid container>
              <Grid item xs={12} md={6} lg={6} className="pd-left">
                <img className="width-img" src={require("./images/girl.svg").default} />
              </Grid>
              <Grid item xs={12} md={6} lg={6} >
                <Grid container>
                  <Grid item xs={12} md={12} className="flex-col">
                    <Card className="card-class2">
                      <Grid container>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Solution-Based Lending
                          </Typography>
                        </Grid>
                        </Grid>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Common Sense Lending
                          </Typography>
                        </Grid>
</Grid>
<Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Full Team Approach
                          </Typography>
                        </Grid>
                        </Grid>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Efficient Processing
                          </Typography>
                        </Grid>
                        </Grid>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            High Closing Rate
                          </Typography>
                        </Grid>
                        </Grid>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Direct PLP Lender
                          </Typography>
                        </Grid>
                        </Grid>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Fast Turnaround
                          </Typography>
                        </Grid>
                        </Grid>
                        <Grid xs={6} className='covering'>
                        <Grid item xs={1} md={1} className="check-left">
                          <img src={require("./images/Check.svg").default} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Typography className="padding-tr">
                            Nationwide Lender
                          </Typography>
                        </Grid>
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
      <section className="pd-Top">
        <Grid container spacing={2} className="bg-color-orange">
          <Grid item xs={12} md={12}>
            <Typography className="Sba-title say-pd">
              <strong>What do our clients say?</strong>
            </Typography>
            <Carousel responsive={responsive}>
  <Box>
  <CardMedia 
    component="img"
    height="140"
    image={require("./images/doubledot.svg").default}
    alt="green iguana"
    className="double"
     /><Card sx={{ maxWidth: 450 ,borderRadius:"5px"}}>
   
      <CardActionArea className="d-flex">
        <CardContent>
          <Typography gutterBottom component="div" className="family pd-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nullam tincidunt lorem massa sit ornare massa. Nunc diam odio tincidunt quis urna laoreet. Ornare hendrerit faucibus tristique massa arcu a. Accumsan, cursus dignissim ut at interdum odio neque mollis rutrum. Ipsum tempus, ut a dictum.
          </Typography>
          <Box className="card-box">
          <CardMedia
          component="img"
          height="140"
          image={require("./images/boy-card.svg").default}
          alt="green iguana"
          className="card-boy"
        /></Box>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-box">
        <Typography className="family" >
        John Smith  |  Founder at ABC Ltd.
        </Typography>
      </CardActions>
    </Card></Box>
    <Box>
  <CardMedia 
    component="img"
    height="140"
    image={require("./images/doubledot.svg").default}
    alt="green iguana"
    className="double"
     /><Card sx={{ maxWidth: 450 ,borderRadius:"5px"}}>
   
      <CardActionArea className="d-flex">
        <CardContent>
          <Typography gutterBottom component="div" className="family pd-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nullam tincidunt lorem massa sit ornare massa. Nunc diam odio tincidunt quis urna laoreet. Ornare hendrerit faucibus tristique massa arcu a. Accumsan, cursus dignissim ut at interdum odio neque mollis rutrum. Ipsum tempus, ut a dictum.
          </Typography>
          <Box className="card-box">
          <CardMedia
          component="img"
          height="140"
          image={require("./images/boy-card.svg").default}
          alt="green iguana"
          className="card-boy"
        /></Box>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-box">
        <Typography className="family" >
        John Smith  |  Founder at ABC Ltd.
        </Typography>
      </CardActions>
    </Card></Box>
    <Box>
  <CardMedia 
    component="img"
    height="140"
    image={require("./images/doubledot.svg").default}
    alt="green iguana"
    className="double"
     /><Card sx={{ maxWidth: 450 ,borderRadius:"5px"}}>
   
      <CardActionArea className="d-flex">
        <CardContent>
          <Typography gutterBottom component="div" className="family pd-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nullam tincidunt lorem massa sit ornare massa. Nunc diam odio tincidunt quis urna laoreet. Ornare hendrerit faucibus tristique massa arcu a. Accumsan, cursus dignissim ut at interdum odio neque mollis rutrum. Ipsum tempus, ut a dictum.
          </Typography>
          <Box className="card-box">
          <CardMedia
          component="img"
          height="140"
          image={require("./images/boy-card.svg").default}
          alt="green iguana"
          className="card-boy"
        /></Box>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-box">
        <Typography className="family" >
        John Smith  |  Founder at ABC Ltd.
        </Typography>
      </CardActions>
    </Card></Box>
    <Box>
  <CardMedia 
    component="img"
    height="140"
    image={require("./images/doubledot.svg").default}
    alt="green iguana"
    className="double"
     /><Card sx={{ maxWidth: 450 ,borderRadius:"5px"}}>
   
      <CardActionArea className="d-flex">
        <CardContent>
          <Typography gutterBottom component="div" className="family pd-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nullam tincidunt lorem massa sit ornare massa. Nunc diam odio tincidunt quis urna laoreet. Ornare hendrerit faucibus tristique massa arcu a. Accumsan, cursus dignissim ut at interdum odio neque mollis rutrum. Ipsum tempus, ut a dictum.
          </Typography>
          <Box className="card-box">
          <CardMedia
          component="img"
          height="140"
          image={require("./images/boy-card.svg").default}
          alt="green iguana"
          className="card-boy"
        /></Box>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-box">
        <Typography className="family" >
        John Smith  |  Founder at ABC Ltd.
        </Typography>
      </CardActions>
    </Card></Box>
    <Box>
  <CardMedia 
    component="img"
    height="140"
    image={require("./images/doubledot.svg").default}
    alt="green iguana"
    className="double"
     /><Card sx={{ maxWidth: 450 ,borderRadius:"5px"}}>
   
      <CardActionArea className="d-flex">
        <CardContent>
          <Typography gutterBottom component="div" className="family pd-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nullam tincidunt lorem massa sit ornare massa. Nunc diam odio tincidunt quis urna laoreet. Ornare hendrerit faucibus tristique massa arcu a. Accumsan, cursus dignissim ut at interdum odio neque mollis rutrum. Ipsum tempus, ut a dictum.
          </Typography>
          <Box className="card-box">
          <CardMedia
          component="img"
          height="140"
          image={require("./images/boy-card.svg").default}
          alt="green iguana"
          className="card-boy"
        /></Box>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-box">
        <Typography className="family" >
        John Smith  |  Founder at ABC Ltd.
        </Typography>
      </CardActions>
    </Card></Box>
</Carousel>
          </Grid>
        </Grid>
      </section>
      {/*  */}
      <section className="pd-Top">
      <Grid container >
          <Grid xs={12} md={12}>
            <img
              className="f-left"
              src={require("./images/Ellipse6.svg").default}
            />
            <Typography className="blog-title">
              <strong>Blog</strong>
            </Typography>

            <Typography className="content-p blog-pd">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas id purus faucibus urna eleifend suspendisse.
            </Typography>
            <Carousel responsive={responsiveBlog} className="carousel-pd">
 <Box >
 <Card sx={{ maxWidth: 280 }} className="box-shadow">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./images/card1.svg").default}
          alt="green iguana"
          sx={{borderRadius:"5px"}}
        />
        <CardContent className="pd-00x">
          <Typography variant="body2" className="card-item">
          Lorem ipsum dolor sit amet, consect adipisc met, consecte.
          </Typography>
          <Typography className="date">
          12 Nov 2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Box>
 <Box >
 <Card sx={{ maxWidth: 280 }} className="box-shadow">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./images/card2.svg").default}
          alt="green iguana"
          sx={{borderRadius:"5px"}}
        />
        <CardContent className="pd-00x">
          <Typography variant="body2" className="card-item">
          Lorem ipsum dolor sit amet, consect adipisc met, consecte.
          </Typography>
          <Typography className="date">
          12 Nov 2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Box>
 <Box >
 <Card sx={{ maxWidth: 280 }} className="box-shadow">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./images/card3.svg").default}
          alt="green iguana"
          sx={{borderRadius:"5px"}}

        />
        <CardContent className="pd-00x">
     
          <Typography variant="body2" className="card-item">
          Lorem ipsum dolor sit amet, consect adipisc met, consecte.
          </Typography>
          <Typography className="date">
          12 Nov 2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Box>
 <Box >
 <Card sx={{ maxWidth: 280 }} className="box-shadow">
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={require("./images/card4.svg").default}
          alt="green iguana"
          sx={{borderRadius:"5px"}}

        />
        <CardContent className="pd-00x">
          <Typography variant="body2" className="card-item">
          Lorem ipsum dolor sit amet, consect adipisc met, consecte.
          </Typography>
          <Typography className="date">
          12 Nov 2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Box>
 <Box >
 <Card sx={{ maxWidth: 280 }} className="box-shadow">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./images/card4.svg").default}
          alt="green iguana"
          sx={{borderRadius:"5px"}}
        />
        <CardContent className="pd-00x">
          <Typography variant="body2" className="card-item">
          Lorem ipsum dolor sit amet, consect adipisc met, consecte.
          </Typography>
          <Typography className="date">
          12 Nov 2021
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Box>
</Carousel>
            </Grid>
            </Grid>
      </section>
    </Box>
    <Footer />
    </>
  );
}

export default LandingPage;
