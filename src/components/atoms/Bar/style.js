import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    height: '75px',
    width: '97%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '5px',
    marginBottom: '8px'
  },
  barTypography: {
    padding: '3%',
    fontSize: 18,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [ theme.breakpoints.down('sm') ]: {
      fontSize: 14,
      padding: '3%'
    }
  },
  barButton: {
    textTransform: 'none',
  },
  errorClass: {
    background: theme.palette.error.main
  },
  warningClass: {
    background: theme.palette.success.light
  },
  infoClass: {
    background: theme.palette.primary.main
  },
  clearButtonLabel: {
    fontSize: 17,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  clearButtonContainer: {
    position: 'relative'
  },
  rootClearButton: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  }
}))
