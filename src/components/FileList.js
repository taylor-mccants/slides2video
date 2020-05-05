import React, { Component } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ListItemText from "@material-ui/core/ListItemText";

class FileList extends Component {

    render() {
        return (
                <List dense={true}>
                    {this.props.files.map((file, i) => (
                        <ListItem>
                            <ListItemIcon>
                                <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={file}
                            />
                        </ListItem>
                    ))}
                </List>
        );
    };
}

export default FileList;