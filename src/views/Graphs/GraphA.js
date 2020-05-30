import React, { useState } from 'react';
import clsx from 'clsx';
import Chart from "react-apexcharts";

import PerfectScrollbar from 'react-perfect-scrollbar';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,

} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    // minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));



const GraphA = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [options, setOptions] = useState({
    theme: {
      mode: 'dark',
      // palette: 'palette2'
    },
    chart: {
      type: 'bar',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        autoSelected: 'zoom' ,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true ,
          customIcons: []
        },
      }
      // height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  });

const   [series,setSeries] = useState([
    {
      name: "series-1",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            New entry
          </Button>
        }
        title="Latest Orders"
      />
      <Divider />
      <CardContent className={classes.content}>
        {/* <PerfectScrollbar>
          <div className={classes.inner}> */}
          <Chart
              height="200px"
              options={options}
              series={series}
              type="bar"
          
            />
          {/* </div>
        </PerfectScrollbar> */}
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};


export default GraphA;
