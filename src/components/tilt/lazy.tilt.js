import {Suspense, lazy, useState} from 'react'

import styles from  './tilt.css'

const Tilt = lazy(() => import('./tilt'))

const useToggle = (init = false) => {
  const [on, setOn] = useState(init)
  const toggle = () => setOn(!on)
  return [on, toggle]
}

const LazyTilt = () => {
  const [showTilt, toggleTilt] = useToggle();

  return (
    <div>
      <lable>
        show title
        <input  type="checkbox" name="myCheckbox" checked={showTilt} onChange={toggleTilt} />
      </lable>

      <div style={{height: 200, width: 300}} className={styles.totallyCentered}>
        {showTilt ? (
          <Suspense fallback={<div>loading...</div>}>
            <Tilt>
              <div className={styles.totallyCentered}>vanilla-tilt.js</div>
            </Tilt>
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default LazyTilt;
