import { Button } from '@mui/material'
import { Children, ReactNode } from 'react'

export type ButtonType = {
    buttonVariant: "text" | "outlined" | "contained" | undefined
    buttonLabel: string,
    onClick?: React.MouseEventHandler,
    type: 'submit' | 'reset' | 'button'
}

function Buttoncomp({ buttonVariant, buttonLabel, onClick, type }: ButtonType) {
    return (
        <>
            <Button
                variant={buttonVariant}
                onClick={onClick}
                type={type}>
                {buttonLabel}
            </Button>
        </>
    )
}

export default Buttoncomp
