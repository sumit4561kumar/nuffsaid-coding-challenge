import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './style'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomSnackbar = ({
  message,
  severity,
  open,
  handleClose,
  snackbarDirection = { vertical: 'top', horizontal: 'center' }
}) => {
  const localClasses = useStyles()
  return (
    <>
      <Snackbar
        open={ open }
        autoHideDuration={ 2000 }
        onClose={ handleClose }
        anchorOrigin={ snackbarDirection }
        key={ `${ message }-${ severity }` }
        className={ localClasses.message }
      >
        <Alert onClose={handleClose} severity={ severity }>
        { message }
        </Alert>
      </Snackbar>
    </>
  )
}

export default React.memo(CustomSnackbar)
