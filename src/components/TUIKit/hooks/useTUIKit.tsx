import React, { useState, useCallback, useEffect } from 'react';
import {
  TUIStore,
  StoreName,
  IGroupModel
} from '@tencentcloud/chat-uikit-engine';
import { useTranslation } from 'react-i18next';
import {
  ChatSDK,
  Conversation,
  Profile,
  Friend,
  FriendApplication,
} from '@tencentcloud/chat';

interface blockData {
  type: 'block',
  data: Profile
}

interface friendData {
  type: 'friend',
  data: Friend
}

interface friendApplicationData {
  type: 'friendApplication',
  data: FriendApplication
}

interface addFriendData {
  type: 'addFriend',
  data: Profile
}

interface GroupData {
  type: 'group',
  data: IGroupModel
}

export type UseContactParams = blockData | friendData |
friendApplicationData | addFriendData| GroupData | undefined;

export interface UseChatParams{
  chat: ChatSDK,
  activeConversation?: Conversation,
  language?: string,
}

export const useTUIKit = ({
  chat, activeConversation: paramsActiveConversation,
  language,
}:UseChatParams) => {
  const { i18n } = useTranslation();
  const [conversation, setConversation] = useState<Conversation | undefined>(paramsActiveConversation);
  const [myProfile, setMyProfile] = useState<Profile>();
  const [TUIManageShow, setTUIManageShow] = useState<boolean>(false);
  const [TUIProfileShow, setTUIProfileShow] = useState<boolean>(false);
  const [contactData, setContactData] = useState<UseContactParams>();

  useEffect(() => {
    i18n.changeLanguage(language);
    TUIStore.watch(StoreName.USER, {
      userProfile: (userProfileData: any) => {
        setMyProfile(userProfileData);
      },
    });
  }, [language]);
  const setActiveConversation = useCallback(
    (activeConversation?: Conversation) => {
      if (activeConversation) {
        chat?.setMessageRead({ conversationID: activeConversation.conversationID });
      }
      if (conversation && (activeConversation?.conversationID !== conversation.conversationID)) {
        setTUIManageShow(false);
      }
      setConversation(activeConversation);
    },
    [chat],
  );
  const setActiveContact = (actionContactData?: UseContactParams) => {
    setContactData(actionContactData);
  };

  useEffect(() => {
    paramsActiveConversation && setConversation(paramsActiveConversation);
  }, [paramsActiveConversation]);
  return {
    conversation,
    contactData,
    setActiveConversation,
    myProfile,
    TUIManageShow,
    setTUIManageShow,
    TUIProfileShow,
    setTUIProfileShow,
    setActiveContact,
  };
};
