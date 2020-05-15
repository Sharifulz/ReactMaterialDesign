import React, {Component} from 'react'

class Counter extends Component{
    state = {
        count:0,
        tag:["tag11", "tag22", "tag33"],
    }
/*
    constructor(){
        super();
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
*/
    handleIncrementClick = ()=>{
        this.setState({count: this.state.count+1});
    }

    handleDecrementClick = ()=>{
        this.setState({count: this.state.count-1});
    }

    render(){
        let classes = this.getBadgeClasses();
        return(
            <React.Fragment>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={this.handleIncrementClick} className="btn btn-primary btn-sm m-2">Increment</button>
                <button onClick={this.handleDecrementClick} className="btn btn-danger btn-sm m-2">Decrement</button>
                {this.renderList()}
            </React.Fragment>
        );
     }

    renderList() {
        if (this.state.tag.length===0) return <span className="text-danger">No tags found!</span>
        return <ul>{this.state.tag.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count <= 0 ? "danger" : "primary";
        return classes;
    }

     formatCount(){
         const {count} = this.state;
            return count<=0?'Zero':count
     }
}

export default Counter;