import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'
import Bar from '../../atoms/Bar'
import useStyles from './style'

const BarsList = ({
  priority = 1,
  collection = [],
  priorityString = 'Error',
  deleteBar
}) => {
  const classes = useStyles()
  return (
    <>
      <h2 className={ classes.barListHeader }>{ `${ priorityString } Type ${ priority }` }</h2>
      <Typography className={ classes.countStyle }>
        { `Count: ${ collection.length }` }
      </Typography>
      {
        ( collection && collection.length > 0 ) && (
          collection.map( ( item ) => (
              <Bar
                priority={ priority }
                text={ item.message }
                key={ `listbar-${ item.id }` }
                id={ item.id }
                deleteBar={ deleteBar }
              />
            )
          )
        )
      }      
    </>
  )
}

export default memo(BarsList)
