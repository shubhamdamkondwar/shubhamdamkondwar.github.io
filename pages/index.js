import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
import SEO from '../components/SEO';

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};
