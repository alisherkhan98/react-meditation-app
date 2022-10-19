import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
function Nav() {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <>
        { matches ? <DesktopNav/> : <MobileNav/>}
        </>
    )

}

export default Nav