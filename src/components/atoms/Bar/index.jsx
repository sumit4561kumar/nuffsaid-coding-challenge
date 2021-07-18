import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import useStyles from './style'

const classMap = {
  1: 'errorClass',
  2: 'warningClass',
  3: 'infoClass'
}

const Bar = ({
  text = '',
  priority,
  id,
  deleteBar
}) => {
  const localClasses = useStyles()
  return (
    <Grid
      container
      className={ clsx(localClasses.root, localClasses[classMap[priority]]) }
      key={ `bar-${ id }`  }
    >
      <Grid item lg={ 10 } md={ 9 } sm={ 8 } xs={ 8 } >
        <Typography className={ localClasses.barTypography }>
          { text }
        </Typography>
      </Grid>
      <Grid item lg={ 2 } md={ 3 } sm={ 4 } xs={ 4 } className={ localClasses.clearButtonContainer } >
        <Button
          className={ localClasses.barButton }
          onClick={ () => deleteBar(id) }
          classes={{ label: localClasses.clearButtonLabel, root: localClasses.rootClearButton }}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  )
}

export default memo(Bar)
