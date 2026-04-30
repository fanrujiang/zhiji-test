export default typeof definePageConfig === 'function'
  ? definePageConfig({ navigationBarTitleText: '测试结果' })
  : { navigationBarTitleText: '测试结果' }
