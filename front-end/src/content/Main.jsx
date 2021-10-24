import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { currencies } from "../constants/constants";

import "./Main.css";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles({
  root: {
    [`& fieldset`]: {
      border: "none",
    },
  },
});

const Main = () => {
  const classes = useStyles();

  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState("bank");

  const [payPrice, setPayPrice] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [payCurrency, setPayCurrency] = useState("EUR");
  const [buyCurrency, setBuyCurrency] = useState("BTC");

  useEffect(() => {
    const updatePrice = async () => {
      try {
        const response = await fetch(`/rates/${payCurrency}/${buyCurrency}`);
        const newPrice = await response.json();
        setPrice(newPrice);
        setBuyPrice(payPrice ? parseFloat(payPrice * newPrice).toFixed(6) : "");
      } catch (e) {
        console.log(e);
      }
    };
    updatePrice();
  }, [payCurrency, buyCurrency]);

  const testInput = (string) => /^[0-9\b]+$/.test(string) ? string : string.slice(0, -1)
  

  const handlePayChange = (e) => {
    const input = testInput(e.target.value);
    setPayPrice(input ? parseFloat(input) : "");
    setBuyPrice(input ? parseFloat(input * price).toFixed(6) : "");
  };

  const handleBuyChange = (e) => {
    const input = testInput(e.target.value);
    setBuyPrice(input ? parseFloat(input) : "");
    setPayPrice(input ? parseFloat(input / price).toFixed(2) : "");
  };

  return (
    <Container maxWidth="xl" className="container">
      <Grid className="main" sx={{ height: "80vh" }}>
        <Grid
          item
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
              sx={{ fontWeight: 600 }}
              className="title__text"
            >
              <span>Buy Bitcoin, </span>
              <span style={{ color: "white" }}>
                Ethereum, Litecoin and other crypto
              </span>
              <span> online</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item className="main__payment" sx={{ maxWidth: "100%" }}>
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
                  name="amount"
                  value={payPrice || ""}
                  onChange={(e) => handlePayChange(e)}
                  sx={{
                    width: "80%",
                    textAlign: "center",
                  }}
                ></TextField>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormControl sx={{ width: "40%" }} className={classes.root}>
                  <Select
                    IconComponent={KeyboardArrowDown}
                    value={payCurrency}
                    name="currency"
                    onChange={(e) => setPayCurrency(e.target.value)}
                  >
                    <MenuItem value={"EUR"}>
                      <EuroIcon /> <span> EUR</span>
                    </MenuItem>
                    <MenuItem value={"USD"}>
                      <AttachMoneyIcon /> <span> USD</span>
                    </MenuItem>
                    <MenuItem value={"CAD"}>
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
                  name="amount"
                  value={buyPrice || ""}
                  onChange={(e) => handleBuyChange(e)}
                ></TextField>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormControl sx={{ width: "40%" }} className={classes.root}>
                  <Select
                    IconComponent={KeyboardArrowDown}
                    onChange={(e) => setBuyCurrency(e.target.value)}
                    name="currency"
                    value={buyCurrency}
                  >
                    {currencies.map((curr) => (
                      <MenuItem value={curr.type} key={curr.type}>
                        <img src={curr.icon} height="20" />
                        <span> {curr.type}</span>
                      </MenuItem>
                    ))}
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
              onChange={(e) => setPayment(e.target.value)}
              value={payment}
            >
              <MenuItem value="bank">Bank transfer</MenuItem>
              <MenuItem value="paypal">Paypal</MenuItem>
              <MenuItem value="card">Credit card</MenuItem>
            </Select>
            <Button
              className="buybtc"
              sx={{
                position: "absolute",
                bottom: "20px",
                marginX: "5%",
                width: "90%",
                textDecoration: "none",
              }}
              disabled={!buyPrice && !payPrice}
            >
              <a
                href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
                style={{ textDecoration: "none", color: "white" }}
              >
                Buy {buyCurrency}
              </a>
            </Button>
          </Box>
        </Grid>
        <Grid item sx={{ color: "white" }} className="main__intro">
          <Typography sx={{ fontSize: "18px" }}>
            Why bother going through complicated exchanges? Buy cryptocurrency
            with top payment methods like SEPA bank transfer, Credit and Debit
            Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
            Ethereum or any other popular crypto directly to your personal
            wallet without making any initial deposits. It's as easy as it gets!
          </Typography>
          <br />
          <Link
            sx={{ color: "#16dfb5" }}
            underline="hover"
            href="https://google.com"
          >
            <Typography sx={{ display: "flex" }}>
              Start now <KeyboardArrowRight />
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
