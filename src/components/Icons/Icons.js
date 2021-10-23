import React from 'react'

export const IconPlus = ({ width = 32, height = 32, color = "#91E043" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31 12H20V1C20 0.448 19.552 0 19 0H13C12.448 0 12 0.448 12 1V12H1C0.448 12 0 12.448 0 13V19C0 19.552 0.448 20 1 20H12V31C12 31.552 12.448 32 13 32H19C19.552 32 20 31.552 20 31V20H31C31.552 20 32 19.552 32 19V13C32 12.448 31.552 12 31 12Z"
            fill={color}
        />
    </svg>
)

export const IconMinus = ({ width = 32, height = 8, color = "#EE6767" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 1V7C0 7.552 0.448 8 1 8H31C31.552 8 32 7.552 32 7V1C32 0.448 31.552 0 31 0H1C0.448 0 0 0.448 0 1Z"
            fill={color}
        />
    </svg>
)

export const IconChart = ({ width = 32, height = 32, color = "#F2C94C" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4 28H32V32H0V0H4V28ZM9 26C7.343 26 6 24.657 6 23C6 21.343 7.343 20 9 20C9.088 20 9.176 20.005 9.262 20.012L12.487 14.637C12.18 14.166 12 13.604 12 12.999C12 11.342 13.343 9.999 15 9.999C16.657 9.999 18 11.342 18 12.999C18 13.603 17.821 14.166 17.513 14.637L20.738 20.012C20.824 20.005 20.912 20 21 20C21.067 20 21.133 20.003 21.198 20.007L26.522 10.691C26.193 10.209 26 9.627 26 9C26 7.343 27.343 6 29 6C30.657 6 32 7.343 32 9C32 10.657 30.657 12 29 12C28.933 12 28.867 11.997 28.802 11.993L23.478 21.309C23.807 21.79 24 22.373 24 23C24 24.657 22.657 26 21 26C19.343 26 18 24.657 18 23C18 22.396 18.179 21.833 18.487 21.362L15.262 15.987C15.176 15.994 15.088 15.999 15 15.999C14.912 15.999 14.824 15.994 14.738 15.987L11.513 21.362C11.82 21.833 12 22.395 12 22.999C12 24.656 10.657 25.999 9 25.999V26Z"
            fill={color} />
    </svg>
)

export const IconMenu = ({ width = 32, height = 33, color = "#4F4F4F" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 6.1875H30V12.375H2V6.1875ZM2 14.4375H30V20.625H2V14.4375ZM2 22.6875H30V28.875H2V22.6875Z"
            fill={color} />
    </svg>
)

export const IconProfile = ({ width = 26, height = 25, color = "#4F4F4F" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.641 15.0293C22.2855 12.8047 23.1009 9.95431 25.4615 8.6584L22.9225 4.49144C22.1975 4.8946 21.3538 5.12563 20.4537 5.12563C17.7402 5.12563 15.5411 3.028 15.5411 0.440002H10.4638C10.4702 1.23866 10.2603 2.0488 9.80904 2.78855C8.45353 5.01317 5.44057 5.76976 3.07671 4.47997L0.538467 8.64692C1.2691 9.0409 1.90205 9.61694 2.35173 10.3559C3.70481 12.5767 2.89426 15.4225 0.542504 16.72L3.08156 20.8869C3.80412 20.4876 4.64374 20.2596 5.53907 20.2596C8.24362 20.2596 10.4371 22.3442 10.4509 24.92H15.5282C15.5257 24.129 15.7373 23.3288 16.1829 22.5959C17.536 20.3751 20.5417 19.617 22.9039 20.8984L25.443 16.7314C24.7172 16.3375 24.0883 15.7637 23.641 15.0293ZM12.9996 17.6372C10.111 17.6372 7.76891 15.4179 7.76891 12.6808C7.76891 9.9436 10.111 7.72433 12.9996 7.72433C15.8882 7.72433 18.2303 9.9436 18.2303 12.6808C18.2303 15.4179 15.8882 17.6372 12.9996 17.6372Z"
            fill={color} />
    </svg>
)

export const IconArrowLeft = ({ width = 32, height = 32, color = "#A9077D" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32ZM16 3C23.18 3 29 8.82 29 16C29 23.18 23.18 29 16 29C8.82 29 3 23.18 3 16C3 8.82 8.82 3 16 3Z"
            fill={color} />
        <path d="M20.914 9.91399L18.085 7.08499L9.17099 15.999L18.085 24.913L20.913 22.085L14.827 15.999L20.914 9.91399Z"
            fill={color} />
    </svg>
)

export const IconArrowRight = ({ width = 32, height = 32, color = "#A9077D" }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM16 29C8.82 29 3 23.18 3 16C3 8.82 8.82 3 16 3C23.18 3 29 8.82 29 16C29 23.18 23.18 29 16 29Z"
            fill={color} />
        <path d="M11.086 22.086L13.915 24.915L22.829 16.001L13.915 7.08701L11.087 9.91501L17.173 16.001L11.086 22.086Z"
            fill={color} />
    </svg>

)

export const IconList = ({ width = 32, height = 32, color = "#F2C94C" }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 0H8V8H0V0ZM12 2H32V6H12V2ZM0 12H8V20H0V12ZM12 14H32V18H12V14ZM0 24H8V32H0V24ZM12 26H32V30H12V26Z"
            fill={color} />
    </svg>
)
