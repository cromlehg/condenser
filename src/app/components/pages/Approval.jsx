import React from 'react';
import { connect } from 'react-redux';
import { VIEW_MODE_WHISTLE, WHISTLE_SIGNUP_COMPLETE } from 'shared/constants';

class Approval extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm_email: false,
        };
    }

    componentWillMount() {
        if (this.props.location.query.confirm_email) {
            this.setState({ confirm_email: true });
        }
    }

    render() {
        if (process.env.BROWSER && this.props.viewMode === VIEW_MODE_WHISTLE) {
            window.postMessage(WHISTLE_SIGNUP_COMPLETE);
        }
        let body = (
                <div>
                    <h4>Thanks for confirming your email!</h4>
                    <p>
                        After validating your sign up request with us we'll look
                        it over for approval. As soon as your turn is up and
                        you're approved, you'll be sent a link to finalize your
                        account!
                    </p>
                    <p>
                        You'll be among the earliest members of the Dream
                        community!
                    </p>
                </div>
            );
        return (
            <div className="row">
                <div
                    className="column"
                    style={{ maxWidth: '36rem', margin: '0 auto' }}
                >
                    <div>{body}</div>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'approval',
    component: connect(
        state => {
            return {
                viewMode: state.app.get('viewMode'),
            };
        },
        dispatch => ({})
    )(Approval),
};
