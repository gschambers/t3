import React from 'react'

interface Props {
  color?: string
}

export const O: React.FC<Props> = ({ color = 'currentColor' }) => (
  <svg viewBox="0 0 468.065 468.065">
    <defs>
      <path
        id="o-path"
        d="M468.065,234.032c0,129.256-104.776,234.032-234.032,234.032C104.776,468.065,0,363.288,0,234.032
                C0,104.776,104.776,0,234.033,0C363.289,0,468.065,104.776,468.065,234.032z"
      />
      <clipPath id="o-path-clip">
        <use xlinkHref="#o-path" />
      </clipPath>
    </defs>

    <g>
      <use
        xlinkHref="#o-path"
        fill="none"
        stroke={color}
        strokeWidth={140}
        clipPath="url(#o-path-clip)"
      />
    </g>
  </svg>
)
