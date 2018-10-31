import React from 'react';
import ControlledInput from "../components/ControlledInput";
import ImageTest from "../components/ImageTest";
import Counter from "../components/Counter";


class MainPage extends React.Component{

    render(){
        return (
        <div>
            This is the main page
            <ControlledInput/>
            <Counter/>
            <ImageTest src="images/minion.jpg"/>
        </div>
    )}
}

export default MainPage;