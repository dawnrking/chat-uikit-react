## [3.0.0] (2025-07-09)

#### feat
* feat: Architecture refactoring - Introduce tuikit-atomicx-react as the underlying component library.
* feat: Support global search (Search) with three search modes (STANDARD, EMBEDDED, MINI).
* feat: Support read receipts.
* feat: Support conversation management (ChatSetting).
* feat: Support AppBuilder configuration for themes and component features.

#### chore
* chore: Optimize message list scrolling experience.
* chore: Optimize mouse hover state management.
* chore: Optimize conversation operations and message operations user experience.

## [2.3.1] (2024-11-20)

#### feat
* feat: Upgrade emoji resources to compatible with other platform (e.g. react native).

## [2.3.0] (2024-10-11)

## [2.2.9] (2024-10-09)

#### feat
* feat: Rename UIKit components to Chat, ConversationList, ChatSetting, Contact, and Profile.
* feat: Support Custom ConversationList

## [2.2.7] (2024-09-13)

#### feat
* feat: Support 1v1 audio and video calls
* feat: Support light and dark theme switching
* feat: Support Chinese Traditional TW

#### fix
* fix: Fix source code integration error

## [2.2.6] (2024-09-02)

#### feat
* feat: Deprecate the root component TUIKIt and replace it with UIKitProvider

#### fix
* fix: Fix the issue where ConversationList collapses in height on mobile devices in the demo

## [2.2.5] (2024-8-16)

#### feat
* feat: Support icon font
* feat: Support node20+

#### fix
* fix: Conversation search title displays incorrectly

## [2.2.4] (2024-7-30)

#### feat
* feat: Localization language Added for ja-JP and ko-KR

## [2.2.3] (2024-7-05)

#### fix
* fix: uikit tabbar language switching is invalid

## [2.2.2] (2024-6-25)

#### feat
* feat: Support groupList
#### fix
* fix: H5 chat back is invalid

## [2.1.4] (2024-6-03)

#### feat
* feat: Support integration chat only

## [2.1.3] (2024-5-17)

#### feat
* feat: Support source code integration

## [2.1.2] (2024-4-29)

#### feat
* feat: Support for contact (H5)

## [2.1.0] (2024-4-09)

#### feat
* feat: Support logic layer engine
* feat: Support H5.

## [1.2.2] (2024-1-09)

#### feat
* feat: Support for contact (PC).
* feat: Support language switching between Chinese and English.

## [1.1.0] (2023-09-20)

#### feat
* feat: Upgrading SDK to v3.

#### fix
* fix: the error of chat message key when opening for the first time.
* fix: quoting one's own message.


## [1.0.3] (2023-05-25)

#### fix
* fix: TUIMessageList className
* fix: DatePicker onchange value type
* fix: github demo start

## [1.0.2] (2023-03-13)

#### feat
* feat: TUIConversation add filterConversation

#### fix
* fix: tim-sdk-js reference path problem
* fix: TUIConversation AVChatRoom display
* fix: isJSON function judgment error problem

## [1.0.1] (2023-02-16)

#### feat
* feat: TUIMessageInput add isTransmitter
* feat: TUIChat add TUIMessageInput config
* feat: MessageCustom add system custom message
* feat: add export Popup component

#### chore
* chore: Optimize ts format
* chore: remove useless code

## [1.0.0] (2023-01-13)

#### feat
* feat: Added custom whether to display the file upload progress
* feat: Added message list history timestamp
* feat: Support voice message playback
* feat: A single-type TUIMessage replacement
* feat: Added custom message creation
* feat: Support to configure whether the avatar is displayed in the chat
* feat: sendmessage adds options parameters (eg: offlinePushInfo, onlineUserOnly)
* feat: Support screenshots to paste and send directly

#### chore
* chore: Different additional operation functions for different types of messages can be customized
* chore: Citation messages cannot be clicked to jump
* chore: message bubble style

#### fix
* fix: enter page flashing
* fix: There is a problem with emoticon mixed row rendering
* fix: File message could not be downloaded

## [0.0.3] (2022-11-28)

#### chore
* chore: adjust emjio name to English name


## [0.0.2] (2022-11-23)

#### fix
* fix: rollup config

#### chore
* chore: add changelog

## [0.0.1] (2022-11-21)

#### feat
* feat: add chat-uikit-react
