import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import CustomSnackbar from '../../components/atoms/Snackbar'
import ButtonBar from '../../components/compounds/ButtonBar'
import BarsList from '../../components/compounds/BarsList'
import useMessageList from './useMessageList'
import { priority } from '../../misc/common'
import theme from '../../theme/theme'

const MessageList = () => {
  const {
    messages,
    messageStart,
    snackBarConfig,
    classes,
    handleStartStop,
    handleClearMessages,
    handleDeleteBar,
    setInitialNotificationState
  } = useMessageList()

  return (
    <>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <ButtonBar
          onClickStartStop={ handleStartStop }
          onClickClear={ handleClearMessages }
          messageStart={ messageStart }
        />
        <div className={ classes.gridContainerDiv }>
          <Grid container className={ classes.listContainer } >
            <Grid item xs={ 4 } align = "center">
              <BarsList
                collection={ messages.filter( item => item.priority === 1) }
                priority= { priority.ERROR }
                priorityString="Error"
                deleteBar={ handleDeleteBar }              
              />
            </Grid>
            <Grid item xs={ 4 } align = "center">
              <BarsList
                collection={ messages.filter( item => item.priority === 2) }
                priority= { priority.WARNING }
                priorityString="Warning"
                deleteBar={ handleDeleteBar }
              />
            </Grid>
            <Grid item xs={ 4 } align = "center">
              <BarsList
                collection={ messages.filter( item => item.priority === 3) }
                priority= { priority.INFO }
                priorityString="Info"
                deleteBar={ handleDeleteBar }
              />
            </Grid>
          </Grid>
        </div>
        { snackBarConfig.open &&
          (<CustomSnackbar
            message={ snackBarConfig.message }
            severity={ snackBarConfig.severity }
            open={ snackBarConfig.open }
            handleClose={ setInitialNotificationState }
          />
          )
        }
      </ThemeProvider>
    </>
  )
}

export default MessageList
