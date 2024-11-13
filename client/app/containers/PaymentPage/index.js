/**
 *
 * YourNewPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import PaymentForm from '../../components/Store/PaymentForm';

// Import your components here
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class YourNewPage extends React.PureComponent {
  componentDidMount() {
    // Initial data fetching
  }

  componentDidUpdate(prevProps) {
    // Handle prop changes
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className='your-new-page'>
        {isLoading ? (
          <LoadingIndicator backdrop />
        ) : (
          // Your main content here
          <div>
            <PaymentForm />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // Your state mappings here
  };
};

export default connect(mapStateToProps, actions)(YourNewPage);