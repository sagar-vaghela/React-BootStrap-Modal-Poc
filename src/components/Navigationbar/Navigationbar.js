import React from 'react';
import { Link } from "react-router-dom";

export default function Navigationbar() {
  return (
    <>
      <nav className='bg-primary py-3 mb-5'>
        <ul className='d-flex list-style-none'>
          <li >
            <Link className='text-light px-3 text text-decoration-none' to='/'>Page 1</Link>
          </li>
          <li >
            <Link className='text-light px-3 text text-decoration-none' to='/page2'>Page 2</Link>
          </li>
          <li >
            <Link className='text-light px-3 text text-decoration-none' to='/page3'>Page 3</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
