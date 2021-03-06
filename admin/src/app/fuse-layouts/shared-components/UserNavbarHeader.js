import React from 'react';
import {AppBar, Avatar, Typography, withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';
import api, {BASE_URL} from 'app/ApiConfig';

const styles = theme => ({
    root  : {
        '& .user': {
            '& .username, & .email': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing  : theme.transitions.easing.easeInOut
                })
            }
        },
        background: '#6b5f2a',//'linear-gradient(219deg, #867631 0%, #d8c884 73%, #d8c884d1 110%)',
        height: 170
    },
    avatar: {
        width     : 72,
        height    : 72,
        position  : 'absolute',
        top       : 120,
        padding   : 8,
        background: theme.palette.background.default,
        boxSizing : 'content-box',
        left      : '50%',
        transform : 'translateX(-50%)',
        '& > img' : {
            borderRadius: '50%'
        }
    }
});

const UserNavbarHeader = ({user, classes}) => {
    return (
        <AppBar
            position="static"
            color="primary"
            elevation={0}
            classes={{root: classes.root}}
            className="user relative flex flex-col items-center justify-center pt-24 z-0"
        >
            <Typography className="username text-16 whitespace-no-wrap" color="inherit" style={{top: 110, position: 'absolute'}}>{user.userName}</Typography>
            <Avatar
                className={classNames(classes.avatar, "avatar")}
                alt="user photo"
                src={user.avatar && user.avatar !== '' ? `${BASE_URL}/uploads/${user.avatar}` : "assets/images/avatars/profile.jpg"}
            />
        </AppBar>
    );
};

function mapStateToProps({fuse, auth})
{
    return {
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(UserNavbarHeader));
