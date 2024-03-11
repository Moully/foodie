"use client";
import { Button, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import RadioButtonCheckedSharpIcon from "@mui/icons-material/RadioButtonCheckedSharp";
import { Place } from "@mui/icons-material";

export default function Home() {
  const districts = ["Bayangol", "Chingeltei", "Songinohairhan", "Han-Uul", "Suhbaatar"];
  const [orderDistrict, setOrderDistrict] = useState("Дүүрэгээ сонгоно уу");
  return (
    <Container>
      <Grid container>
        <Grid item xs={6} padding={"16px 24px"}>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <RadioButtonCheckedSharpIcon style={{ height: "48px", width: "48px", color: "rgba(4, 104, 200, 1)" }} />
            <Stack>
              <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "rgba(139, 142, 149, 1)" }}>Алхам 1</Typography>
              <Typography sx={{ fontWeight: "400", fontSize: "20px" }}>Хаягийн мэдээлэл оруулах</Typography>
              <Typography sx={{ color: "rgba(4, 104, 200, 1)" }}>Хүлээгдэж байна</Typography>
            </Stack>
          </Stack>
          <Stack gap={2}>
            <Typography>Хаягаа оруулна уу</Typography>
            <TextField
              placeholder="Дүүрэг сонгоно уу"
              select={true}
              sx={{ backgroundColor: `${orderDistrict != "Дүүрэгээ сонгоно уу" ? "rgba(24, 186, 81, 1)" : ""}` }}
              value={orderDistrict}
              defaultValue="test"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <Place sx={{ color: `${orderDistrict != "Дүүрэгээ сонгоно уу" ? "white" : ""}` }} />
                  </InputAdornment>
                ),
                sx: {
                  color: "white",
                },
              }}>
              <MenuItem value={"jhad"}>Дүүрэгээ сонгоно уу</MenuItem>
              {districts.map((district, index) => (
                <MenuItem
                  value={district}
                  key={index}
                  onClick={() => {
                    setOrderDistrict(district);
                  }}>
                  {district}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
}
