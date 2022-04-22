import React,{useEffect} from "react";
import Header from './Header/Header';
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./CSS/Apply.css";
import Footer from "./Footer";
const Applynow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />
      <Box className="color-div">
        <Grid container className="bg-cloud">
          <Grid item xs={12} md={12} lg={12} className="parent-Apply">
            <Typography>Apply Today</Typography>
            <img
              src={
                require("./images/undraw_updated_resume_re_q1or.svg").default
              }
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} className="Item-class">
              
            <Typography variant="h2">
              What are the Requirements for an SBA Loan?
            </Typography>
            <List>
              <ListItem>1. For Profit, U.S.-Based Business</ListItem>
              <ListItem>2. Years of Business History</ListItem>
              <ListItem>3. Business Credit Score of 150+</ListItem>
              <ListItem>4. 1.5:1 Business-Cash-Flow-to-Debt ratio</ListItem>
              <ListItem>5. No bankruptcies or foreclosure credit</ListItem>
              <ListItem>6. No open tax liens</ListItem>
              <ListItem>7. Personal guarantee required</ListItem>
            </List>
        
          </Grid>
          

          <Grid item xs={12} md={12} lg={12} className="Item-class">
            <Typography variant="h2">
              What Documents Will I Need to Apply?
            </Typography>
            <Typography>
              The SBA Loan Application process can be a long grind, especially
              for those that are new to the process. We fully understand this
              and make sure to request only necessary documents. To help you
              prepare, the following documents are commonly required:
            </Typography>
            <ul>
              <li>Driver’s License</li>
              <li>Voided Business Check</li>
              <li>Bank Statements</li>
              <li>Balance Sheet</li>
              <li>Profit & Loss Statements</li>
              <li>Business Tax Returns</li>
              <li>Personal Tax Returns</li>
              <li>Business Plan</li>
              <li>Business Debt Schedule</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className="Item-class">
            <Typography variant="h2">
              What is the Actual Cost of an SBA Loan?
            </Typography>
            <Typography>
              While other companies will charge you no matter the results, our
              service is based entirely on success. Here’s what to expect:
            </Typography>
            <ul>
              <li>
                2 to 4% of your funding amount upon successful funding by one of
                our lenders
              </li>
              <li>
                2.25% to 3.5% guaranteed fee paid to the SBA depending on loan
                amount and term length
              </li>
              <li>4 to 7.5% interest ($30k to $5 million)</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className="Item-class">
            <Typography variant="h2">
            How much Down Payment is Required?
            </Typography>
            <ul>
              <li>
              0% for a business expansion or working capital loan

              </li>
              <li>
              10% down payment for a business purchase 
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className="Item-class">
            <Typography variant="h2">
            How much Down Payment is Required?
            </Typography>
            <ul>
              <li>Cash

              </li>
              <li>
              Home equity line of credit

              </li>
              <li>Outside investor or business partner
</li>
<li>
401k or IRA
</li>
            </ul>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12} className="color-footer">
<Typography>
If you think you can qualify for an SBA loan and meet the above criteria, you can apply today by:
</Typography>
<Button >
<Link to='/Apply' >

    Apply now
</Link>

</Button>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
export default Applynow;
