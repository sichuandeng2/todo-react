import React, { useState } from 'react';
import {
  ThemeProvider,
  Box,
  Editable, 
  EditableInput, 
  EditablePreview,
  Text,
  Button,
  Switch,
  FormLabel,
  Flex 
} from "@chakra-ui/core";

function HomePage() {

   // 事务集合
   const [constlist,setlist] = useState(
      [{
        Id:1,
        todo:"事务1",
        finshed:false
      },
      {
        Id:2,
        todo:"事务",
        finshed:true
      }]
    );
    
    


  // 添加事务
  function addToDo(){

    // 获取点击按钮
    var te = document.getElementById("txtToDo").innerText;
    if (te ===''|| te ==='点击添加ToDo') {
      alert("请输入添加内容");
      return
    }
    let item = {
      Id:constlist.length+1,
      todo:te,
      finshed:false
    }
    setlist([...constlist,item]);
     document.getElementById("txtToDo").placeholder="点击添加ToDo";
  }

  function chgFinshed(e){
    // var isFinshed = document.getElementById("finshed");
    
    // e.preventDefault();
    // var checkFinshed =e.id
    // console.log(checkFinshed);

  }

  return (
    <ThemeProvider>

      {/* 标题栏 */}
      <Box>
        <Box w="100%" h="80px" verticalAlign="80px" backgroundColor="#1A202C"  >
          <Box w="60%" h="80px" verticalAlign="80px" margin="auto" display="flex"  justifyContent="space-between" alignContent="center" border="1px solid red">
            <Text fontSize={26} color="#fff">ToDoList</Text>

            <Box  display="flex" justifyContent="space-between" alignItems="center" >
              <Editable id="txtToDo" placeholder="点击添加ToDo"  w={380} fontSize={26} backgroundColor="#E2E8F0" outline="none"  >
                <EditablePreview  />
                <EditableInput />
              </Editable>
              <Button variantColor="teal" variant="solid" onClick={addToDo}>添加事务</Button>
              <Text>删除</Text>
            </Box>
            
          </Box>
        </Box>

        {/* todo */}
        <Box>    
          {constlist.map(item => {
               return (
                <Flex justify="Left" align="center" margin="auto" w={800} key={item.Id}>
                    <FormLabel htmlFor="email-alerts">
                      <p  > {item.Id}----{item.todo}----</p>
                    </FormLabel>
                    <Switch id={"sw"+item.Id} color="red" onChange={chgFinshed} onchange={item.Id} />
                </Flex>
               )
          })}
        </Box>
      </Box>
  </ThemeProvider >
  )
}

export default HomePage