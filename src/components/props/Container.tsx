//Style Props

type ContainerProps = {
    styles: React.CSSProperties
}

function Container({styles}: ContainerProps) {
  return (
    <div style={styles}>
      Text content goes here
    </div>
  )
}

export default Container;
