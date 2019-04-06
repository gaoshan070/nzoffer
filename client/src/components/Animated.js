import React from 'react';
import posed, { Transition } from 'react-pose';

export const DownInChild = posed.div({
  hide: { y: '+40%', opacity: 0, transition: { duration: 1000 } },
  show: { y: '0%', opacity: 1, transition: { duration: 1000 } },
});

export class AnimationComponent extends React.Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    const { isMounted } = this.state;
    if (!isMounted) {
      this.setState({ isMounted: true });
    }
  }

  componentWillUnmount() {
    const { isMounted } = this.state;
    if (isMounted) {
      this.setState({ isMounted: false });
    }
  }

  render() {
    const poseToUse = this.state.isMounted ? 'show' : 'hide';

    return (
      <Transition style={this.props.style || {}} pose={poseToUse}>
          {this.props.children}
      </Transition>
    );
  }
}
