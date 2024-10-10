import { IRating } from "@/interfaces";
import { Avatar, Box, Rating } from "@mui/material";
import React from "react";

const IndividualRating = ({ rating }: { rating: IRating }) => {
  return (
    <div className="border-t-4 py-4">
      <div className="flex gap-2 content-center">
        <Avatar />
        <p>{rating.user}</p>
      </div>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating name="read-only" value={rating.value} precision={1} readOnly />
      </Box>
      <p>{rating.comment}</p>
    </div>
  );
};

export default IndividualRating;
