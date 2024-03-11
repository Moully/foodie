"use client";
import Cards from "@/components/Card";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState(1);

  {
    return (
      <>
        <Container>
          <iframe width={"100%"} height={"100%"} src="https://maps.google.com/maps?q=ulaanbaatar&t=&z=10&ie=UTF8&iwloc=&output=embed" id="gmap_canvas" />
        </Container>
      </>
    );
  }
}
