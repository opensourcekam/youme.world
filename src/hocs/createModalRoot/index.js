import { compose, lifecycle, mapProps } from 'recompose';

const createModalRoot = compose(
  lifecycle({
    componentWillMount: () => {
      this.modalRoot = document.body;
      this.rootEl = document.createElement('div');
    },
    componentDidMount: () => (
      this.modalRoot.appendChild(this.rootEl)
    ),
    componentWillUnmount: () => (
      this.modalRoot.removeChild(this.rootEl)
    ),
  }),
  mapProps(props => ({
    rootEl: this.rootEl,
    ...props,
  })),
);

export default createModalRoot;
