import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxl from '../Auxl/Auxl';

// interface WithErrorHandlerProps {
//   message: string;
//   error: null;
// }

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      axios.interceptors.request.use((req: string) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res: string) => res,
        (error: null) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Auxl>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxl>
      );
    }
  };
};

export default withErrorHandler;
