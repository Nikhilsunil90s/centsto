import React, { useState } from 'react'
import { Box, Typography, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText, Container, Button } from '@mui/material';
import close from "../images/close_cross.svg";
import clipboard from "../images/clipboard-tick.svg";
import clipboard2 from "../images/clipboard-tick-2.svg";
import decision from "../images/decision.svg";
import edit from "../images/edit.svg";
import money2 from "../images/money-2.svg";
import "../css/solutions.css";

export default function Solutions() {
    const [value, setValue] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
    return (
        <Box component="main" sx={{ textAlign: 'center', maxWidth: '100vw', overflowX: 'hidden'}}>
            <Container component="section" sx={{ py: '3rem' }}>
                <Typography variant='h4' sx={{ fontWeight: 800, fontFamily: 'inherit'}}>
                    Lending Solutions
                </Typography>
            </Container>
            <Box sx={{ width: {xs : '100%', sm: '90%', md: '70%', lg: '60%', xl: '45%'}, margin: 'auto'}}>
                <Box sx={{ background: '#F2E7D7', borderRadius: '25px', py: '4px' }}>
                    <Tabs className="tabs-bar" value={value} variant="scrollable" scrollButtons="auto" onChange={handleTabChange} aria-label="basic tabs example" sx={{maxWidth: '100%'}}>
                        <Tab label="Business Financing" sx={{textTransform: 'none', color: '#555555', width: {xs: 'fit-content', md: '33%'}}} {...a11yProps(0)} />
                        <Tab label="Real State Financing" sx={{textTransform: 'none', color: '#555555', width: {xs: 'fit-content', md: '33%'}}} {...a11yProps(1)} />
                        <Tab label="Debt Financing" sx={{textTransform: 'none', color: '#555555', width: {xs: 'fit-content', md: '33%'}}} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <BusinessFinancing/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BusinessFinancing/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <BusinessFinancing/>
                </TabPanel>
            </Box>
            <Box component="section" sx={{py: '3rem'}}>
                <Typography variant="h4" sx={{fontWeight: 800, fontFamily: 'inherit'}}>
                    Lending Process
                </Typography>
                <br />
                <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5%'}} >
                    <ProcessCard index={1} title="Qualification" text='Preliminary due diligence with application review' icon={clipboard} ></ProcessCard>
                    <ProcessCard index={2} title="Proposal" text='If prequalification met, term sheet is issued' icon={clipboard2} ></ProcessCard>
                    <ProcessCard index={3} title="Underwriting" text='Formal due diligence & analysis performed' icon={edit} ></ProcessCard>
                    <ProcessCard index={4} title="Decision" text='Approval / Decline / Counter-offer' icon={decision} ></ProcessCard>
                    <ProcessCard index={5} title="Closing" text='Closing item discussion and loan documentation execution' icon={close} ></ProcessCard>
                    <ProcessCard index={6} title="Funding" text='Your loan is funded!' icon={money2} ></ProcessCard>
                </Container>
            </Box>
            <Box component="section" sx={{ background: "#f0b3571f", py: "5rem" }} >
                <Typography variant='body2' sx={{ py: '5px', px: '5px', fontFamily: 'inherit', maxWidth: '600px', margin: 'auto', fontWeight: 600, lineHeight: '160%' }} >
                    If you think you can qualify for an SBA loan and meet the above criteria, you can apply today by:
                </Typography>
                <br />
                <Button variant='contained'
                    sx={{ textTransform: 'none', color: '#000000', fontWeight: 'bold', background: '#f0b357' }}
                    size='large'
                    style={{ background: '#f0b357' }}
                >Apply Now
                </Button>
            </Box>
        </Box>
    )
}


// utilities -------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

interface TabPanelProps {
    children? : React.ReactNode,
    value : number,
    index : number
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

function GreenCheck() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#75D084" />
            <path d="M8.16699 14.5833L12.8337 18.6667L19.8337 8.75" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

function OrangeCheck() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#F0B357" />
            <path d="M8.16699 14.5833L12.8337 18.6667L19.8337 8.75" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

function BusinessFinancing() {
    return (
    <>
        <Typography variant='h5' sx={{ fontWeight: 800, fontFamily: 'Montserrat' }}>
            Business Financing
        </Typography>
        <List >
            <ListItem>
                <ListItemIcon>
                    <GreenCheck />
                </ListItemIcon>
                <CustomListText text='Upto 10 year term' weight={600}></CustomListText>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <GreenCheck />
                </ListItemIcon>
                <CustomListText text='Eligible uses:' weight={600}></CustomListText>
            </ListItem>
            <List sx={{paddingLeft: '3rem'}}>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Aquisition' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Partner Buy Out' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Expansion' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Working Capital' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Inventory and Equipment Purchase' weight={500}></CustomListText>
                </ListItem>
            </List>
            <ListItem >
                <ListItemIcon>
                    <GreenCheck />
                </ListItemIcon>
                <CustomListText text='Industries Centerstone financed:' weight={600}></CustomListText>
            </ListItem>
            <List sx={{paddingLeft: '3rem'}}>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Child day care services' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Tutoring and learning center' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='E-commerce marketplace management' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Industrial machinery & equipment rental' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Health & personal care' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Restaurants' weight={500}></CustomListText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><OrangeCheck/></ListItemIcon>
                    <CustomListText text='Textile wholesale' weight={500}></CustomListText>
                </ListItem>
            </List>
        </List>
    </>
    )
}
interface ListTextProps {
    text : string,
    weight: number,
}
function CustomListText(props: ListTextProps){
    return <ListItemText
        disableTypography
        primary={
            <Typography sx={{fontFamily: 'Montserrat', fontWeight: props.weight}}>
                {props.text}
            </Typography>
        }
    >
    </ListItemText>
}

interface ProcessCardProps {
    index: number,
    text : string,
    title: string,
    icon?: string
}
function ProcessCard(props: ProcessCardProps){
    return <Box sx={{ boxShadow: '0 0 60px #00000012', borderRadius: '15px', width: { xs: '75%', sm: '35%', md: '25%', lg: '20%' }, p: '5px', position: 'relative', pt: '2rem', my: {xs: "4.5%", md: '2.5%'} }}>
        <Box sx={{position: 'absolute', width: '40px', height: '40px', borderRadius: '50%', background: '#ffffff', border: '2px solid #FAE9D0', display: 'grid', placeItems: 'center', top: '-25px', left: 0}}>{props.index}</Box>
        <Box sx={{ textAlign: 'left', p: '1rem' }}>
            <Box>
                <img src={props.icon} alt="Icon" />
            </Box>
            <Typography variant="h6" sx={{ fontFamily: 'inherit', fontWeight: 800 }}>
                {props.title}
            </Typography>
            <Typography sx={{ fontFamily: 'inherit' }}>
                {props.text}
            </Typography>
        </Box>
    </Box>
}

