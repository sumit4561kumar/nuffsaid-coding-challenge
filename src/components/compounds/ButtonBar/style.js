import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
    [theme.breakpoints.down('xs')] : {
      marginTop: '15%'
    }
  },
  secondButton: {
    marginLeft: '10px'
  },
  labelRoot: {
    color: 'black',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 600
  }
}))
