import React from "react";

const About = () => {
    // console.log(props);
    const history = useHistory();

    return (
        <Layout>
            <h1>About Page</h1>
            <button type='button' onClick={()=> history.goBack()}>

            </button>
        </Layout>
        );

};

export default About;