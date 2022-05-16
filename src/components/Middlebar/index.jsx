import { Box, Stack, Paper, Avatar, Typography, Button } from "@mui/material";
import React from "react";

const Middlebar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      overflow="auto"
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      {[1, 1, 1, 1, 1].map((workMate, index) => (
        <Paper
          key={index}
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10rem",
            minWidth: "8rem",
          }}
        >
          <Stack alignItems="center">
            <Avatar sx={{ width: "3.5rem", height: "3.5rem" }} />
            <Typography sx={{ width: "6.5rem", marginBottom: "1rem" }} noWrap>
              Namesdfdfsdfdfds
            </Typography>

            <Button size="small" variant="outlined">
              Follow
            </Button>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

export { Middlebar };