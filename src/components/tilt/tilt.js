const Tilt = (props) => (
  <div className="tilt-root">
    <div className="tilt-child">{props.children}</div>
  </div>
)

export const Usage = () => (
  <div className='totally-centered'>
    <Tilt>
      <div className="totally-centred">Hello tilt</div>
    </Tilt>
  </div>
)
