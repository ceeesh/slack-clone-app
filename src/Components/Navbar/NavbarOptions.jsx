import React from 'react'

const NavbarOptions = ({ Icon, title }) => {

    const notYetAdded = () => {
		alert("this feature is under development");
	  };

    return (
        <div className="flex py-2 px-4 navbar-items items-center cursor-pointer" onClick={notYetAdded}>
            <Icon fontSize="20px" style={{ paddingRight: "4px", color: "white" }}/>
            <h3>{title}</h3>
            </div>
    )
}

export default NavbarOptions
