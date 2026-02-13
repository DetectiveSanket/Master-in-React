import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between">
        <p>&copy; 2022 Educational Website</p>
        <ul className="flex">
          <li className="mr-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li className="mr-4">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="mr-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer