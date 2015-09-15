import React from 'react';
import { RouteHandler, Link } from 'react-router';
import MainStore from '../stores/mainStore';
import MainActions from '../actions/mainActions';
import cookie from 'react-cookie';

class NavChildren extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            appConfig: MainStore.appConfig
        }
    }

    render() {
        console.log(this.props.routerPath);
        if (this.props.routerPath === '/home') {
            return (
                <span>
                    <p><Link to="home"><i className="material-icons" style={styles.navIcon}>home</i>Dashboard</Link></p>
                    <p><Link to="home"><i className="material-icons" style={styles.navIcon}>add_circle</i>Add New Project</Link></p>
                    <p><Link to="home"><i className="material-icons" style={styles.navIcon}>settings</i>Settings</Link></p>
                    <p><Link to="home" onTouchTap={this.handleTouchTap}><i className="material-icons" style={styles.navIcon}>exit_to_app</i>Logout</Link></p>
                    <p><Link to="home"><i className="material-icons" style={styles.navIcon}>help</i>Help</Link></p>
                    <p><Link to="home">Governance</Link></p>
                    <p><Link to="home">Terms &amp; Conditions</Link></p>
                </span>
            );
        } else {
            return (<span>test</span>)
        }
    }

    handleTouchTap() {
        MainStore.handleLogout();
    }
}

var styles = {
    navIcon: {
        paddingRight: 5,
        verticalAlign: -6
    }
};


export default NavChildren;