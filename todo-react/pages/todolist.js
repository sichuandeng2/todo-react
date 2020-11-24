import React, { useRef } from 'react'
import ExchangeRates from '../components/Client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import {
  Box,
  Text,
  Button,
  Input,
  useToast
} from 'viviui'

function HomePage () {
  const txtAdd = useRef(null) // 添加dom对象
  const toast = useToast() // 弹出层
  // 请求连接
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  })

  // 添加事务
  function AddToDo () {
    // 获取事务信息
    const te = txtAdd.current.value
    if (te === '' || te === '点击添加ToDo') {
      popAlert('添加')
    }
  }
  // 模态弹出层
  function popAlert (inner) {
    toast({
      title: '系统提示',
      description: inner + '内容不能为空！',
      status: 'error',
      position: 'top',
      duration: 1000,
      isClosable: true
    })
  }
  return (
    <>
      {/* 标题栏 */}
      <Box>
        <Box w='100%' h='80px' verticalAlign='80px' backgroundColor='#1A202C'>
          <Box w='60%' h='80px' verticalAlign='80px' margin='auto' display='flex' justifyContent='space-between' alignContent='center'>
            <Text fontSize={26} color='#fff'>ToDoList</Text>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Input ref={txtAdd} size='md' placeholder='点击添加ToDo' backgroundColor='#E2E8F0' outline='none' />
              <Button variantColor='teal' variant='solid' onClick={AddToDo}>添加事务</Button>
            </Box>
          </Box>
        </Box>

        {/* 事务信息 */}
        <Box>
          <ApolloProvider client={client}>
            <ExchangeRates />
          </ApolloProvider>
          <hr />
        </Box>
      </Box>
    </>
  )
}

export default HomePage
