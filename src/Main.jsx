import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  Button,
  Container,
  Divider,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, flexbox } from "@mui/system";
import React from "react";

import "./Main.css";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles({
  root: {
    [`& fieldset`]: {
      border: "none",
    },
  },
  select: {
    [`& fieldset`]: {
      borderRadius: "0 20px 20px 0",
    },
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid className="main" sx={{ height: "80vh" }}>
        <Box
          className="main__title"
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, ml: "150px" }}
              className="title__text"
            >
              <span>Buy Bitcoin, </span>
              <span style={{ color: "white" }}>
                Ethereum, Litecoin and other crypto
              </span>
              <span> online</span>
            </Typography>
          </Box>
        </Box>
        <Box
          className="main__payment"
          sx={{ ml: "220px", position: "relative" }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "90%",
                marginX: "5%",
                borderRadius: "20px",
              }}
            >
              <Box className="card" />
              <Box
                sx={{
                  width: "100%",
                  border: "1px #D9D9D9 solid",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  mb: "25px",
                }}
              >
                <Typography sx={{ pl: "6%" }}>Pay</Typography>
                <TextField
                  className={classes.root}
                  inputProps={{ style: { textAlign: "center" } }}
                  sx={{
                    width: "80%",
                    textAlign: "center",
                  }}
                ></TextField>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormControl sx={{ width: "40%" }} className={classes.root}>
                  <Select IconComponent={KeyboardArrowDown}>
                    <MenuItem value={10}>
                      <EuroIcon /> <span> EUR</span>
                    </MenuItem>
                    <MenuItem value={20}>
                      <AttachMoneyIcon /> <span> USD</span>
                    </MenuItem>
                    <MenuItem value={30}>
                      <MonetizationOnIcon /> <span> CAD</span>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                marginX: "5%",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  border: "1px #D9D9D9 solid",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ pl: "6%" }}>Buy</Typography>
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                  sx={{ width: "80%" }}
                  className={classes.root}
                ></TextField>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormControl sx={{ width: "40%" }} className={classes.root}>
                  <Select IconComponent={KeyboardArrowDown}>
                    <MenuItem value={10}>
                      <EuroIcon /> EUR
                    </MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Typography sx={{ mt: "28px" }}>Payment method</Typography>
            <Select
              name=""
              id=""
              sx={{ width: "90%", borderRadius: "20px", mt: "37px" }}
              IconComponent={KeyboardArrowDown}
            >
              <MenuItem value="bankTransfer">Bank transfer</MenuItem>
              <MenuItem value="paypal">Paypal</MenuItem>
              <MenuItem value="creditCard">Credit card</MenuItem>
            </Select>
            <Button
              className="buybtc"
              sx={{
                position: "absolute",
                bottom: "20px",
                marginX: "5%",
                width: "90%",
              }}
            >
              Buy BTC
            </Button>
          </Box>
        </Box>
        <Box sx={{ color: "white", ml: "150px" }}>
          <Typography sx={{ fontSize: "18px" }}>
            Why bother going through complicated exchanges? Buy cryptocurrency
            with top payment methods like SEPA bank transfer, Credit and Debit
            Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
            Ethereum or any other popular crypto directly to your personal
            wallet without making any initial deposits. It's as easy as it gets!
          </Typography>
          <br />
          <Link sx={{ color: "#16dfb5" }} underline="hover" href="#">
            <Typography sx={{ display: "flex" }}>
              Show now <KeyboardArrowRight />
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Container>
  );
};

export default Main;
