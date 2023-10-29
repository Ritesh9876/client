import React from 'react'
import './feedsPage.css'
import ButtonComp from '../../Utils/Components/ButtonComp'
import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

function FeedsPage() {
  return (
    <div className="feedsPage-main-container">
      <div className="feedsPage-new-post-container d-flex justify-content-between align-items-center border-ef br-10px pl-10 pt-20 pr-10 pb-20">
        <p className="font_24_600">Start a new post</p>

        <ButtonComp
          color={2}
          variant={1}
          size={2}
        >
          New Post +
        </ButtonComp>
      </div>

      {[...new Array(10)].map((currPost,postIndex) => {
        return (
          <div 
          key={"p"+postIndex}
          className="feedsPage-post-container border-ef br-10px pt-20 mt-30">
            <div className="d-flex pl-10 pr-10">
              <div className="">
                <Avatar
                  alt="profile Image"
                  src="https://img.theweek.in/content/dam/week/gallery/shots/2023/april-16-2023/people/73-Vijay.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </div>

              <div className="ml-10">
                <p className="font_16_600">Vijay Thalapathy</p>
                <p className="font_14_400">Leo</p>
                <p className="font_12_400">2d ago</p>
              </div>
            </div>

            <div className="mt-20">
              <p className="font_24_600 ml-10">New Movie Release</p>
              <div className="feedsPage-post-description">
                <p className="font_14_400 mt-10 ml-10 pb-20 pr-10">
                  There are rumours that MS Dhoni has plans to come into politics eventually.

                  I hope that does happen.

                  I don't have a strong opinion about how that may turn out.

                  I would just love to hear more thoughts from MSD in general, and how he thinks about different things, his worldview, frame of reference, and how he operates.

                  As he rarely gives any interviews (and most time interviewers don't ask many deep questions), there are so less of his thoughts out there.

                  or best if he someday decides to write a book, that would be amazing.

                  I hope that does happen.

                  I don't have a strong opinion about how that may turn out.

                  I would just love to hear more thoughts from MSD in general, and how he thinks about different things, his worldview, frame of reference, and how he operates.

                  As he rarely gives any interviews (and most time interviewers don't ask many deep questions), there are so less of his thoughts out there.

                  or best if he someday decides to write a book, that would be amazing.
                </p>

                <p className="feedsPage-seeMore font_14_400">...see more</p>
              </div>
            </div>

            <div className="feedsPage-post-image-container br-10px">
              <img
                className="w-100 h-100 br-10px"
                alt="post pic"
                src="https://img.theweek.in/content/dam/week/gallery/shots/2023/april-16-2023/people/73-Vijay.jpg"
              />
            </div>

            <hr className="mt-20"/>

            <div className="d-flex justify-content-start align-items-center pl-10 pr-10 pb-20">
             <div className="pointer-arrow">
             <ThumbUpOutlinedIcon/>
              </div>
             <div className="pointer-arrow ml-20">
             <InsertCommentOutlinedIcon/>
            </div>
            </div>

          </div>
        )
      })}

    </div>
  )
}

export default FeedsPage