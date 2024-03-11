"use client";
import Cards from "@/components/Card";
import { DeliveryStatus } from "@/components/DeliveryStatus";
import { SubMenus } from "@/components/SubMenus";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  {
    return (
      <>
        <Box sx={{ bgcolor: "#18BA51", padding: "120px" }}>
          <Container>
            <Stack direction="row">
              <Stack spacing={2} width={"50%"} justifyContent="center">
                <Typography sx={{ fontSize: "55px", color: "white", borderBottom: "1px solid white", width: "max-content" }}>
                  Pinecone <br></br> Food delivery
                </Typography>
                <Typography sx={{ color: "white", fontSize: "22px" }}>
                  Horem ipsum dolor sit amet, <br></br>consetetur adipiscing elit.
                </Typography>
              </Stack>
              <Stack width={"50%"} sx={{ position: "relative" }}>
                <Stack>
                  <Image src="/food.png" width={440} height={440} alt="food" />
                </Stack>
                <Stack sx={{ position: "absolute", bottom: "0", right: "0" }}>
                  <Image src="/food2.png" width={313} height={313} alt="food" />
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ margin: "100px auto" }}>
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <DeliveryStatus imgPath="/pineconeLogo.png" menuStatus="jalsk;dfja" discription=";kljlksjeaewqw" />
            </Grid>
            <Grid item xs={3}>
              <DeliveryStatus imgPath="/pineconeLogo.png" menuStatus="jalsk;dfja" discription=";kljlksjeaewqw" />
            </Grid>
            <Grid item xs={3}>
              <DeliveryStatus imgPath="/pineconeLogo.png" menuStatus="jalsk;dfja" discription=";kljlksjeaewqw" />
            </Grid>
            <Grid item xs={3}>
              <DeliveryStatus imgPath="/pineconeLogo.png" menuStatus="jalsk;dfja" discription=";kljlksjeaewqw" />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Stack sx={{ margin: "20px auto" }}>
            <Stack spacing={2}>
              <SubMenus label="Үндсэн хоол" />
              <Grid container>
                <Grid item xs={3}>
                  <Cards label="blala" price={4000} discount={20} imgPath="food.svg" />
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Container>
        <Container>
          <Stack sx={{ margin: "20px auto" }}>
            <Stack spacing={2}>
              <SubMenus label="Үндсэн хоол" />
              <Grid container>
                <Grid item xs={3}>
                  <Cards label="blala" price={4000} discount={20} imgPath="food.svg" />
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
}
