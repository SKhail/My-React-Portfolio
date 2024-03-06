import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/CustomButton.css'

export const CustomButton = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <Button className='custom-btn' onClick={handleEmailClick}>
      Contact Me
    </Button>
  )
}
export default CustomButton
