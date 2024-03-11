"use client";
import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <Stack sx={{ margin: "100px auto" }} width={450} padding={4} spacing={6}>
        <Typography sx={{ fontSize: "28px", textAlign: "center" }}>Нэвтрэх</Typography>
        <CustomInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" value={email} onChange={handleEmail} />
        <Stack>
          <CustomInput label="Нууц үг" placeholder="Нууц үг" type="password" value={password} onChange={handlePassword} />
          <Typography alignSelf={"end"} fontSize={14}>
            Нууц үг сэргээх
          </Typography>
        </Stack>
        <Button
          sx={{
            bgcolor: `${email !== "" && password !== "" ? "#18BA51" : "#EEEFF2"}`,
            color: `${email !== "" && password !== "" ? "rgba(255, 255, 255, 1)" : "rgba(28, 32, 36, 0.24)"}`,
            padding: "8px 16px",
          }}>
          Нэвтрэх
        </Button>
        <Typography alignSelf={"center"}>Эсвэл</Typography>
        <Button sx={{ border: "1px solid #18BA51", padding: "8px 16px" }}>Бүртгүүлэх</Button>
      </Stack>
    </Container>
  );
}
