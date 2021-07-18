import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  listContainer: {
    margin: 'auto'
  },
  gridContainerDiv: {
    width: '80%',
    margin: 'auto',
    [ theme.breakpoints.down('md') ]: {
      width: '95%'
    }
  }
}))
