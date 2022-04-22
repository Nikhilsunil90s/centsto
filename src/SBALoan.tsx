import React,{useEffect} from "react";
import "./CSS/Loan.css";
import Header from './Header/Header';
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
const SBALoan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="color-div">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} className="parent-Sba">
          <img src={require("./images/loan-img.svg").default} />
        </Grid>
        <Grid item xs={12} md={12} lg={12} className="top-sba">
          <Typography variant="h2">SBA Loan</Typography>
          <Typography>
            The Small Business Administration (“SBA”) is a United States
            government agency that provides support to entrepreneurs and small
            businesses.
          </Typography>
          <Typography>
            The SBA was created on July 30, 1953, by President Eisenhower with
            the signing of the Small Business Act. The mission of the Small
            Business Administration is “to aid, counsel, assist and protect
            Interests of small business concerns, to preserve free competitive
            enterprise and to maintain and strengthen the overall economy of the
            nation”.
          </Typography>
          <Typography>
            The SBA 7(a) loan program is the SBA’s primary program for providing
            financial assistance to small businesses by setting guidelines for
            loans made by its partnering lenders, such as Centerstone SBA
            Lending.
          </Typography>
          <Typography>
            Centerstone SBA Lending, led by a seasoned management team, will
            walk you through the entire process to provide the right financing
            solution attentive to the unique characteristics of the small
            business and the owner.
          </Typography>
          <Typography variant="h3">SBA Loan Uses</Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>
            Commercial real estate purchase to be owner-occupied by your
            business
          </Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>
            Business Acquisition/Partnership Interest Buy-Out/Stock Purchase
          </Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>
            Debt refinancing: convert high-interest debt into one monthly
            payment with an affordable rate
          </Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>
            Buy inventory: Fulfill orders through bulk purchases
          </Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>Equipment purchase: Invest in new equipment</Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>Permanent working capital</Typography>
          <Typography><span className="pd-right">  <img
                      className="check"
                      src={require("./images/Check.svg").default}
                    /></span>
            Other uses include funding for start-up business and leasehold
            improvement
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} className="color-footer">
<Typography>
If you think you can qualify for an SBA loan and meet the above criteria, you can apply today by:
</Typography>
<Button >
    Apply now
</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SBALoan;
