import React, { useState } from 'react';

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
  Switch 
} from "@chakra-ui/core";
function HomePage() {
  var toDoList = [
    {
      Id:1,
      todo:"事務1",
      finished:true
    },
    {
      Id:2,
      todo:"事務2",
      finished:false
    }
  ]
  const [count, setCount] = useState(toDoList);



  
  return (
    <ThemeProvider >

      {/* 標題欄 */}
      <Box>
        <Box w="100%" h="60px"  backgroundColor="#1A202C" >
          <Box w="60%" margin="auto" display="flex"  justifyContent="space-between" alignItems="center" >
            <Text fontSize="18px" color="#fff">ToDoList</Text>
            <Editable defaultValue="添加ToDo" w="60%" h="24px" fontSize="18px"  backgroundColor="#E2E8F0" outline="none" rounded="5px" >
              <EditablePreview />
              <EditableInput />
            </Editable>
            {/* <button onClick={() =>setCount(count.push(1,"tet",true))}>
              Click me
            </button> */}
          </Box>
        </Box>

        {/* todo */}
        <Box>
            {/* 已完成 */}
            <Box>
              <ul>
                <li></li>
              </ul>
            </Box>
          
        </Box>
      </Box>
  </ThemeProvider >
  )
}

export default HomePage