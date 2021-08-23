import React, { useEffect } from 'react'
import Me from '../Me'

function Bedev() {
    useEffect(() => {
        window.scrollTo({ top: 0 })
        return () => { window.scrollTo({ top: 0 }) };
    }, [])
    return (
        <>
            <Me />
        </>
    )
}

export default Bedev

