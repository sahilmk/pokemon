import { TextField } from '@mui/material'

export type InputType = {
    inputLabel?: string,
    hasFullWidth?: boolean,
    inputType?: string,
    inputColor?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined,
    onBlur?: (event?: React.FocusEvent<HTMLElement>) => void,
    onChange?: (event: React.ChangeEvent<HTMLElement> | any) => void,
    onFocus?: (event?: React.FocusEvent<HTMLElement>) => void
}

function Inputcomp({
    inputLabel,
    hasFullWidth,
    inputType,
    inputColor,
    onBlur,
    onChange,
    onFocus }: InputType) {
    return (
        <>
            <TextField
                label={inputLabel}
                fullWidth={hasFullWidth}
                type={inputType}
                color={inputColor}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus} />
        </>
    )
}

export default Inputcomp
