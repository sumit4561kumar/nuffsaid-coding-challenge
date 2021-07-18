import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  barListHeader: {
    textAlign: 'left',
    paddingLeft: '2%',
    marginBottom: 0,
    [theme.breakpoints.down('sm')] : {
      fontSize: 15
    }
  },
  countStyle: {
    textAlign: 'left',
    paddingLeft: '2%',
    marginBottom: '2%',
    [theme.breakpoints.down('sm')] : {
      fontSize: 15
    }
  }
}))
