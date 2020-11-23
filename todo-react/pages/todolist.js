import React, { useState, useRef, useEffect, createContext } from 'react'
// import { MdAccountBox } from 'react-icons/md'

import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  useToast,
  Switch,
  
} from 'viviui'

function HomePage () {
  // 模拟数据源
  const data = [{
    todo: '事务1',
    finshed: false
  },
  {
    todo: '事务2',
    finshed: true
  },
  {
    todo: '事务2',
    finshed: false
  }]

  const [conList, setlist] = useState(data) // 数据源
  const txtAdd = useRef(null) // 添加dom对象
  const forEach = useRef(null) // 添加dom对象
  const toast = useToast()
 

  // 添加事务
  function AddToDo () {
    // 获取事务信息
    const te = txtAdd.current.value
    if (te === '' || te === '点击添加ToDo') {
      popAlert('添加')
      return
    }

    // 构建数据模型
    const item = {
      todo: te,
      finshed: false
    }
    const temp = conList
    temp.push(item)
    setlist([...temp])
    txtAdd.current.value = ''
  }

  // 删除事务
  function DeleteToDo (e, params) {
    const IsDelete = confirm('您确定要删除' + conList[params].todo)
    if (IsDelete) {
      const temp = conList
      temp.splice(params, 1)
      setlist([...temp])
      console.log(setlist)
    }
    console.log(conList)
  }

  // 编辑事务
  function EditToDo (e, id) {
    const inputEl = document.getElementById('input' + id)
    const value = inputEl.value
    if (value === '') {
      popAlert('编辑')
      return false
    }

    const tempe = conList
    tempe[id].todo = value
    setlist([...tempe])
    inputEl.value = ''
  }

  // 改变事务状态
  function ChangesFinshed (e, index) {
    const el = document.getElementById('switch' + index).checked
    const temp = conList
    temp[index].finshed = el
    setlist([...temp])
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
          {conList.map((item, index) => {
            return (
              <Box key={index} display='flex' justifyContent='space-between' margin='auto' w={1200}>
                <Flex ref={forEach} id={'flex' + index}>
                  <Input id={'input' + index} w={180} />
                  <Box  w={600}>
                    <Box style={{background:(item.finshed) ?'#ddd':'#999'} }>{index}----{item.todo}----{item.finshed ? '已完成' : '未完成'}</Box>
                  </Box>
                </Flex>
                <Box justifyContent='space-between'>
                  <Switch id={'switch' + index} size='md' onChange={ChangesFinshed.bind('', '', index)} isChecked={item.finshed} />
                  <Button id={'btn' + index} onClick={EditToDo.bind(this, '', index)} display='inline'>点击修改</Button>
                  <Button onClick={DeleteToDo.bind(this, '', index)} display='inline'>点击删除</Button>
                </Box>
              </Box>
            )
          })}
          <hr />
        </Box>
      </Box>
    </>
  )
}

export default HomePage
