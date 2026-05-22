export default typeof definePageConfig === 'function'
  ? definePageConfig({
      navigationBarTitleText: '八字命盘',
      navigationStyle: 'custom'
    })
  : {
      navigationBarTitleText: '八字命盘',
      navigationStyle: 'custom'
    }
