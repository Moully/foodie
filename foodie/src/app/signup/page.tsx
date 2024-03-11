"use client";
import { CustomInput } from "@/components";
import { Button, Container, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(event.target.value);
  };
  const handleAddress = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddress(event.target.value);
  };
  const handleEmail = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };
  const handleRePassword = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRePassword(event.target.value);
  };

  return (
    <Container>
      <Stack sx={{ margin: "100px auto" }} width={450} padding={4} spacing={6}>
        <Typography sx={{ fontSize: "28px", textAlign: "center", fontWeight: "700" }}>Бүртгүүлэх</Typography>
        <Stack spacing={2}>
          <CustomInput label="Нэр" placeholder="Нэрээ оруулна уу" value={name} onChange={handleName} />
          <CustomInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" value={email} onChange={handleEmail} />
          <CustomInput label="Хаяг" placeholder="Та хаягаа оруулна уу" value={address} onChange={handleAddress} />
          <CustomInput label="Нууц үг" placeholder="Нууц үгээ оруулна уу" type="password" value={password} onChange={handlePassword} />
          <CustomInput label="Нууц үг давтах" placeholder="Нууц үгээ оруулна уу" type="password" value={rePassword} onChange={handleRePassword} />
        </Stack>
        <Stack direction="row" justifyItems={"center"} spacing={2}>
          <CloudQueueIcon htmlColor="black" />
          <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
        </Stack>

        <Button
          sx={{
            bgcolor: `${email !== "" && password !== "" && rePassword !== "" ? "#18BA51" : "#EEEFF2"}`,
            color: `${email !== "" && password !== "" && rePassword !== "" ? "rgba(255, 255, 255, 1)" : "rgba(28, 32, 36, 0.24)"}`,
            padding: "8px 16px",
          }}>
          Бүртгүүлэх
        </Button>
      </Stack>
    </Container>
  );
}
