import React from 'react'
import { Typography, Box, Button, Container, IconProps } from '@mui/material';
import logo from "../images/centerstone_logo.svg";
import facebook_logo from "../images/facebook_logo.svg";
import instagram_logo from "../images/instagram_logo.svg";
import { Facebook, Instagram, Call, Mail } from '@mui/icons-material';

export default function Footer() {
    return (
        <Box component='footer' sx={{ py: '3rem', background: '#0E0E0E'}}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{ width: { xs: '100%', md: '60%', lg: '50%', py: '1rem', margin: 'auto' } }}>
                    <Box sx={{width: {xs: '100%', md: '100%', lg: '210px'}}}>
                        <img src={logo} width='210px'></img>
                    </Box>
                    <Box sx={{ width: { xs: 'fit-content', md: 'fit-content', lg: '100%' }, margin: 'auto', display: 'flex', justifyContent: 'left' }}>
                        <Box sx={{ display: 'flex', gap: '2rem', py: '1rem' }}>
                            <a href="/home">
                                <Typography sx={{ color: '#ffffff', fontFamily: 'inherit' }} >Home</Typography>
                            </a>
                            <a href="/about-us">
                                <Typography sx={{ color: '#ffffff', fontFamily: 'inherit' }} >About Us</Typography>
                            </a>
                            <a href="/privacy-policy">
                                <Typography sx={{ color: '#ffffff', fontFamily: 'inherit' }} >Privacy Policy</Typography>
                            </a>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: 'fit-content', md: 'fit-content', lg: '100%' }, margin: 'auto', display: 'flex', justifyContent: 'left' }}>
                        <Box sx={{ display: 'flex', gap: '2rem', py: '1rem', color: '#ffffff' }}>
                            <a href="https://www.facebook.com/centerstone">
                                <Button variant="text" sx={{color: '#ffffff'}}>
                                    <img src={facebook_logo} width="40px"/>
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/centerstone">
                                <Button variant='text' sx={{color: '#ffffff'}}>
                                    <img src={instagram_logo} width="40px"/>
                                </Button>
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '60%', lg: '50%', py: '1rem', margin: 'auto' } }}>
                    <Box sx={{width: { xs: 'fit-content', md: 'fit-content', lg: '100%'}, margin: 'auto', display: 'flex', justifyContent: 'right'}}>
                        <Button variant='contained'
                            sx={{ textTransform: 'none', color: '#000000', fontWeight: 'bold', background: '#f0b357' }}
                            size='large'
                        >Contact Us
                        </Button>
                    </Box>
                    <Box sx={{ width: { xs: 'fit-content', md: 'fit-content', lg: '100%' }, margin: 'auto', display: 'flex', justifyContent: 'right' }}>
                        <Box sx={{ py: '1rem', display: 'flex', columnGap: '2rem', rowGap: '0.5rem', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <a href="tel:2138055220">
                                <Button variant="text" startIcon={<CallIcon />} sx={{ color: '#ffffff', fontFamily: 'inherit' }}>213-805-5220</Button>
                            </a>
                            <a href="mailto:info@teamsenterstone.com">
                                <Button variant="text" startIcon={<MailIcon />} sx={{ color: '#ffffff', textTransform: 'none', fontFamily: 'inherit' }}>info@teamcenterstone.com</Button>
                            </a>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: 'fit-content', md: 'fit-content', lg: '100%' }, margin: 'auto', display: 'flex', justifyContent: 'right' }}>
                        <Box sx={{color: '#ffffff', fontSize: '0.7rem'}}>
                        © {new Date().getFullYear()} CENTERSTONE INC. ALL RIGHTS RESERVED
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

const CallIcon = () => <Box sx={{background: "#ffffff14", borderRadius: '50%', width: '30px', height: '30px', display: 'grid', placeItems: 'center'}}>
    <Call sx={{color: '#F0B357', fontSize: 'small'}}></Call>
</Box>

const MailIcon = () => <Box sx={{background: "#ffffff14", borderRadius: '50%', width: '30px', height: '30px', display: 'grid', placeItems: 'center'}}>
    <Mail sx={{color: '#F0B357', fontSize: 'small'}}></Mail>
</Box>
