import React from 'react';
import ControlledInput from "../components/ControlledInput";
import ImageTest from "../components/ImageTest";
import Counter from "../components/Counter";
import TodosList from "../components/TodosList";

class MainPage extends React.Component {
    
    render(){
        return (
        <div>
            This is the main page
            <ControlledInput/>
            <Counter/>
            <ImageTest src="images/minion.jpg"/>
            <TodosList/>
        </div>
    )}
}

export default MainPage;