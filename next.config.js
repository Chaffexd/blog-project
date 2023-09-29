const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'shane',
                mongodb_password: 'Nextjspassword123',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'my-site-dev'
            }
        }
    }

    // could use a diff set of variables here for a diff env
    return {
        env: {
            mongodb_username: 'shane',
            mongodb_password: 'Nextjspassword123',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
};