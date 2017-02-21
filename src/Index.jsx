import { Component } from 'react';
import Helmet from 'react-helmet';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.css';
import Landing from './components/Landing.jsx'

class Index extends Component {
  render() {
    return (
      <div className={s.app}>
        <Helmet
          title="Paris Ruby Workshop"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <div className={s.topbar}>
          Paris Ruby Workshop
        </div>
        <div className={s.content}>
          <Landing />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Index);
