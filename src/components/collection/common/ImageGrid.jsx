import React from 'react'
import ContentLoader from 'react-content-loader'

const NetflixLoader = props => {
  // Get values from props
  // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

  // Hardcoded values
  const rows = 5
  const columns = 4
  const coverHeight = 250
  const coverWidth = 200
  const padding = 20
  const speed = 1

  const coverHeightWithPadding = coverHeight + padding
  const coverWidthWithPadding = coverWidth + padding
  const initial = 10
  const covers = Array(columns * rows).fill(1)

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      primaryColor="#242b34"
      secondaryColor="#343d4c"
      {...props}
    >
  
      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="0"
            ry="0"
            width={coverWidth}
            height={coverHeight}
          />
        )
      })}
    </ContentLoader>
  )
}

NetflixLoader.metadata = {
  name: 'Pratik Pathak',
  github: 'PathakPratik',
  description: 'Netflix Style Dynamic',
  filename: 'Netflix',
}

export default NetflixLoader