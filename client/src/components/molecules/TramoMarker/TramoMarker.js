import React, {Component} from 'react';
import Icon from '../../atoms/Icon/Icon';

class TramoMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconName: '',
            title: ''
        }

    }

    // should catch errors for accepted tripLeg values, but I don't have enough time

    componentDidMount() {
        this.getLegData()
    }

    getLegData = () => { 
        if (this.props.tripLeg == 'departure') {
            this.setState( 
                {
                    iconName: 'depart',
                    title: 'IDA'
                }
            )
        }
        else {
            this.setState( 
                {
                    iconName: 'return',
                    title: 'VUELTA'
                }
            )
        }    
    }
   
    render () {
        return(
            <div className='tramo-marker'>
                <div className='tramo-marker__title'>
                    <Icon size='sm' type={`plane-${this.state.iconName}`} color='gray'></Icon>
                    <h6 className='text--sm color--dark-gray'>{this.state.title}</h6>
                </div>
                <p className='tramo-marker__fecha text--xs color--gray'>{this.props.flightDate}</p>
            </div>
        )
    }
};

export default TramoMarker;