import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './feedsPage.css'
// import ButtonComp from '../../Utils/Components/ButtonComp'
import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
// import NewPost from './Components/NewPost';

function FeedsPage() {

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9092/team/all')
        .then(response => {
          setFeedData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}, []);

  // const [isCreatePostModalOpen,setIsCreatePostModalOpen] = useState(false)
  
  // const handleCreatePostModal = () =>{
  //   setIsCreatePostModalOpen(!isCreatePostModalOpen)
  // }

  return (
    <div className="feedsPage-main-container">
        {/* <NewPost
        isCreatePostModalOpen={isCreatePostModalOpen}
        handleCreatePostModal={handleCreatePostModal}
        /> */}
      {/* <div className="feedsPage-new-post-container d-flex justify-content-between align-items-center border-ef br-10px pl-10 pt-20 pr-10 pb-20">
        <p className="font_24_600">Start a new post</p>

        <ButtonComp
          color={2}
          variant={1}
          size={2}
          onClick={() =>{
            console.log("on clicking working")
            setIsCreatePostModalOpen(true)
          }}
        >
          New Post +
        </ButtonComp>
      </div> */}


          {feedData.map((data, key)=>{
                        console.log(key);
                    return(
                      <div 
                      className="feedsPage-post-container border-ef br-10px pt-20 mt-30">
                        <div className="d-flex pl-10 pr-10">
                          <div className="">
                            <Avatar
                              alt="profile Image"
                              src={data.profileImageUrl}
                              sx={{ width: 56, height: 56 }}
                            />
                          </div>
            
                          <div className="ml-10">
                            <p className="font_16_600">{data.name}</p>
                            <p className="font_14_400">#{data.tagLine}</p>
                            <p className="font_12_400">2d ago</p>
                          </div>
                        </div>
            
                        <div className="mt-20">
                          <p className="font_20_600 ml-10">{data.bio}</p>
                          <div className="feedsPage-post-description">
                            <p className="font_14_400 mt-10 ml-10 pr-10">
                              {data.description}
                            </p>
                            {/* <p className="feedsPage-seeMore font_14_400">...see more</p> */}
                          </div>
                        </div>
            
                        {/* <div className="feedsPage-post-image-container br-10px">
                          <img
                            className="w-100 h-100 br-10px"
                            alt="post pic"
                            src="https://img.theweek.in/content/dam/week/gallery/shots/2023/april-16-2023/people/73-Vijay.jpg"
                          />
                        </div> */}
            
                        <div className="pl-10 pr-10 mt-20">
                        <hr />
                        </div>
            
                        <div className="d-flex justify-content-start align-items-center pl-10 pr-10 pb-20">
                         <div className="pointer-arrow">
                         <ThumbUpOutlinedIcon/>
                          </div>
                         <div className="pointer-arrow ml-20">
                         <InsertCommentOutlinedIcon/>
                        </div>
                        </div>
            
                      </div>
                        
                );
            })}


    </div>
  )
}

export default FeedsPage