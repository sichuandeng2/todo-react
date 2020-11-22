import React, { useState,useRef,useEffect } from 'react';
import {
  ThemeProvider,
  Box,
  Text,
  Button,
  Switch,
  Flex,
  Input,
  useToast
} from "@chakra-ui/core"


function HomePage() {

   // 模拟数据源
   let data =  [{
      Id:1,
      todo:"事务1",
      finshed:false
    },
    {
      Id:2,
      todo:"事务",
      finshed:true
    }]


  const [constlist,setlist] = useState(data);   //数据源
  const txtAdd = useRef(null);                  //添加dom对象
  const [ToDoText,SetToDoText] = useState(0);   //编辑状态


  const toast = useToast() 


  // 添加事务
  function AddToDo(){
    // 获取事务信息
    var te = txtAdd.current.value;
    if (te ===''|| te ==='点击添加ToDo') {
      alert("请输入添加内容");
      return;
    }
    // 构建数据模型
    let item = {
      Id:constlist.length+1,
      todo:te,
      finshed:false
    }
    setlist([...constlist,item]);
    txtAdd.current.value="";
  }

  // 删除事务
  function DeleteToDo(e,params){
    var temp = constlist;
    temp.splice(params,1);
    setlist([...temp]);
  }

  // 编辑事务
  function EditToDo(e,id){
    var value = ToDoText.target.value;
    console.log(value ,constlist.todo)
    if (value == constlist.todo){
      if (value =="") {
        alert("修改内容不能为空"); 
        return false}
      var l = constlist;
      l.forEach(e=>{
        if(e.Id == id)
        e.todo = value;
      })
      setlist([...l]);
      ToDoText.target.value="";
    }
  }


  return (
    <ThemeProvider>

      {/* 标题栏 */}
      <Box>
        <Box w="100%" h="80px" verticalAlign="80px" backgroundColor="#1A202C"  >
          <Box w="60%" h="80px" verticalAlign="80px" margin="auto" display="flex"  justifyContent="space-between" alignContent="center" border="1px solid red">
            <Text fontSize={26} color="#fff" >ToDoList</Text>
            <Box  display="flex" justifyContent="space-between" alignItems="center" >
              <Input ref={txtAdd} size="md" placeholder="点击添加ToDo" backgroundColor="#E2E8F0" outline="none"  ></Input>
              <Button variantColor="teal" variant="solid" onClick={AddToDo}>添加事务</Button>
              <Text>删除</Text>
            </Box>
          </Box>
        </Box>

        {/* 事务信息 */}
        <Box>    
          {constlist.map((item,index) => {
              return (
                <Flex justify="Left" align="center" margin="auto" w={800} key={item.Id}>
                  <Input w={180} onChange={inner=>SetToDoText(inner)}></Input>
                  <p>
                    {index}----{item.todo}----{item.finshed?"开":"关"}
                  </p>
                  <Button onClick={EditToDo.bind(this,"",item.Id)}>点击修改</Button>
                  <Button onClick={DeleteToDo.bind(this,"",index)}>点击删除</Button>
                </Flex>
              )
          })}
        </Box>

      </Box>
  </ThemeProvider >
  )
}

export default HomePage