import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import contact_hero_side from "../images/contact_hero_side.png";
import { CallIcon, MailIcon, LocationIcon } from "./CustomIcons";
import "../css/contact.css";

export default function Contact() {
    const [data, setData] = React.useState({ fname: '', lname: '', email: '', subject: '', message: '' });
    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

  return (
    <Box component="main" sx={{textAlign: 'center'}}>
        <Box component='section' sx={{ pt: '3rem' }} >
              <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'absolute', width: { xs: '20%', sm: '15%', md: '10%', lg: '10%' } }}>
                      <img src={contact_hero_side} alt="Mailbox" width="100%" />
                  </Box>
                  <Container sx={{ pt: '3rem' }}>
                      <Typography variant='h4' sx={{ fontWeight: 800, fontFamily: 'inherit' }}>
                          Contact Us
                      </Typography>
                      <Typography variant='body2' sx={{ py: '5px', px: '5px', fontFamily: 'inherit', maxWidth: '600px', margin: 'auto', lineHeight: '160%' }} >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas id purus faucibus urna eleifend suspendisse.
                      </Typography>
                      <Box sx={{ py: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3%', margin: 'auto', width: { xs: '100%', sm: '90%', md: '80%', lg: '65%', xl: '55%' } }}>
                          <TextField variant="outlined" label="First Name" name='fname' value={data.fname} onChange={handleInputChange} sx={{ my: '0.5rem', width: { xs: '100%', md: '48.5%', lg: '46%' } }} />
                          <TextField variant="outlined" label="Last Name" name='lname' value={data.lname} onChange={handleInputChange} sx={{ my: '0.5rem', width: { xs: '100%', md: '48.5%', lg: '46%' } }} />
                          <TextField variant="outlined" label="Email" name='email' value={data.email} onChange={handleInputChange} sx={{ my: '0.5rem', width: { xs: '100%', lg: '95%' } }} />
                          <TextField variant="outlined" label="Subject" name='subject' value={data.subject} onChange={handleInputChange} sx={{ my: '0.5rem', width: { xs: '100%', lg: '95%' } }} />
                          <TextField variant="outlined" label="Comment or Message" name='message' value={data.message} multiline rows={3} onChange={handleInputChange} sx={{ my: '0.5rem', width: { xs: '100%', lg: '95%' } }} />
                      </Box>
                  </Container>
                  <Box sx={{ position: 'relative' }}>
                      <Box className='no-small' sx={{ width: 'fit-content', right: 0, position: 'absolute' }} >
                          <svg width="7vh" height="14vh" viewBox="0 0 69 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="69" cy="69" r="69" fill="black" />
                          </svg>
                      </Box>
                      <Button variant='contained'
                          sx={{ textTransform: 'none', color: '#000000', fontWeight: 'bold', background: '#f0b357', my: '2rem' }}
                          size='large'
                          style={{ background: '#f0b357' }}
                      >Send
                      </Button>
                  </Box>
              </Box>
        </Box>
        <Container sx={{pt: '1rem', pb: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>    
            <ContactCard text="213-805-5220" icon={<CallIcon/>} link="tel:213-805-5220" />
            <ContactCard text="info@teamcenterstome.com" icon={<MailIcon/>} link="mailto:info@teamcenterstome.com" />
            <ContactCard text="700 S. Flower St., Suite 850 Los Angeles, CA 90017" icon={<LocationIcon/>} />
        </Container>
    </Box>
  )
}

interface ContactCardProps {
    icon: React.ReactNode,
    link?: string,
    text: string
};

function ContactCard(props: ContactCardProps){
    return(
        <Box className='contact-box' sx={{ pt: '2rem', pb: '0.5rem', width: { xs: '90%', sm: '65%', md: '30%', xl: '300px' }, background: '#f7f7f7', borderRadius: '10px' }}>
            <Box sx={{ background: '#ffffff', borderRadius: '50%', width: '50px', height: '50px', display: 'grid', placeItems: 'center', margin: 'auto' }}>
                {props.icon}
            </Box>
            <br />
            {
                props.link ? 
                <a href={props.link} target='_blank'>
                    <Typography variant='body2' sx={{ py: '5px', px: '5px', fontFamily: 'inherit', fontWeight: 500 }} >
                        {props.text}
                    </Typography>
                </a> :
                <Typography variant='body2' sx={{ py: '5px', px: '5px', fontFamily: 'inherit', fontWeight: 500, maxWidth: '75%', margin: 'auto' }} >
                    {props.text}
                </Typography>
            }
        </Box>
    )
}
