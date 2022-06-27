import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxl from '../Auxl/Auxl';

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends Component {
    state = {
      error: null,
      reqInterceptor: 0,
      resInterceptor: 0,
    };
    componentWillMount() {
      this.state.reqInterceptor = axios.interceptors.request.use((req: any) => {
        this.setState({ error: null });
        return req;
      });
      this.state.resInterceptor = axios.interceptors.response.use(
        (res: any) => res,
        (error: any) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.state.reqInterceptor);
      axios.interceptors.response.eject(this.state.resInterceptor);
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
            {this.state.error ? this.state.error['message'] : null!}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxl>
      );
    }
  };
};

export default withErrorHandler;
