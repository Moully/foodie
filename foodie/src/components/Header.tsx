import { Container, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/app/layout";

export const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Container maxWidth={"lg"}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" padding={1}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Image src="/pineconeLogo.png" width={41} height={41} alt="Main logo" />
          <Stack direction="row" spacing={1}>
            <Typography sx={{ fontSize: "14px" }}>Нүүр</Typography>
            <Typography sx={{ fontSize: "14px" }}>Хоолны цэс</Typography>
            <Typography sx={{ fontSize: "14px" }}>Хүргэлтийн бүс</Typography>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack direction="row" spacing={1}>
            <TextField
              sx={{ "& fieldset": { border: 1, borderRadius: 1 }, width: 300 }}
              placeholder="Хайх"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction="row" alignItems="center" spacing={0.4}>
              <ShoppingBasketIcon />
              <Typography sx={{ fontSize: "14px" }}>Сагс</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.4}>
              <PersonIcon />
              {isLoggedIn ? <Typography sx={{ fontSize: "14px", color: "rgba(24, 186, 81, 1)" }}>Хэрэглэгч</Typography> : <Typography sx={{ fontSize: "14px" }}>Нэвтрэх</Typography>}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
