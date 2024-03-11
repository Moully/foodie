import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Stack, Typography } from "@mui/material";
type SubMenus = {
  label: string;
};
export const SubMenus = (props: SubMenus) => {
  const { label } = props;
  return (
    <Stack direction="row" justifyContent="space-between" justifyItems={"center"}>
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <StarIcon color="primary" />
        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>{label}</Typography>
      </Stack>
      <Stack direction={"row"} spacing={1} color={"#18BA51"}>
        <Typography sx={{ color: "#18BA51", fontSize: "14px" }}>Бүгдийг харах</Typography>
        <ArrowForwardIosIcon />
      </Stack>
    </Stack>
  );
};
