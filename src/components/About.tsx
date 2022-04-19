import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import about_hero_bg from "../images/about_hero_bg.jpg";
import about_hero from "../images/about_hero.png";
import logo_whiteBg from "../images/logo_whiteBg.png";

export default function About() {
    return (
        <Box component="main">
            <Box component='section' sx={{ background: `url(${about_hero_bg})`, height: '100vh', display: 'grid', placeItems: 'center' }}>
                <Container sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Box sx={{ py: '1rem', width: { xs: '100%', md: '70%', lg: '50%' }, pb: '3rem' }}>
                        <Typography variant='h3' sx={{ fontWeight: 800, fontFamily: 'inherit', textAlign: 'left' }}>
                            About Centerstone
                        </Typography>
                        <Typography variant='body2' sx={{ fontFamily: 'inherit', textAlign: 'left', maxWidth: '27rem', lineHeight: '160%' }}>
                            Centerstone SBA Lending is one of fourteen licensed
                            Small Business Lending Companies approved by the
                            United States Small Business Administration
                            providing financing solutions for small businesses.
                            Our SBA team with over 100 years of combined experience
                            will work directly with small businesses to provide
                            the necessary financing to cater to each unique situations.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { xs: '90%', sm: "75%", md: '45%', lg: '50%' } }}>
                        <img src={about_hero} alt="Working" width="100%" />
                    </Box>
                </Container>
            </Box>
            <Box component="section" sx={{ background : '#f0bb4f14', display: 'grid', placeItems: 'center'}}>
                <Container sx={{display: 'flex', justifyContent: 'space-around', flexWrap : 'wrap', alignItems: 'center'}}>
                    <Box>
                        <img src={logo_whiteBg} alt="Centerstone Logo" />
                    </Box>
                    <Box>
                        <Typography variant="body2" sx={{fontFamily: 'inherit'}}>
                            Unlike a traditional bank, Centerstone specializes 
                            in its core products so that we can ensure experienced 
                            service and ultimate success. Under the direction of our 
                            managing president and partner, James Kim, and our executive 
                            team with professional lending experience, Centerstone strives 
                            to provide our borrowers with only the most exceptional service 
                            so that, together, we can help our communities flourish.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
