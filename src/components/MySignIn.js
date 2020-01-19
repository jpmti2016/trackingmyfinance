import React from 'react';

import { Authenticator, AmplifyTheme } from 'aws-amplify-react';
// const federated = {
//     google_client_id: '389406440941-969d1fa65qgjoctdbhcgtcj87tfme7v2.apps.googleusercontent.com',
//     amazon_client_id: '55u9ahaevm56mpnchti12s438l'
// };

export default function MySignIn() {
    const theme = {
        ...AmplifyTheme,
        navBar: {
            ...AmplifyTheme.navBar,
            backgroundColor: "#BAA949",
        },
        oAuthSignInButton: {
            ...AmplifyTheme.oAuthSignInButton,
            padding: '0px'
        },
        button: {
            ...AmplifyTheme.button,
            backgroundColor: "var(--amazonOrange)"
        },
        sectionBody: {
            ...AmplifyTheme.sectionBody,
            padding: "5px"
        },
        sectionHeader: {
            ...AmplifyTheme.sectionHeader,
            backgroundColor: "var(--squidInk)"
        }

    }
    return (
        <Authenticator theme={theme} />
    )
}