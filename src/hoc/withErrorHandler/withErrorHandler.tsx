import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxl from '../Auxl/Auxl';

interface WithErrorHandlerProps {
  //   message: string;
  //   error: null;
  //   reqInterceptor: any;
  //   resInterceptor: any;
}

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req: string) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res: string) => res,
        (error: null) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
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
