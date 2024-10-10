"use client";
import DatePicker from "@/app/component/DatePicker";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Reviews from "@/app/component/Reviews";
import { eventDetails } from "@/data/eventDetails";
import { IEventDetails } from "@/interfaces";
import {
  Alert,
  AlertTitle,
  Button,
  LinearProgress,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const EventDetailsPage = ({ params }: { params: { id: string } }) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  const event: IEventDetails = eventDetails.filter(
    (event) => event.id.toString() === params.id
  )[0];

  const [state, setState] = useState<any>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleOnClick = () => {
    setState({ ...state, open: true });
    setInterval(() => {
      setProgress((oldProgress) => {
        return oldProgress + 10;
      });
    }, 475);
    setTimeout(() => {
      router.push("/home");
    }, 5000);
  };

  if (!event) redirect("/error");
  return (
    <>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>

      {console.log(value)}
      <Paper
        elevation={3}
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
      >
        <div className="flex justify-around">
          {/* Left content */}
          <div className="w-1/2">
            <h1 className="font-bold text-2xl my-2">{event.name}</h1>
            <Image
              src={`/images/event-${event.id}.png`}
              alt={`event number ${event.id}`}
              width={600}
              height={600}
            />
            <p className="mt-3">{event.description}</p>
            <Reviews ratings={event.ratings} />
          </div>

          {/* Right content */}
          <div className="flex flex-col">
            <DatePicker date={value} setDate={setValue} />
            <p>
              Date selected: {value?.date()}/{value!.month() + 1}/
              {value?.year()}
            </p>
            <TextField
              label="Number of volunteers"
              type="number"
              sx={{ mt: 3 }}
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 1,
                },
              }}
            />
            <TextField
              label="Special requirements"
              sx={{ mt: 3 }}
              multiline
              rows={4}
            />
            <Button variant="contained" sx={{ mt: 3 }} onClick={handleOnClick}>
              Commit
            </Button>
            <div className="mt-6">
              <p>
                Any queries? Contact us!
                <span className="mx-3 cursor-pointer">
                  <LocalPhoneIcon />
                </span>
                <span className="cursor-pointer">
                  <EmailIcon />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <p>Volunteers commited successfully! </p>
          <p>Navigating back to main page.</p>
          <LinearProgress variant="determinate" value={progress} />
        </Alert>
      </Snackbar>
    </>
  );
};

export default EventDetailsPage;
