"use client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Listings from "./Listings";
import ModalComponent from "./ModalComponent";
const MainMenu = () => {
  const [eventName, setEventName] = useState<string | null>("");

  return (
    <>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>
      <h1>Spacing</h1>

      <Paper elevation={0}>
        <div className="flex justify-between items-end">
          <h1 className="font-bold text-5xl text-blue-700">Browse events</h1>
          <div className="flex flex-col gap-5">
            <div className="flex justify-end gap-3">
              <ModalComponent type={"chats"} />
              <ModalComponent type={"notifications"} />
            </div>
            <TextField
              onChange={(e) => setEventName(e.target.value)}
              sx={{
                ".MuiOutlinedInput-root": {
                  borderRadius: 4,
                },
              }}
              size="small"
              color="primary"
              focused
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon
                        sx={{ fontSize: 30 }}
                        color="primary"
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
        </div>
        <Listings eventName={eventName} />
      </Paper>
    </>
  );
};

export default MainMenu;
