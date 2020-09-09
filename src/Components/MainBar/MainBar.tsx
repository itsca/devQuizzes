import React from 'react';
import { Grid, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  root: {
    flexGrow: 1,
  },
  icon: {

  }
});

function GithubIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
    </SvgIcon>
  );
}

const MainBar: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" color="inherit">
            DevQuizzes
          </Typography>
          <IconButton size="small">
            <a href="https://github.com/itsca/cashflowmeter">
              <GithubIcon color="disabled" className={classes.icon} />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default MainBar;
