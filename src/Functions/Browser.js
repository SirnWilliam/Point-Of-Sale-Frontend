import React, { Component } from "react";
import "../CSS-Files/Browser.css";
import SaveIcon from '@material-ui/icons/Save';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
class Browser extends Component {
    constructor(props) {
        super(props);
        this.state={showBrowser: "showBrowser"};
    }
    trigger=() =>{
        this.setState(
            {
                showBrowser:"hide",
            });
            console.log(this.props.show)
    }
    componentWillReceiveProps(props) 
    {
        if(this.props.show){
            this.setState({
                showBrowser:"showBrowser",
            });
        }
    }
    render() {
    return(
        <div className={this.state.showBrowser}>
                <ul className="browserHeaderTAB">
                    <li><label className="browserTabName">Browser</label></li>
                    <li className="browserShiftHeader"><IconButton size="small"><SaveIcon fontSize="inherit"></SaveIcon></IconButton></li>
                    <li><IconButton size="small" color="disabled"><DeleteForeverIcon fontSize="inherit"></DeleteForeverIcon></IconButton></li>
                    <li><IconButton size="small"><PlayArrowIcon fontSize="inherit"></PlayArrowIcon></IconButton></li>
                    <li><IconButton size="small" onClick={this.trigger}><CloseIcon fontSize="inherit"></CloseIcon></IconButton></li>
                </ul>
        </div>
    );
    } 
}
export default Browser;