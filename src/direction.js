import React from 'react';
import {StylesProvider, jssPreset} from '@material-ui/styles'
import {create} from 'jss';
import rtl from 'jss-rtl';


const jssRtl = create({plugins: [...jssPreset().plugins, rtl()]});
const jss = create({plugins: [...jssPreset().plugins]});


export const RTL = function(props) {
    return (
      <StylesProvider jss={jssRtl}>
        <div dir="rtl">
            {props.children}
        </div>
      </StylesProvider>
    );
}


export const LTR = function(props) {
    return (
      <StylesProvider jss={jss}>
        <div dir="ltr"> 
            {props.children}
        </div>
      </StylesProvider>
    );
}
