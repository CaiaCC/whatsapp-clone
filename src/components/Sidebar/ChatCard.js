import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {
    ChatCard,
    ChatCardInfo,
} from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = ({ addNewChat, createChat, name, id }) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 100));
    }, []);

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <ChatCard>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                    alt="avatar"
                />
                <ChatCardInfo>
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </ChatCardInfo>
            </ChatCard>
        </Link>
    ) : (
        <ChatCard onClick={createChat}>
            <h2>Add new Chat</h2>
        </ChatCard>
    );
};

export default ChatCards;
