import React,{useEffect} from 'react'
import { Box, Container, Typography, Button } from '@mui/material';
import about_hero_bg from "./images/about_hero_bg.jpg";
import about_hero from "./images/about_hero.png";
import logo_whiteBg from "./images/logo_whiteBg.png";
import about_member_bg from "./images/about_member_bg.jpg"
import centerstone_logo_black from "./images/centerstone_logo_black.svg";
import cafe_image from "./images/cafe.jpg";
import building_image from "./images/building.jpg";
import Header from './Header/Header';
import Footer from './Footer';
import "./CSS/about.css";

export default function About() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    return (
        <>
        <Header />
        <Box component="main" sx={{textAlign: 'center'}}>
            <Box component='section' sx={{ background: `url(${about_hero_bg})`, height: '100vh', display: 'grid', placeItems: 'center', m: 0 ,py:"100px"}}>
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
            <Box component="section" sx={{ background: '#f0bb4f14', display: 'grid', placeItems: 'center', m: 0 }}>
                <Container sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Box sx={{ width: { xs: '0%', sm: '50%', md: '40%', lg: "40%", xl: "30%" }, py: '2rem' }}>
                        <img src={logo_whiteBg} alt="Centerstone Logo" width='100%' />
                    </Box>
                    <Box sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '50%', xl: "45%" }, py: "2rem" }}>
                        <Typography variant="body2" sx={{ fontFamily: 'inherit', textAlign: 'left', lineHeight: '180%' }}>
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
            <Box component="section" sx={{ background: `3ffffff`, py: '5rem' }}>
                <Box className='no-bg-small' sx={{ background: `url(${about_member_bg})`, backgroundRepeat: 'no-repeat' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 800 }}>
                        Centerstone Executive Team
                    </Typography>
                    <br />
                    <Typography variant='body2' sx={{ fontFamily: 'inherit', maxWidth: '500px', margin: 'auto' }} >
                        Centerstone’s management team has over 80 years of combined experience
                    </Typography>
                    <Container sx={{ py: '3rem', display: 'flex', justifyContent: "center", flexWrap: 'wrap', columnGap: '3%' }}>
                        <ExecutiveCard name='Skylar Botosh' designation='Designation' />
                        <ExecutiveCard name='Brian Choi' designation='Executive Vice President & Chief Financial Officer' />
                        <ExecutiveCard name='Jasmine Kim' designation='Executive Vice President & Chief Credit Officer' />
                        <ExecutiveCard name='Catherine Lee' designation='Senior Vice President & Chief Lending Officer' />
                    </Container>
                </Box>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <Box className='no-small' sx={{ width: 'fit-content', right: 0, position: 'absolute' }} >
                    <svg width="7vh" height="14vh" viewBox="0 0 69 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="69" cy="69" r="69" fill="black" />
                    </svg>
                </Box>
                <Box sx={{ py: '2rem' }}>
                    <Container>
                        <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 800, textAlign: 'center' }}>
                            Recent Transactions
                        </Typography>
                    </Container>
                    <br />
                    <br />
                    <Box sx={{ margin: 'auto', border: '1px solid #DDDDDD', py: '3rem', maxWidth: '750px', borderRadius: "20px" }}>
                        <img src={centerstone_logo_black} alt="Centerstone Logo" />
                        <br />
                        <Typography variant='body2' sx={{ py: '5px', fontFamily: 'inherit', fontWeight: 600 }} >
                            Coming Soon...
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
            <Box component="section" sx={{ py: '3rem', borderTop: '1px solid #DDDDDD' }}>
                <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 800, textAlign: 'center' }}>
                    Centerstone in the news
                </Typography>
                <br />
                <br />
                <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '5%', justifyContent: "center" }}>
                    <NewsCard image={cafe_image} title="SBA lending Centerstone sponsors first ABS of small-biz loans" date="DEC 23, 2019" />
                    <NewsCard image={building_image} title="The Fed’s emergency lending supports the Paycheck Protection Program" date="AUG 2, 2021" />
                </Container>
            </Box>
            <Box component="section" sx={{ background: "#f0b3571f", py: "5rem" }} >
                <Typography variant="h4" sx={{ fontFamily: 'inherit', fontWeight: 800}}>
                    Careers
                </Typography>
                <br />
                <Typography variant='body2' sx={{ py: '5px', px: '5px', fontSize: '16px', fontFamily: 'inherit', maxWidth: '600px', margin: 'auto', lineHeight: '26px' }} >
                    Centerstone is always looking to add experienced and driven professionals to expand
                    and grow with our company. We are continually searching for experienced professionals
                    within the industry by offering a thriving work environment, a passionate and exciting
                    corporate work culture while offering competitive employee benefits and compensation.
                </Typography>
                <br />
                <Button variant='contained'
                    sx={{ textTransform: 'none', color: '#000000', fontWeight: 'bold', background: '#f0b357' }}
                    size='large'
                    style={{ background: '#f0b357' }}
                >Find out more
                </Button>
            </Box>
        </Box>
        <Footer />
        </>
    )
}

interface ExecutiveProps {
    name: string,
    designation: string
}

interface NewsCardProps {
    image: string,
    title: string,
    date: string
}

const ExecutiveCard = (props: ExecutiveProps) => <Box sx={{ width: { xs: '100%', sm: '70%', md: "46%", lg: "30%" }, py: '2rem', boxShadow: '0px 4px 61px #0000000d', background: '#ffffff', my: '1.5%', borderRadius: '12px' }} >
    <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: "inherit", textAlign: 'center' }}>
        {props.name}
    </Typography>
    <Typography variant='body2' sx={{ py: '5px', fontFamily: 'inherit', maxWidth: '60%', margin: 'auto', lineHeight: '160%', textAlign: 'center' }} >
        {props.designation}
    </Typography>
</Box>

const NewsCard = (props: NewsCardProps) => <Box sx={{ width: { xs: '90%', sm: '80%', md: '40%', lg: '35%', xl: '30%' }, py: '1rem' }}>
    <img src={props.image} alt="News Image" width="100%" />
    <Typography variant='body2' sx={{ py: '5px', fontFamily: 'inherit', fontWeight: 600, textAlign: 'left' }} >
        {props.title}
    </Typography>
    <Typography variant='body2' sx={{ py: '5px', fontFamily: 'inherit', fontWeight: 600, textAlign: 'left', color: "#555555" }} >
        {props.date}
    </Typography>
</Box>