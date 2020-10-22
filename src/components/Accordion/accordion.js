import React from 'react';

export default class Accordion extends React.Component {
    state = {
        selectedId : null
    }

    static defaultProps = {
        items: [],
    }

    populate = (items) => {
        let html = [];
        for(let item of items){
            const {id, title, description, points, end_date} = item;
            if(id === this.state.selectedId){
            html.push(
                <li key = {id}>
                    <button onClick={() => {this.setState({selectedId : null})}}>{title}</button>
                    <p>{description ? description : ''}</p>
                    <p>{points}</p>
                    <p>{end_date ? end_date : ''}</p>
                    <button onClick={() => this.props.onClick(item)}>{end_date ? 'Complete' : 'Redeem'}</button>
                </li>
            )
            } else {
            html.push(
                <li key = {id}>
                    <button onClick={() => {this.setState({selectedId : id})}}>{title}</button>
                </li>
            )
           }
        }
        return html;
    }

    render = () => {
        return(
            <ul>
                {this.populate(this.props.items)}
            </ul>
        )
    }
}

