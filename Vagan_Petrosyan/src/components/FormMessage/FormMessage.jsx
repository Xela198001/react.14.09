import React, {Component} from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
        root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        },
    }
);

class FormMessage extends Component {
    state = {
        author: "",
        message: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {addMessage} = this.props;
        addMessage(this.state);
    };

    onChange = ({target}) => {
        const {value, name} = target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { author, message } = this.state
        return (
            <form className={classes.root} onSubmit={this.onSubmit}>
                <TextField placeholder='author' name='author' />
                <div>
                    <label>
                        <span>Author: </span>
                        <input type="text" name="author" onChange={this.onChange} value={author} />
                    </label>
                </div>
                <div>
                    <span>Text: </span>
                    <input type="text" name="message" onChange={this.onChange} value={message} />
                </div>
                <button type="submit">Add</button>
            </form>

        );
    }
}

FormMessage.prototypes = {
    addMessage: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(FormMessage);
