import profileIcon from '../../assets/profileIcon.svg'

const ProfileButton = () => {
  return (
    <button className='opacity-30 hover:opacity-100'>
      <img className='h-6  w-6 filter invert greyscale' src={profileIcon} alt='Profile' />
    </button>
  )
}

export default ProfileButton