import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageTransition = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup 
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={0}
        transitionName={props.match.path ? 'SlideIn' : 'SlideOut' }
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageTransition;