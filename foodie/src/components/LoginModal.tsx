import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CustomInput } from ".";
import { Stack } from "@mui/material";

type LoginModalProps = {
  open: boolean;
  setHandler: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function LogInModal(props: LoginModalProps) {
  const { open, setHandler } = props;
  const handleClose = () => {
    setHandler(false);
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack
        sx={{
          bgcolor: "white",
          borderRadius: "16px",
          "&:focus-visible": {
            outline: "none",
          },
        }}
        width={450}
        padding={4}
        spacing={4}>
        <Typography sx={{ fontSize: "28px", fontWeight: "700", textAlign: "center" }}>Нэвтрэх</Typography>
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
    </Modal>
  );
}
