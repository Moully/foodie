import { Container, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

export const Footer = () => {
  return (
    <Stack sx={{ bgcolor: "#18BA51", padding: "100px 0px" }}>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Stack direction="row" alignItems="center" justifyContent="center" color="white" spacing={1}>
          <Image src="/pineconeLogo.png" width={41} height={41} alt="logo" />
          <Typography>Food Delivery</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ textDecoration: "underline", color: "white" }}>Нүүр</Typography>
          <Typography sx={{ textDecoration: "underline", color: "white" }}>Холбоо барих</Typography>
          <Typography sx={{ textDecoration: "underline", color: "white" }}>Хоолны цэс</Typography>
          <Typography sx={{ textDecoration: "underline", color: "white" }}>Үйлчилгээний нөхцөл</Typography>
          <Typography sx={{ textDecoration: "underline", color: "white" }}>Хүргэлтийн бүс</Typography>
          <Typography sx={{ textDecoration: "underline", color: "white" }}>Нууцлалын бодлого</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" color="white" spacing={10} sx={{ borderBottom: "1px solid white", paddingBottom: "40px" }}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Stack>
        <Stack sx={{ paddingTop: "40px", color: "white", alignItems: "center" }} spacing={2}>
          <Typography>2024 Pinecone Foods LLC</Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Container>
    </Stack>
  );
};
