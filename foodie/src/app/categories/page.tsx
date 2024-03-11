"use client";
import Cards from "@/components/Card";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState(1);

  {
    return (
      <>
        <Container>
          <Grid container spacing={4} padding="32px 0px">
            <Grid item xs={3}>
              <Typography
                sx={{
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: "500",
                  bgcolor: `${filter === 1 ? "rgba(24, 186, 81, 1)" : ""}`,
                  color: `${filter === 1 ? "white" : ""}`,
                  border: "1px solid rgba(214, 216, 219, 1)",
                }}
                onClick={() => {
                  setFilter(1);
                }}>
                Breakfast
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: "500",
                  bgcolor: `${filter === 2 ? "rgba(24, 186, 81, 1)" : ""}`,
                  color: `${filter === 2 ? "white" : ""}`,
                  border: "1px solid rgba(214, 216, 219, 1)",
                }}
                onClick={() => {
                  setFilter(2);
                }}>
                Soup
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: "500",
                  bgcolor: `${filter === 3 ? "rgba(24, 186, 81, 1)" : ""}`,
                  color: `${filter === 3 ? "white" : ""}`,
                  border: "1px solid rgba(214, 216, 219, 1)",
                }}
                onClick={() => {
                  setFilter(3);
                }}>
                Main Course
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: "500",
                  bgcolor: `${filter === 4 ? "rgba(24, 186, 81, 1)" : ""}`,
                  color: `${filter === 4 ? "white" : ""}`,
                  border: "1px solid rgba(214, 216, 219, 1)",
                }}
                onClick={() => {
                  setFilter(4);
                }}>
                Dessert
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} padding={"32px 0px"}>
            <Grid item>
              <Cards label="blala" price={4000} discount={20} imgPath="food.svg" />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
