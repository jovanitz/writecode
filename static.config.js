export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: './src/containers/Home'
    },
  ],
  plugins: ["react-static-plugin-sass"]
}
