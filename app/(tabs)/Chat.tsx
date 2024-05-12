import React, { useState, useCallback, useEffect } from "react";
import { Keyboard, ScrollView, View, Text, Image } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

// Keyboard.dismiss();

export default function TabThreeScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://picsum.photos/800",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    // const user = getUser();
    const currentUserId = props.currentMessage?.user._id;

    console.log(props);
    return (
      <View style={{ flex: 1 }}>
        {currentUserId && (
          <View>
            <Image
              style={{ width: 140, height: 140 }}
              //   source={{ uri: props.currentMessage.user.avatar }}
            ></Image>
            <Text>{props.currentMessage.user.name}</Text>
          </View>
        )}
        <Bubble
          {...props}
          textStyle={{
            right: { color: "blue", backgroundColor: "gray" },
            left: { color: "green", backgroundColor: "gold" },
          }}
          wrapperStyle={{
            right: { backgroundColor: "orange" },
            left: { backgroundColor: "red" },
          }}
        />
      </View>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderBubble={renderBubble}
      showUserAvatar
      user={{
        _id: 1,
        name: "My",
        avatar: "https://source.unsplash.com/user/pacificofficeinteriors",
      }}
    />
  );
}
