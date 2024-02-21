import { Button } from '@mui/material'
import { Children, ReactNode } from 'react'

export type ButtonType = {
    buttonVariant: "text" | "outlined" | "contained" | undefined
    buttonLabel: string,
    onClick?: React.MouseEventHandler,
    type: 'submit' | 'reset' | 'button',
    buttonColor?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    buttonSize?: "small" | "medium" | "large"
}

function Buttoncomp({
    buttonVariant,
    buttonLabel,
    onClick,
    type,
    buttonColor,
    buttonSize }: ButtonType) {
    return (
        <>
            <Button
                variant={buttonVariant}
                onClick={onClick}
                type={type}
                color={buttonColor}
                size={buttonSize}>
                {buttonLabel}
            </Button>
        </>
    )
}

export default Buttoncomp
