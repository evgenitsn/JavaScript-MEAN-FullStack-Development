function startApp() {
  // Config
  const baseUrl = 'https://baas.kinvey.com/'
  const appId = 'kid_B1MkvH7zg'
  const appPass = 'dc07085834814f5988bbf31bc3b73316'
  const base64Auth = `${btoa(appId + ':' + appPass)}`

  bindMainMenuEvents();

}