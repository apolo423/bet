import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import * as service from 'app/services/utils'
//import clsx from 'clsx';
import {FuseAnimate,FusePageSimple, FusePageCarded, FuseChipSelect, FuseUtils, FuseLoading} from '@fuse';
import {withStyles,Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography} from '@material-ui/core';


const styles = theme => ({
    productImageFeaturedStar: {
        position: 'absolute',
        top     : 30,
        right   : 90,
        color   : '#FFA726',
        opacity : 0
    },
    badge:{
        position: 'absolute',
        top     : 0,
        left   : 0,
        border : "1px red",
        borderRadius:"1px",
        color   : 'white',
        backgroundColor: "#665C32",
        opacity : 0,
        padding:"5px"
    },
    productImageUpload      : {
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
    },
    taskItem        : {
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        border                  : '1px black',

        backgroundColor         :  '#e6e0c6',
        boxShadow               : '0px 0px 1px 1px #665C32',

      
        '&:hover'               : {
                      
            boxShadow                          : '0px 0px 3px 3px #665C32',
        },
        '&.featured'            : {
            pointerEvents                      : 'none',
            boxShadow                          : '#F0F0F0',
            '& $badge'      : {
                opacity: 1
            },
            '&:hover $badge': {
                opacity: 1
            }
        }
    }
});

class MyTask extends Component {

    componentDidMount(){
        this.props.getTask({
            user:this.props.user})
    }
    setTask = (task) =>{
        console.log(this.props.myTask)
        console.log(this.props.user)
        if(this.props.myTask == null)
        {
            this.props.setTask({
                userId  :   this.props.user.userId,
                task    :   task
            })
        }else
        {
            //You should stop here
            alert("You can't")
        }
    }
  
    render(){
        const {classes} = this.props;

        return(
            <FusePageSimple
            classes={{
                toolbar: "p-0",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <div  className="flex flex-col flex-1" style={{
                    backgroundColor: '#665c32',
                    color: '#ffffff',
                    border: '10px #332323'}}>
                    <Button
                           to={`/my/invite/${this.props.user.userId}`}
                           component={Link}
                           className="px-4"
                           variant="outlined"
                           
                       >
                          Go
                       </Button>
                       <Button
                           to={"/my/owntask"}
                           component={Link}
                           className="px-4"
                           variant="outlined"
                           
                       >
                          MyTask
                       </Button>
                       </div>
               
                
            }
            content={
                <div className="flex justify-center flex-wrap">
                    {
                    this.props.alltasks.map((task,index) => {
                        console.log(task)
                        var csstemp = " " +  (this.props.myTask?(task._id == this.props.myTask.taskTypeId?" featured ":""):"") + " relative w-200 h-286 rounded-4 m-16 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                        return(
                     <div
                        onClick={() => this.setTask(task)}
                        className={classes.taskItem + csstemp}
                        key={index}
                        style={{
                            
                        }}
                    >
                        <Icon className={classes.productImageFeaturedStar} >star</Icon>
                        <div className = {classes.badge} style={{
                            width:'200px'
                        }}>
                            <center>
                            Now
                            </center>
                        </div>
                        <div style={{
                            marginTop:'25px',
                        }}>
                            <center><h2>Task{task.taskType}</h2></center>
                        </div>
                        <div style={{
                            marginLeft:'15px',
                            marginBottom:'5px'
                        }}>
                            <div>
                            referralAmount
                            </div>
                            <div>
                            <em style={{color:'blue'}}> {task.referralAmount}</em>
                            </div>
                        </div>
                        <div style={{
                            marginLeft:'15px',
                            marginBottom:'5px'
                        }}>
                            <div>
                              taskBonus
                            </div>
                            <div>
                            <em style={{color:'blue'}}> {task.taskBonus}</em>
                            </div>
                        </div>
                        <div style={{
                            marginLeft:'15px',
                            marginBottom:'5px'
                        }}>
                            <div>
                                startTime
                            </div>
                            <div>
                            <em style={{color:'blue'}}> {service.convertDateforPicker(task.startTime)}</em>
                            </div>
                        </div>
                        <div style={{
                            marginLeft:'15px',
                            marginBottom:'5px'
                        }}>
                            <div>
                                endTime
                            </div>
                            <div>
                            <em style={{color:'blue'}}> {service.convertDateforPicker(task.endTime)}</em>
                            </div>
                        </div>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            color:'red'
                        }}>
                                {
                                (this.props.myTask?task._id == this.props.myTask.taskTypeId?(this.props.myTask.status == 0 ? "OnGoing":"completeTask"):"":"")
                                 }
                        </div>
                     
                    </div>
                        )
                    }
                    )}
                    
                </div>
            }
            />
        )
    }
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({      
       
        getTask         :       Actions.getTask,
        setTask         :       Actions.setNowTask         
    }, dispatch);
}

function mapStateToProps(props)
{
    console.log(props.myApp.task)
    return {
        user        :       props.auth.user,
       alltasks     :       props.myApp.task.tasks,
       myTask       :       props.myApp.task.myTask       
    }
}
export default withReducer('myApp',reducer)(withStyles(styles, {withTheme: true})(connect(mapStateToProps,mapDispatchToProps)(MyTask)))