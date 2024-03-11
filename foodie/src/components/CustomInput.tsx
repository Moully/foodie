import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type CustomInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
};

export const CustomInput = (props: CustomInputProps) => {
  const { placeholder, onChange, value, label, type } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack gap={0.5}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type === "password" && showPassword ? "text" : type}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}</IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
