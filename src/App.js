import React, {Component} from 'react';
import MyAlert from './MyAlert';
import {Stack, Typography} from '@mui/material';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warning: false,
            info   : false,
        }
    }

    componentDidMount() {
        var info = true;
        this.setState({warning: info})
    }

    render() {
        const {info} = this.state;

        return (
            <>
                <Stack sx={{width: '600px', padding: '20px'}} spacing={2}>
                    <Typography variant={'h4'}>Alerts</Typography>
                    {
                        this.state.warning ? <MyAlert
                            type={'warning'}
                            title={'Warning'}
                            content={'This is a warning message'}
                        /> :null
                    }
                    {
                        info ? <MyAlert
                            type={'info'}
                            title={'Information'}
                            content={'This is a information message'}
                        /> :null
                    }
                </Stack>
            </>
        );
    }
};

export default App;
