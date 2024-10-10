export const upcomingEvents: string[] = [
  "Food distribution event in 3 days",
  "Beach Cleanup event in 7 days",
];

export const unreadMessages: string[] = [
  "Ken messaged you just now!",
  "Clara messaged you since 1 day ago!",
];

export const chats: {
  isRead: boolean;
  chatId: number;
  name: string;
  conversations: { incoming?: string; outgoing?: string }[];
}[] = [
  {
    isRead: false,
    chatId: 1,
    name: "Ken",
    conversations: [
      { incoming: "hello", outgoing: "bye" },
      {
        incoming: "hello 2",
        outgoing:
          "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including",
      },
      { outgoing: "NOT TOO BAD" },
      { incoming: "NOT TOO BAD" },
      {
        incoming:
          "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includings",
      },
    ],
  },
  {
    isRead: false,
    chatId: 2,
    name: "Adrian",
    conversations: [{ incoming: "hello", outgoing: "bye" }],
  },
  {
    isRead: true,
    chatId: 3,
    name: "Tom",
    conversations: [{ incoming: "hello", outgoing: "bye" }],
  },
  {
    isRead: false,
    chatId: 4,
    name: "Lisa",
    conversations: [{ incoming: "hello", outgoing: "bye" }],
  },
  {
    isRead: false,
    chatId: 5,
    name: "Janice",
    conversations: [{ incoming: "hello", outgoing: "bye" }],
  },
];
