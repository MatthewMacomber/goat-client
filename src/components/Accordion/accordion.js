import React from 'react';


export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        console.log("Accordion -> constructor -> props", props)
        this.state = {
            selectedId : null,
            goals : this.props.goals
        }
    }
    

    
    

    selectedId = null;

    populate = (goals) => {
        let html = [];
        for(let goal of goals){
           if(goal.id === this.state.selectedId){
            html.push(
                <li key = {goal.id}>
                    <button onClick={() => {
                        this.setState({selectedId : goal.id})
                        console.log(this.state)
                    }}>{goal.title}</button>
                    <p>{goal.description}</p>
                    <p>{goal.points}</p>
                    <p>{goal.end_date}</p>
                    <p>{goal.complete}</p>
                </li>
            )
           } else {
            html.push(
                <li key = {goal.id}>
                    <button onClick={() => {
                        this.setState({selectedId : goal.id})
                        console.log(this.state)
                    }}>{goal.title}</button>
                </li>
            )
           }
        }
        return html;
    }

    render = () => {
        console.log("Accordion -> goals", this.state.goals)
        return(
            <ul>
                {this.populate(this.state.goals)}
            </ul>
        )
    }
}

