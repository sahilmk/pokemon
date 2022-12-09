import { SVGProps } from "react"

const Search = ({ props, iconWidth, iconHeight }: any) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconWidth}
        height={iconHeight}
        {...props}>
        <path d="M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 0 0 4.574-1.719l.426.426V16l5.586 5.586a1.415 1.415 0 0 0 2-2L16 14h-1.293l-.426-.426A6.959 6.959 0 0 0 16 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z" />
    </svg>
)

export default Search
