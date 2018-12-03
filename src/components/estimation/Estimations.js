import { Component } from 'react';
import OuterForm from './OuterForm';
import Results from './Results';

import styles from './Estimations.scss';

export default class Estimations extends Component {
    render() {
        return (
            <div>
                <style jsx>{styles}</style>
                <OuterForm />
                <div className='splitter'/>
                <Results />
            </div>
        );
    }
}
