import { QueryClient } from 'react-query'

export const useTestHook = (queryClient: QueryClient) => {
  const cancelTest = () => {
    void (async () => await queryClient.cancelQueries('todos'))()
    console.log('canceled todo data', queryClient.getQueryData('todos', { exact: false }))
  }

  const removeTest = () => {
    queryClient.removeQueries('todos')
    console.log('remove todo data', queryClient.getQueryData('todos', { exact: false }))
  }

  const resetTest = () => {
    queryClient.resetQueries('todos').then(_ => {
      console.log('reset todo data', queryClient.getQueryData('todos', { exact: false }))
    })
  }

  const invalidateTest = () => {
    queryClient.invalidateQueries('todos', { refetchActive: true }).then(_ => {
      console.log('invalidate todo data', queryClient.getQueryData('todos', { exact: false }))
    })
  }

  return { cancelTest, removeTest, resetTest, invalidateTest }
}
