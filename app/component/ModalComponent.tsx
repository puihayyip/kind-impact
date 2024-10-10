import ChatIcon from "@mui/icons-material/Chat";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";

import { eventDetails } from "@/data/eventDetails";
import {
  chats,
  unreadMessages,
  upcomingEvents,
} from "@/data/notificationsAndChats";
import { Avatar, Badge, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ChildModal({
  chat,
}: {
  chat: {
    isRead: boolean;
    chatId: number;
    name: string;
    conversations: {
      incoming?: string;
      outgoing?: string;
    }[];
  };
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpen = () => {
    chat.isRead = true;
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    chat.conversations.push({ outgoing: message });
    setMessage("");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    //<------use enter key to submit form
    if (event.key === "Enter" && event.ctrlKey) {
      handleSubmit(event);
    }
  };

  return (
    <>
      <div
        className="flex gap-3 justify-start my-3 cursor-pointer"
        onClick={handleOpen}
      >
        <Badge badgeContent={!chat.isRead ? 1 : 0} color="warning">
          <Avatar src={`/images/avatar-${chat.chatId}.png`} />
        </Badge>
        <p className="text-2xl py-2">{chat.name}</p>
        <p className="py-3 grow text-end">
          {eventDetails.find((event) => event.id === chat.chatId)?.name}
        </p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 800, borderRadius: "30px" }}>
          <p className="text-2xl font-bold mb-4" id="child-modal-title">
            {chat.name}
          </p>
          {chat.conversations.map((conversation) => (
            <div className="flex flex-col">
              {conversation.incoming ? (
                <p className="border-2 rounded-lg self-start p-1 bg-gray-100 my-1 mr-52">
                  {conversation.incoming}
                </p>
              ) : (
                ""
              )}
              {conversation.outgoing ? (
                <p className="border-2 rounded-lg self-end p-1 bg-green-100 my-1 ml-52">
                  {conversation.outgoing}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              "& .MuiTextField-root": { m: 1, width: "75ch" },
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                multiline
                value={message}
                maxRows={10}
                id="input-with-sx"
                variant="standard"
                onKeyDown={handleKeyDown}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <SendOutlinedIcon
                  sx={{
                    color: "action.active",
                    mr: 1,
                    my: 0.5,
                    cursor: "pointer",
                  }}
                />
              </button>
            </form>
          </Box>
          <Button onClick={handleClose}>Close Chat</Button>
        </Box>
      </Modal>
    </>
  );
}

export default function ModalComponent({ type }: { type: string }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const badgeContent =
    type === "notifications"
      ? upcomingEvents.length + unreadMessages.length
      : chats.reduce(
          (partialSum, chat) => partialSum + (!chat.isRead ? 1 : 0),
          0
        );

  return (
    <div>
      <Button onClick={handleOpen}>
        <Badge badgeContent={badgeContent} color="warning">
          {type === "notifications" ? (
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: 50 }}
              color="primary"
            />
          ) : (
            <ChatIcon sx={{ fontSize: 50 }} color="primary" />
          )}
        </Badge>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {type === "notifications" ? (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <p className="text-green-500">Upcoming</p>
            </Typography>
            <div className="mt-2">
              {upcomingEvents.map((event) => (
                <p className="mt-1 bg-green-300 px-2">{event}</p>
              ))}
            </div>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              <p className="text-yellow-500">Unread Messages</p>
            </Typography>
            <div className="mt-2">
              {unreadMessages.map((message) => (
                <p className="mt-1 bg-yellow-300 px-2">{message}</p>
              ))}
            </div>
          </Box>
        ) : (
          <Box sx={{ ...style, width: 600 }}>
            <div className="flex flex-col">
              {chats.map((chat) => (
                <ChildModal chat={chat} />
              ))}
            </div>
          </Box>
        )}
      </Modal>
    </div>
  );
}
