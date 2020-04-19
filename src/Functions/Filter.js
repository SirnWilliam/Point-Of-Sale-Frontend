import React, { Component } from "react";
import "../CSS-Files/Filter.css";
import SaveIcon from '@material-ui/icons/Save';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {SERVER_URL} from '../URL/Constants.js';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state={showFilter: "showFilter"};
    }
    trigger=() =>{
        this.setState(
            {
                showFilter:"hide",
            });
            console.log(this.props.show)
    }
    componentWillReceiveProps(props) 
    {
        if(this.props.show){
            this.setState({
                showFilter:"showFilter",
            });
        }
    }
    filterSave(fields) {
        fetch(SERVER_URL + `api/filter/`,
        {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields)
        })
    }
    render() {
        var filterFields = {F1025:'hello', F1026:'=', F1027:'1234567891234'}
    return(
        <div className={this.state.showFilter}>
                <ul className="filterHeaderTAB">
                    <li><label className="filterTabName">Filter</label></li>
                    <li className="shiftHeader"><IconButton size="small"><SaveIcon fontSize="inherit"></SaveIcon></IconButton></li>
                    <li><IconButton size="small"><DeleteForeverIcon fontSize="inherit"></DeleteForeverIcon></IconButton></li>
                    <li><IconButton size="small" onClick={this.filterSave(filterFields)}><PlayArrowIcon fontSize="inherit"></PlayArrowIcon></IconButton></li>
                    <li><IconButton size="small" onClick={this.trigger}><CloseIcon fontSize="inherit"></CloseIcon></IconButton></li>
                </ul>
            <div className="filterAll">
                <label className="searchField">Search field</label>
                <label className="condition">Condition</label>
                <br></br>
                <div className="searchFieldList">
                    <select className="filterSelectList" id="F1025">
                        <option>Main code</option>
                        <option>Alternate code</option>
                        <option>Like code</option>
                        <option>Vendor code</option>
                        <option>Vendor id</option>
                        <option>Sub-department</option>
                        <option>Category</option>
                        <option>Family code</option>
                        <option>Report code</option>
                        <option>Classification</option>
                        <option>Mix and match</option>
                        <option>Bottle link</option>
                        <option>Tar link</option>
                        <option>Shelf location</option>
                        <option>Batch future</option>
                        <option>Batch old</option>
                        <option>Batch external</option>
                        <option>Batch archived</option>
                        <option>Desc. Pos</option>
                        <option>Desc. Brand</option>
                        <option>Desc. Expanded</option>
                        <option>Desc. Size</option>
                        <option>Not for sale</option>
                        <option>Client code</option>
                        <option>Client name</option>
                        <option>Client group</option>
                        <option>Client level</option>
                        <option>Client risk</option>
                    </select>
                </div>
                <div className="conditionList">
                    <select className="filterSelectList">
                        <option>&#61;</option>
                        <option>&#62;</option>
                        <option>&#60;</option>
                        <option>&#62;&#61;</option>
                        <option>&#60;&#61;</option>
                    </select>
                </div>
                <div className="filterInput">
                <input type="text" maxLength="40"></input>
                </div>
            </div>
        </div>
    );
    } 
}
export default Filter;