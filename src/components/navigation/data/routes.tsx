import React from 'react'
import { AiFillHome, AiFillPlusCircle } from 'react-icons/ai'
import { FaWallet } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { RiBarChart2Fill } from 'react-icons/ri'

export const routes = [
  {
    id: 1,
    path: '/Home',
    icon: <AiFillHome />
  },
  {
    id: 2,
    path: '/History',
    icon: <RiBarChart2Fill />
  },
  {
    id: 3,
    path: '/vs',
    icon: <AiFillPlusCircle />
  },
  {
    id: 4,
    path: '/vs',
    icon: <FaWallet />
  },
  {
    id: 5,
    path: '/vs',
    icon: <HiUsers />
  }
]
