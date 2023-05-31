module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('dyno2iviy'),
                api_key: env('838737156478146'),
                api_secret: env('gh0I9AviGiU8XwH_PDTgeU6sU1o'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    // ...
});
