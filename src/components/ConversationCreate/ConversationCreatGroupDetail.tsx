import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Conversation, Profile } from '@tencentcloud/chat';
import { TUIConversationService } from '@tencentcloud/chat-uikit-engine';
import { Input } from '../Input';
import './styles/ConversationCreatGroupDetail.scss';
import { Icon, IconTypes } from '../Icon';
import {
  Avatar,
  defaultGroupAvatarWork,
  defaultGroupAvatarAVChatRoom,
  defaultGroupAvatarMeeting,
  defaultGroupAvatarPublic, defaultUserAvatar,
} from '../Avatar';
import { PageStateTypes } from './ConversationCreate';
import { ConversationGroupTypeInfo, GroupType, typeInfoList } from './ConversationGroupTypeInfo';
import { useTUIKitContext } from '../../context';
import { CreateGroupConversationParams } from '../../hooks';

export interface ConversationCreatGroupDetailProps {
  profileList: Array<Profile>,
  pageState: PageStateTypes,
  setPageState: React.Dispatch<React.SetStateAction<PageStateTypes>>,
  createConversation: (params: string | CreateGroupConversationParams) => Promise<Conversation>,
  setConversationCreated: React.Dispatch<React.SetStateAction<boolean>>,
}

export function ConversationCreatGroupDetail(props: ConversationCreatGroupDetailProps) {
  const {
    profileList, pageState, setPageState, createConversation, setConversationCreated,
  } = props;
  const { t } = useTranslation();
  const { setActiveConversation, myProfile } = useTUIKitContext();
  const temp = [...profileList];
  myProfile && temp.unshift(myProfile);
  const name = temp.map((item) => item.nick || item.userID).toString();
  const [groupName, setGroupName] = useState(
    name.length >= 15 ? `${name.slice(0, 12)}...` : name,
  );
  const [groupID, setGroupID] = useState('');
  const [groupType, setGroupType] = useState<string>('Work');
  const groupInfoChange = (e: any, type: string) => {
    const { value } = e.target;
    switch (type) {
      case 'name':
        setGroupName(value);
        break;
      case 'id':
        setGroupID(value);
        break;
      case 'type':
        setGroupType(value);
        break;
      default:
    }
  };
  const showGroupTypeInfo = () => {
    setPageState(PageStateTypes.GROUP_TYPE);
  };
  const getDefaultAvatar = (type: string) => {
    switch (type) {
      case 'Work':
        return defaultGroupAvatarWork;
      case 'Public':
        return defaultGroupAvatarPublic;
      case 'Meeting':
        return defaultGroupAvatarMeeting;
      case 'AVChatRoom':
        return defaultGroupAvatarAVChatRoom;
      default:
        return '';
    }
  };
  // eslint-disable-next-line
  // @ts-ignore
  const getDes = () => typeInfoList?.find((item: any) => item.type === groupType).des;

  const next = async () => {
    const memberList = profileList.map((item) => ({
      userID: item.userID,
    }));
    const avatar = getDefaultAvatar(groupType);
    const conversation = await createConversation({
      name: groupName,
      // eslint-disable-next-line
      // @ts-ignore
      type: GroupType[groupType], 
      groupID,
      avatar, 
      memberList,
    });
    setActiveConversation(conversation);
    TUIConversationService.switchConversation(conversation?.conversationID);
    setConversationCreated(false);
  };
  return pageState !== PageStateTypes.GROUP_TYPE ? (
    <>
      <div className="tui-conversation-create-group-detail">
        <div className="create-group-box create-group-name">
          <Input
            maxLength={15}
            value={groupName}
            onChange={(e) => {
              groupInfoChange(e, 'name');
            }}
            border="bottom"
            customClassName="input-group-name"
            clearable
            prefix={<div className="input-group-title">{t('TUIConversation.Group Name')}</div>}
          />
        </div>
        <div className="create-group-box create-group-id">
          <Input
            border="bottom"
            customClassName="input-group-text"
            clearable
            value={groupID}
            onChange={(e) => {
              groupInfoChange(e, 'id');
            }}
            prefix={<div className="input-group-title">{t('TUIConversation.Group ID')}</div>}
          />
        </div>
        <div className="create-group-box create-group-type" onClick={showGroupTypeInfo}>
          <Input
            readOnly
            border="bottom"
            customClassName="input-group-text"
            prefix={<div className="input-group-title">{t('TUIConversation.Group Type')}</div>}
            suffix={(
              <Icon
                onClick={showGroupTypeInfo}
                type={IconTypes.ARROW_RIGHT}
                width={7}
                height={12}
              />
            )}
            value={t(`TUIConversation.${groupType}`)}
            onChange={(e) => {
              groupInfoChange(e, 'type');
            }}
          />
        </div>
        <div className="create-group-illustrate">
          {t(`TUIConversation.${getDes()}`)}
        </div>
        <div className="create-group-portrait">
          <div className="create-group-portrait-title">{t('TUIConversation.Participants')}</div>
          <div className="create-group-portrait-info-container">
            {profileList.map(({ avatar, userID, nick }) => (
              <div className="create-group-portrait-info" key={userID}>
                <Avatar shape="square" size={50} image={avatar || defaultUserAvatar} />
                <div className="create-group-portrait-info-nick">{nick}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tui-conversation-create-next-container">
        <div role="presentation" className="tui-conversation-create-next" onClick={next}>{t('TUIConversation.Create')}</div>
      </div>
    </>
  ) : (
    <ConversationGroupTypeInfo
      groupType={groupType}
      setGroupType={setGroupType}
      setPageState={setPageState}
    />
  );
}
