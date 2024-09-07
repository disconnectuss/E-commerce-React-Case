import React from 'react'

const Header = () => {
  return (
 <div className="header-container h-[50px] text-white">
    <input type="text" className="search-box" placeholder='Search' />
    <div className="total-price">
        117.000₺
    </div>
    <div className="user">
        Kerem
    </div>
 </div>
  )
}

export default Header
