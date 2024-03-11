import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type DeliveryStatus = {
  imgPath: string;
  menuStatus: string;
  discription: string;
};

export const DeliveryStatus = (props: DeliveryStatus) => {
  const { imgPath, menuStatus, discription } = props;
  return (
    <Stack sx={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)", borderRadius: "16px", padding: "16px", gap: "10px" }}>
      <Image src={imgPath} width={30} height={30} alt={imgPath} />
      <Typography sx={{ fontWeight: "700" }}>{menuStatus}</Typography>
      <Typography sx={{ fontWeight: "200", fontSize: "14px" }}>{discription}</Typography>
    </Stack>
  );
};
