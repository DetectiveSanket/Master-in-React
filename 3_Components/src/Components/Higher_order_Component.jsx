const withHello = (WrappedComponent) => {
    const NewComponent = (props) => {
        return (
            <div>
                <h1>Higher-Order Component</h1>
                <WrappedComponent {...props} />
            </div>
        );
    };
    return NewComponent;
};
export default withHello;
