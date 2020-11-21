import React, { useState } from 'react';
import ClockTest from './upd';
import {
  ThemeProvider,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Editable, 
  EditableInput, 
  EditablePreview,
  Flex,
  Text,
  Button,
  Switch 
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
    
    var te = document.getElementById("btnAdd").innerText;
    let item = {
      Id:constlist.length+1,
      todo:te,
      finshed:false
    }
    setlist([...constlist,item]);
  }

  return (
    <ThemeProvider>
      {/* 标题栏 */}
      <Box>
        <Box w="100%" h="80px"  backgroundColor="#1A202C" >
          <Box w="60%" margin="auto" display="flex"  justifyContent="space-between" alignItems="center" >
            <Text fontSize="18px" color="#fff">ToDoList</Text>
            <Editable id="btnAdd" defaultValue="添加ToDo" w="60%" h="34px" fontSize="18px"  backgroundColor="#E2E8F0" outline="none" rounded="5px" >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Button variantColor="teal" variant="solid" onClick={addToDo}>
              添加
            </Button>
          </Box>
        </Box>

        {/* todo */}
        <Box>     
          {constlist.map(item => <p key={item.Id}>{item.Id}----{item.todo}</p>)}
        </Box>
      </Box>
  </ThemeProvider >
  )
}

export default HomePage