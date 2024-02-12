import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Location from '../resources/location.png';

function handleWPM(evt) {
    console.log(evt);

    if (evt.data && evt.data['OmniScript-Messaging'] && evt.data['OmniScript-Messaging'].osSubmitted) {
        this.setState({ emailSent: true });
    }
}

class ContactPage extends React.Component {
    _handleWPM = handleWPM.bind(this);

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            phone: '',
            disabled: false,
            emailSent: null,
        };
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            disabled: true,
            emailSent: false,
        });
    };

    componentDidMount() {
        window.addEventListener('message', this._handleWPM, false);
    }
    componentWillUnmount() {
        window.removeEventListener('message', this._handleWPM);
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <div className="row">
                        <div className="col-md-7">
                            <p>Location: 415 Mission Street, San Francisco, California, 94105, United States</p>
                            <p>Phone Number: 844-856-2489</p>
                            <img src={Location} alt="" />
                        </div>
                        <dic className="col">
                            {this.state.emailSent !== true && (
                                <vlocityomniscript-offplatform-inline-example-english
                                    run-mode="localScriptDef"
                                    layout="newport"
                                    inline="true"
                                    inline-label="Request a Quote!"
                                    inline-variant="brand"
                                ></vlocityomniscript-offplatform-inline-example-english>
                            )}
                            {this.state.emailSent === true && (
                                <p className="success-msg">Thanks! One of our dedicated service rep will follow up shortly!</p>
                            )}
                        </dic>
                    </div>
                </Content>
                <br></br>

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="
                /slds/assets/styles/salesforce-lightning-design-system.css"
                />
                <link rel="stylesheet" type="text/css" href="/vlocityresources/slds/styles/OmniLwcUtilsCss.css" />
                <link rel="stylesheet" type="text/css" href="/newport/assets/styles/vlocity-newport-design-system.min.css" />
            </div>
        );
    }
}

export default ContactPage;
