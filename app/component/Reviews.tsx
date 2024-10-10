import { IRating } from "@/interfaces";
import { Box, Rating, Typography } from "@mui/material";
import IndividualRating from "./IndividualRating";

const Reviews = ({ ratings }: { ratings: IRating[] }) => {
  const averageRating =
    ratings.reduce((partialSum, rating) => rating.value + partialSum, 0) /
    ratings.length;
  return (
    <div className="mt-6">
      <p className="font-bold text-6xl">Reviews</p>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Average Ratings</Typography>
        <div className="flex content-center gap-3">
          <Rating
            name="read-only"
            value={averageRating}
            precision={0.1}
            readOnly
          />
          <p className="font-bold text-xl">{averageRating}</p>
        </div>
      </Box>
      {ratings.map((rating) => (
        <IndividualRating rating={rating} />
      ))}
    </div>
  );
};

export default Reviews;
