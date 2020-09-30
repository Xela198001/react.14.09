import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';

const Profile = () => {
  const history = useHistory();

  return (
    <Layout>
      <h1>Profile</h1>
      <button type="button" onClick={() => history.goBack()}>
        go back
      </button>
    </Layout>
  );
};

export default Profile;
