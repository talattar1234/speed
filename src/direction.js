import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName, jssPreset} from '@material-ui/core/styles'
import {create} from 'jss';
import rtl from 'jss-rtl';


const jssRtl = create({plugins: [...jssPreset().plugins, rtl()]});
const jss = create({plugins: [...jssPreset().plugins]});
const generateClassName = createGenerateClassName();

export const RTL = function(props) {
    return (
      <JssProvider jss={jssRtl} generateClassName={generateClassName}>
        <div dir="rtl">
            {props.children}
        </div>
      </JssProvider>
    );
}


export const LTR = function(props) {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div dir="ltr"> 
            {props.children}
        </div>
      </JssProvider>
    );
}
