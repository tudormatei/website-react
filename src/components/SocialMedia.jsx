import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
		<div className='app__social'>
			<div>
				<a href='https://www.instagram.com/tudormatei_/' target='_blank' ><BsInstagram /></a>
			</div>
			<div>
				<a href='https://www.linkedin.com/in/tudormatei/' target='_blank' ><AiOutlineLinkedin /></a>
			</div>
			<div>
				<a href='https://github.com/tudormatei' target='_blank' ><AiFillGithub /></a>
			</div>
		</div>
  )
}

export default SocialMedia