module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook:
                "https://api.vercel.com/v1/integrations/deploy/prj_https://api.vercel.com/v1/integrations/deploy/prj_Op0vaQJ6DFkbS1niHlTRBVHJNlLV/ba70mL5N9R",
            apiToken: "epod0kGLFjhwPD1AaQFt5pJz",
            appFilter: "strapi",
            teamFilter: "WRriJjSimnv6pxLgCJJt4cO0",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});