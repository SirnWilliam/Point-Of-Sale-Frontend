import React, { Component } from "react";
import "../CSS-Files/Main.css";
import SaveIcon from '@material-ui/icons/Save';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state={showMain: "showMain", height:1};
    }
    trigger=() =>{
        this.setState(
            {
                showMain:"hide",
            });
            console.log(this.props.show)
    }
    componentWillReceiveProps(props) 
    {
        if(this.props.show){
            this.setState({
                height:1,
                showMain:"showMain",
            });
        }
    }
    shrinkDiv=() => {
        console.log(this.state.height)
        if(this.state.height>=2){
            this.setState({
                height:1,
                showMain:"showMain"+this.state.height,
            });
        }
        else if (this.state.height===1){
            this.setState({
                showMain:"showMain",
            });
        }
        
    }
    expandDiv=() => {
        console.log(this.state.showMain)
        if(this.state.height<=2)
        this.setState({
            height:this.state.height+1,
            showMain:"showMain"+this.state.height,
        });
        
    }
    render() {
    return(
        <div className={this.state.showMain}>
            <ul className="mainHeaderTAB">
                <li><label className="mainTabName">Main item</label></li>
                <li className="mainShiftHeader"><IconButton size="small" onClick={this.expandDiv}><VerticalAlignBottomIcon fontSize="inherit"></VerticalAlignBottomIcon></IconButton></li>
                <li><IconButton size="small" onClick={this.shrinkDiv}><VerticalAlignTopIcon fontSize="inherit"></VerticalAlignTopIcon></IconButton></li>
                <li><IconButton size="small"><SaveIcon fontSize="inherit"></SaveIcon></IconButton></li>
                <li><IconButton size="small"><DeleteForeverIcon fontSize="inherit"></DeleteForeverIcon></IconButton></li>
                <li><IconButton size="small"><PlayArrowIcon fontSize="inherit"></PlayArrowIcon></IconButton></li>
                <li><IconButton size="small" onClick={this.trigger}><CloseIcon fontSize="inherit"></CloseIcon></IconButton></li>
            </ul>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="brand"><label>Brand</label></th>
                            <th className="descriptor"><label>Descriptor</label></th>
                            <th className="size"><label>Size</label></th>
                        </tr>
                        <tr>
                            <td><input type="text" className="inputBrand"></input></td>
                            <td><input type="text" className="inputDescriptor"></input></td>
                            <td><input type="text" className="inputSize"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="category"><label>Category</label></th>
                            <th className="family"><label>Family</label></th>
                            <th className="report"><label>Report</label></th>
                            <th className="nacs"><label>NACS</label></th>
                            <th className="account"><label>Account</label></th>
                            <th className="section"><label>Section</label></th>
                        </tr>
                        <tr>
                            <td><input type="text" className="inputCategory"></input></td>
                            <td><input type="text" className="inputFamily"></input></td>
                            <td><input type="text" className="inputReport"></input></td>
                            <td><input type="text" className="inputNACS"></input></td>
                            <td><input type="text" className="inputAccount"></input></td>
                            <td><input type="text" className="inputSection"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    } 
}
export default Main;