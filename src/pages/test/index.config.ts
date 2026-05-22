export default typeof definePageConfig === 'function'
  ? definePageConfig({
      navigationBarTitleText: '性格测试',
      navigationStyle: 'custom'
    })
  : {
      navigationBarTitleText: '性格测试',
      navigationStyle: 'custom'
    }
