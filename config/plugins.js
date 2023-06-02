module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: "iL6tKEwk3MPHLf_nfD1uNa2TY5DvDKZtrTI1zP2ehmk",
            sites: [
                {
                    name: 'Site 1',
                    id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                    buildHook: "https://api.netlify.com/build_hooks/64793a868c2f8134237c6e94",
                    branch: 'main' // optional
                }
            ]
        },
    },
});