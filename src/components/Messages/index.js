import React from 'react'
import './messages.css'
import SearchBoxInput from './Components/SearchBoxInput'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Avatar, AvatarGroup } from '@mui/material'
import ChatInputBox from './Components/ChatInputBox';

function Messages() {
  return (
    <div
      className="messages-container border-ef"
    >
      <div className="d-flex h-100 w-100">
        <div className="messages-left-main-container">

          <div className="messages-left-main-container-header">
          <div className="d-flex align-items-center ml-20 mt-20">
            <p className="font_24_600">Messages</p>
            <div className="w-10px h-10px br-round bg-76 ml-10">
            </div>

          </div>

          <div className="mt-30 mr-20 ml-20">
            <SearchBoxInput />
          </div>

          </div>

          <div className="mt-10">
            {
              [...Array(10)].map((currProfile, chatIndex) => {
                return (
                  <div
                    key={"profile chat" + chatIndex}
                    className="messages-side-chat-profile d-flex 
                    justify-content-between pointer-arrow pl-20 pt-20 pr-20 pb-20">

                    <div className="d-flex ">
                      <div>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://images.mid-day.com/images/images/2018/feb/Taapsee-Pannu-Red-l.jpg"
                          sx={{ width: 50, height: 50 }}
                        />
                      </div>

                      <div className="ml-20">
                        <p className="font_12_600">Taapsee Pannu</p>

                        <p className="font_12_400 mt-2px">Hii whats up!</p>
                      </div>
                    </div>

                    <div>
                      <p className="font_12_400 mt-2px">9:50 pm</p>
                    </div>

                  </div>
                )
              }
              )}
          </div>



        </div>

        <div className="messages-right-main-container">

          <div className="messages-chat-section-header d-flex justify-content-between align-items-center w-100 pl-30" >

            <div className="mt-30 d-flex align-items-center">
              <div>
                <WidgetsOutlinedIcon />
              </div>
              <p className="font_20_600 ml-20">Chat</p>
            </div>


            <div className="mt-30 mr-20">
              <AvatarGroup
              >
                <Avatar
                  alt="Remy Sharp"
                  src={"https://w0.peakpx.com/wallpaper/969/590/HD-wallpaper-evelyn-sharma-indian-actress-portrait-make-up-indian-women-models.jpg"}
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={"https://qph.cf2.quoracdn.net/main-qimg-fcb478cfe3bd2e68cf33c691ad75b3dd-lq"}
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={"https://i.pinimg.com/1200x/4d/4c/0f/4d4c0fa0b2d8dac712fecbcefa58ba59.jpg"}
                  sx={{ width: 30, height: 30 }}
                />
                <Avatar
                  label="+30"
                  sx={{ width: 30, height: 30 }}
                >
                  <p className="font_14_400 color-white">+30</p>
                </Avatar>
              </AvatarGroup>
            </div>
          </div>


          <div className="mt-30 pl-30 pr-30 w-100">

            {
              [...Array(10)].map((currentChat, singleChatIndex) => {
                return (
                  <div key={"singleChat"+singleChatIndex}>
                    <div className="d-flex justify-content-start w-100 mt-20">

                      <div className="d-flex ">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://images.mid-day.com/images/images/2018/feb/Taapsee-Pannu-Red-l.jpg"
                          sx={{ width: 40, height: 40 }}
                        />

                        <div>
                          <p className="font_16_400 ml-10">Jenifer pannu</p>

                          <p className="messages-chat-text-box font_16_400 mt-6  ml-10 pl-10 pt-10 pr-10 pb-10">Yo! I have a great news for you all. Can I use voice messages?</p>
                        </div>
                      </div>



                    </div>

                    <div className="d-flex justify-content-end w-100 mt-20">

                      <div className="d-flex ">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://w0.peakpx.com/wallpaper/969/590/HD-wallpaper-evelyn-sharma-indian-actress-portrait-make-up-indian-women-models.jpg"
                          sx={{ width: 40, height: 40 }}
                        />

                        <div>
                          <p className="font_16_400 ml-10">Call me jenni</p>

                          <p className="messages-chat-text-box font_16_400 mt-6  ml-10 pl-10 pt-10 pr-10 pb-10">Call na then,</p>
                        </div>
                      </div>



                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className="messages-chat-inputBox pl-20 pb-10 pr-20">
              <div className="d-flex align-items-center">
              <ChatInputBox/>
              <div className="bg-1d pl-10 pb-10 pt-10 pr-10">
              <SendOutlinedIcon/>
              </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Messages