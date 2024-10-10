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
    name: "Adrian",
    conversations: [
      {
        outgoing:
          "Hi Adrian, I wanted to check in about the food distribution event this weekend. How are things shaping up?",
      },
      {
        incoming:
          "Hey Feng Hua, thanks for reaching out! Everything’s on track. We’ve secured enough food supplies from our sponsors, and we’ll be distributing at 823 Yishun Ave 4 from 10 AM to 1 PM. How’s your volunteer team looking?",
        outgoing:
          "We have around 20 volunteers confirmed so far. Do you need more people, or is that number sufficient?",
      },
      {
        incoming:
          "Twenty volunteers should be perfect! We’ll need some help with setting up the food stations and managing the queues, so I’ll assign roles once everyone arrives. Could you ask your team to arrive by 9:30 AM for a quick briefing?",
        outgoing:
          "Got it, I’ll make sure they’re there by 9:30. Is there anything specific they need to bring or wear?",
      },
      {
        incoming:
          "Comfortable clothing and closed-toe shoes would be ideal. If possible, ask them to bring reusable water bottles to stay hydrated. We’ll provide aprons and gloves for food handling, so no worries there.",
        outgoing:
          "Sounds good. Will there be any transportation arranged for volunteers, or should they make their own way to the location?",
      },
      {
        incoming:
          "We haven’t arranged transportation, so they’ll need to make their own way. However, the site is easily accessible by public transport, and there’s parking available nearby if anyone’s driving.",
        outgoing:
          "Got it. I’ll let the team know. Will there be any breaks during the distribution, or should we plan to have shifts?",
      },
      {
        incoming:
          "We’ll have a short break around 11:30 AM, and we’ll rotate volunteers in pairs so everyone gets some downtime. We’ll also provide snacks and water during the break. Is there anything else you think we should address before the event?",
      },
    ],
  },
  {
    isRead: false,
    chatId: 2,
    name: "Ken",
    conversations: [
      {
        incoming:
          "Hi Feng Hua, I hope you're doing well! I wanted to touch base regarding the beach cleaning event we’ve been planning. Are we good to proceed with the date next Saturday?",
        outgoing:
          "Hi Ken, yes, we are set for next Saturday. I've confirmed with the volunteers from our company, and we’ll have about 30 people joining. Do you need us to bring any specific materials?",
      },
      {
        incoming:
          "That’s great to hear! We’ll be providing gloves, trash bags, and some basic cleaning tools, but if your team can bring extra gloves or reusable water bottles, that would be fantastic. We’re trying to minimize waste during the event.",
        outgoing:
          "Understood, I’ll remind everyone to bring their own water bottles and gloves. Do you have an exact location for the beach, and will there be any transportation arranged for the volunteers?",
      },
      {
        incoming:
          "Yes, the location is East Coast Park carpark D5, and I’ll send you a map with the meeting point. As for transportation, we’ve arranged a shuttle bus from [Pick-up Location] for those who need it. Could you ask your team to confirm if they’ll use the bus so we can finalize numbers?",
        outgoing:
          "I’ll send out a message to confirm with everyone and get back to you with the numbers by tomorrow. Will there be any briefings or instructions on-site before the cleaning starts?",
      },
      {
        incoming:
          "Perfect, I’ll relay that to the team. Thanks for organizing all of this! Let me know if there’s anything else you need from our side.",
      },
    ],
  },
  {
    isRead: true,
    chatId: 3,
    name: "Tom",
    conversations: [
      {
        outgoing:
          "Hi Tom, I hope everything is going well! I wanted to touch base about the elderly visitation program this weekend. Are there any last-minute updates?",
      },
      {
        incoming:
          "Hi Feng Hua, thanks for reaching out! Yes, everything is good to go. We’re visiting the Clementi area on Saturday. There are around 15 elderly residents we’ll be checking in on. How’s your volunteer team looking?",
        outgoing:
          "We have 10 volunteers confirmed, which I think should be enough. Should I remind them of anything specific before the visit?",
      },
      {
        incoming:
          "That’s a solid number! Just remind them to be patient and kind during the conversations. Some of the elderly might be a little shy or reluctant at first, but once they warm up, they’ll really appreciate the company. It’s always good to listen more than talk.",
        outgoing:
          "Noted. What time should we arrive, and where’s the meeting point?",
      },
      {
        incoming:
          "We’ll meet at 9:00 AM at Clementi CC, which is close to the residential blocks. We’ll have a quick briefing and hand out the visit schedules. Each pair of volunteers will be assigned a few homes to visit, and the visits will start around 9:30 AM.",
        outgoing:
          "Got it, I’ll let the team know to be there by 9:00 AM. Do we need to bring anything for the elderly, like small gifts or snacks?",
      },
      {
        incoming:
          "We’ve prepared care packages with some snacks, basic essentials, and a few small gifts, so no need for volunteers to bring anything. Just make sure everyone brings their own water and is dressed comfortably. The visits can take a couple of hours, so it’s good to stay hydrated.",
        outgoing:
          "That makes sense. Will there be any support in case one of the elderly needs assistance or if a situation arises that volunteers might not be able to handle?",
      },
      {
        incoming:
          "Yes, we’ll have a couple of staff members nearby who can assist if needed. If volunteers encounter any health issues or difficult situations, they can contact us immediately, and we’ll step in. We also have a list of emergency contacts for each resident.",
        outgoing:
          "Perfect, that’s reassuring. Should we prepare volunteers for any specific topics of conversation, or just let things flow naturally?",
      },
      {
        incoming:
          "Let things flow naturally. Most of the elderly residents just appreciate having someone to talk to, but if your volunteers need ideas, they can ask about the residents’ hobbies, family, or memories. Some might also want to talk about recent news or activities happening in the neighborhood.",
      },
    ],
  },
  {
    isRead: false,
    chatId: 4,
    name: "Lisa",
    conversations: [
      {
        outgoing:
          "Hi Lisa, I hope you're doing well! I wanted to check in about the workshop for the children with Cerebral Palsy this weekend. Any updates on the activities?",
      },
      {
        outgoing:
          "We have 8 volunteers confirmed. Is that number okay, or should we try to bring in more?",
      },
      {
        incoming:
          "Eight volunteers should be great! Each volunteer will be paired with one or two children to assist with activities and help them stay engaged.",
        outgoing:
          "Understood. Should the volunteers prepare in any special way for working with the children?",
      },
      {
        incoming:
          "Yes, remind them to be patient and flexible. Some of the children may have limited mobility or communication abilities, so it’s important to go at their pace. We’ll have a briefing at the start to explain how to assist during the activities.",
        outgoing:
          "Sounds good. Do the volunteers need to bring anything, or will everything be provided?",
      },
      {
        incoming:
          "Everything will be provided, including materials for the art and sensory activities. Just ask them to wear comfortable clothing and closed-toe shoes since we’ll be moving around a bit.",
        outgoing:
          "Got it! Will there be a medical team or support staff on-site in case the children need extra assistance?",
      },
      {
        incoming:
          "Yes, we’ll have a medical team and a few specialized therapists present to assist if any child needs extra care or support.",
        outgoing:
          "That’s reassuring. Should the volunteers focus on any specific activities during the workshop, or will you assign them roles?",
      },
      {
        incoming:
          "We’ll assign specific roles during the briefing, but the main focus is to encourage participation and engagement. Volunteers can assist with art projects or sensory games depending on what the children respond to best.",
        outgoing:
          "Perfect, I’ll let the team know. Is there anything else we should be aware of before Saturday?",
      },
      {
        incoming:
          "That covers everything! I’ll send a final reminder with all the details tomorrow. Thanks again for coordinating, and I look forward to seeing everyone at the workshop!",
      },
    ],
  },
  {
    isRead: false,
    chatId: 5,
    name: "Janice",
    conversations: [
      {
        incoming:
          "Hi Feng Hua, I hope you're doing well! Just wanted to check in about the workshop for the elderly this weekend. We’re planning some fun physical activities to keep them engaged. How’s your volunteer team shaping up?",
        outgoing:
          "Hi Janice, all good on our end! We’ve got 12 volunteers confirmed, and they’re excited to help with the activities.",
      },

      {
        incoming:
          "That’s a great number! We’ll be doing some light exercises like chair yoga, simple stretching, and a few games that encourage movement. Can your volunteers assist with guiding the elderly through these exercises?",
        outgoing:
          "Absolutely, they’ll be ready to guide and support the elderly through the exercises. I’ll make sure they are briefed on how to assist safely.",
      },

      {
        incoming:
          "That’s perfect! We’ll also have a fun dance session to get them moving a bit more. It’s always a hit. I’ll need volunteers to help motivate the elders to join in and make it fun for them. Will your team be comfortable with that?",
        outgoing:
          "For sure! I’ll remind them to keep the energy up and encourage the elderly to participate. They’ll do their best to make it fun and engaging.",
      },

      {
        incoming:
          "Sounds good! One more thing, we’ll provide water and refreshments, but just ask your volunteers to wear something comfortable for physical activities. Is there anything else you’d need from us?",
        outgoing:
          "Thanks for the heads-up! I’ll let everyone know about the dress code. I think we’re all set for now.",
      },

      {
        incoming:
          "Great, we’re excited to see everyone this Saturday at 9 AM at [Venue Name]. We’ll have a short briefing before we start. Thanks again for all your support!",
        outgoing:
          "Looking forward to it! I’ll make sure everyone is there by 9 AM sharp. See you then!",
      },
    ],
  },
];
