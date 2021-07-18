import { useState, useCallback } from 'react'

import { initialState as snackbarInitial } from '../../components/atoms/Snackbar/common'

const useNotification = () => {
  const [ snackBarConfig, setSnackBarConfig ] = useState(snackbarInitial)

  const setNotificationState = useCallback((message, severityLevel) => {
    setSnackBarConfig({ open: true, message, severity: severityLevel })
  }, [])

  const setInitialNotificationState = () => setSnackBarConfig(snackbarInitial)

  return { snackBarConfig, setNotificationState, setInitialNotificationState }
}

export default useNotification
