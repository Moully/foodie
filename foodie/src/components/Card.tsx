type CardProps = {
  label: string;
  price: number;
  discount?: number;
  imgPath: string;
};

// export const Cards = (props: Card) => {
//   const { label, price, discount, imgPath } = props;
//   return (
//     <Stack padding={2} height={300}>
//       <Box sx={{ position: "relative", border: "2px solid black" }} height={"100%"} width={"100%"}>
//         <Image src={imgPath} fill alt="cardImage" />
// <Typography
//   sx={{ position: "absolute", right: "16px", top: "16px", bgcolor: "green", color: "white", border: "2px solid black", borderRadius: "16px", display: `${discount ? "block" : "none"}` }}
//   padding={"4px 16px"}>
//   {discount}%
// </Typography>
//       </Box>
//       <Stack>
//         <Typography fontSize={20}>{label}</Typography>
//         <Stack direction="row" alignItems="center" spacing={2}>
//           <Typography sx={{ color: "green" }}>{`${discount ? price * (1 - discount / 100) : price}`}₮</Typography>
//           <Typography sx={{ textDecoration: "line-through", display: `${discount ? "block" : "none"}` }}>{price}</Typography>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import LogInModal from "./LoginModal";
import { AuthContext } from "@/app/layout";

export default function Cards(props: CardProps) {
  const { label, price, discount, imgPath } = props;
  const { isLoggedIn } = useContext(AuthContext);
  const [handleOpenModal, SetHandleOpenModal] = useState(false);

  return (
    <>
      <Card
        sx={{ maxWidth: 345, boxShadow: "none", borderRadius: "16px", position: "relative" }}
        onClick={() => {
          if (isLoggedIn) return;
          SetHandleOpenModal(true);
        }}>
        <CardMedia component="img" alt={label} height="180" image={imgPath} />
        <Typography
          sx={{ position: "absolute", right: "16px", top: "16px", bgcolor: "green", color: "white", border: "1px solid white", borderRadius: "16px", display: `${discount ? "block" : "none"}` }}
          padding={"4px 16px"}>
          {discount}%
        </Typography>
        <CardContent>
          <Typography variant="h6" component="div">
            Pizza
          </Typography>
          <Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography sx={{ color: "green" }}>{`${discount ? price * (1 - discount / 100) : price}`}₮</Typography>
              <Typography sx={{ textDecoration: "line-through", display: `${discount ? "block" : "none"}` }}>{price}₮</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <LogInModal open={handleOpenModal} setHandler={SetHandleOpenModal} />
    </>
  );
}
