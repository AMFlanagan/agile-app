import { Component } from 'react';
import OuterForm from './OuterForm';
import Results from './Results';

export default class Estimations extends Component {
    render() {
        return (
            <div>
                <OuterForm />
                <Results />
            </div>
        );
    }
}
