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



const GraphB = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [series,setSeries] = useState(
    [{
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ]
  )


  

  const [options, setOptions] = useState({
    theme: {
      mode: 'dark',
      // palette: 'palette2'
    },
   chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
              },
              title: {
                // text: 'Page Statistics',
                align: 'left'
              },
              legend: {
                tooltipHoverFormatter: function(val, opts) {
                  return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
              },
              markers: {
                size: 0,
                hover: {
                  sizeOffset: 6
                }
              },
              xaxis: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                  '10 Jan', '11 Jan', '12 Jan'
                ],
              },
              tooltip: {
                y: [
                  {
                    title: {
                      formatter: function (val) {
                        return val + " (mins)"
                      }
                    }
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val + " per session"
                      }
                    }
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val;
                      }
                    }
                  }
                ]
              },
              grid: {
                borderColor: '#f1f1f1',
              }
            
          

  
  });



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
              type="line"
          
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


export default GraphB;
