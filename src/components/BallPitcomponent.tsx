import Ballpit from "../react-bits/Ballpit"

function BallPitcomponent() {
  return (
<div style={{position: 'relative', overflow: 'hidden',height :"100vh", width: '100vw' , backgroundColor:"white"}}>
<Ballpit
    count={200}
    gravity={0.3}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
      
    </div>
  )
}

export default BallPitcomponent
