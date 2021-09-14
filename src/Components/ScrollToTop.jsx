import { Component } from 'react';
import { withRouter } from 'react-router';
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            // const app = document.querySelector('.cosmetic');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    render() {
        return this.props.children;
    }
}
export default withRouter(ScrollToTop);
