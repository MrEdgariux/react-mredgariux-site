import  { Component } from 'react';
import { toast } from 'react-toastify';

class ErrorBoundary extends Component {
    componentDidCatch(error, errorInfo) {
        console.error('Caught an error:', error, errorInfo);
        toast.error('An error occurred. Please try again.');
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;