import React from "react";
import { useSelector } from "react-redux";
import { Paper, Stack, Avatar, Typography } from "@mui/material";
import { UserAction } from "./UserAction";

const numberTypo = {
  fontWeight: "bold",
};
const textTypo = {
  lineHeight: "0.9em",
  fontSize: { xs: "0.8em", sm: "1em" },
};
const bioStyle = {
  fontSize: "0.9em",
  lineHeight: "1em",
  margin: "0.25rem 0 ",
};

const UserInfoCard = () => {
  const { userDetails: currUser, userPosts: currUserPosts } = useSelector(
    (store) => store.profile
  );

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: "0.25rem",
        maxWidth: "35rem",
        margin: "1rem auto",
        padding: "1rem",
      }}
    >
      <Stack direction="row" alignItems="center" width="100%">
        <Avatar
          sx={{
            width: { xs: "5rem", sm: "6rem" },
            height: { xs: "5rem", sm: "6rem" },
          }}
          src={currUser?.avatarURL}
        />
        <Stack
          sx={{
            width: `calc(100% - 5rem)`,
            padding: "0.5rem",
            paddingLeft: "1rem",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{ marginBottom: { xs: "0.25rem", sm: "0.5rem" } }}
          >
            <Typography noWrap sx={{ fontSize: "1em", fontWeight: "bold" }}>
              @{currUser?.username}
            </Typography>
            <UserAction screenSize={"sm"} />
          </Stack>
          <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
            <Stack alignItems="center" sx={{ cursor: "pointer" }}>
              <Typography sx={{ ...numberTypo }}>
                {currUserPosts?.length}
              </Typography>
              <Typography sx={{ ...textTypo }}>Posts</Typography>
            </Stack>
            <Stack alignItems="center" sx={{ cursor: "pointer" }}>
              <Typography sx={{ ...numberTypo }}>
                {currUser?.followers?.length}
              </Typography>
              <Typography sx={{ ...textTypo }}>Followers</Typography>
            </Stack>
            <Stack alignItems="center" sx={{ cursor: "pointer" }}>
              <Typography sx={{ ...numberTypo }}>
                {currUser?.following?.length}
              </Typography>
              <Typography sx={{ ...textTypo }}>Following</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Typography noWrap sx={{ fontWeight: "bold", margin: "0.5rem 0" }}>
        {currUser?.firstName} {currUser?.lastName}
      </Typography>
      <Typography sx={{ ...bioStyle }}>{currUser?.bio}</Typography>
      <Typography sx={{ ...bioStyle }}>
        <a target="_blank" href={`${currUser?.website}`}>
          {currUser?.website}
        </a>
      </Typography>
      <UserAction screenSize={"xs"} />
    </Paper>
  );
};

export { UserInfoCard };
