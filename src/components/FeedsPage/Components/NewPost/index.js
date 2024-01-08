import React, { useState } from 'react'
import './newPost.css'
import { Modal } from '@mui/material'
import TextInput from '../../../CommonComponents/TextInput'

import TextAreaInput from '../../../CommonComponents/TextAreaInput'
import ButtonComp from '../../../../Utils/Components/ButtonComp'
function NewPost(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const handleTitleChange = (index, name, value) => { setTitle(value) }
  const handleDescriptionChange = (index, name, value) => { setDescription(value) }
  const handleImgUrlChange = (index, name, value) => { setImgUrl(value) }
  return (
    <Modal
      open={props.isCreatePostModalOpen}
      onClose={props.handleCreatePostModal}
      aria-labelledby="new post model"
      aria-describedby="create new post via model"
    >
      <div className="newPost-container">

        <div>
          <p className="font_16_600">Title</p>
          <div className="mt-10">
            <TextInput
              value={title}
              handleInputChange={handleTitleChange}
            />
          </div>
        </div>

        <div className="mt-20">
          <p className="font_16_600">Description</p>

          <div className="mt-10">
            <TextAreaInput
              value={description}
              handleInputChange={handleDescriptionChange}
            />
          </div>
        </div>

        <div className="mt-20">
          <p className="font_16_600">Image URL</p>
          <div className="mt-10">
            <TextInput
              value={imgUrl}
              handleInputChange={handleImgUrlChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-40 mb-20">
          <ButtonComp
          color={1} 
          >
              Create Post
          </ButtonComp>
        </div>
      </div>

    </Modal>
  )
}

export default NewPost