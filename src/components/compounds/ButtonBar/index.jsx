import React, { memo } from 'react'
import Button from '@material-ui/core/Button'

import useStyles from './style'

const ButtonBar = ({
  onClickStartStop,
  onClickClear,
  messageStart
}) => {
  const classes = useStyles()
  return (
    <div className={ classes.container }>
      <Button
        variant="contained"
        color="primary"
        classes={{ label: classes.labelRoot }}
        onClick={ onClickStartStop }
      >
        {messageStart ? 'STOP' : 'START'}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={ classes.secondButton }
        classes={{ label: classes.labelRoot }}
        onClick={ onClickClear }
      >
        CLEAR
      </Button>
    </div>
  )
}

export default memo(ButtonBar)
