import React, { useState,useRef,useEffect } from 'react';
import {
  ThemeProvider,
  Box,
  Text,
  Button,
  Switch,
  Flex,
  Input,
} from "@chakra-ui/core"
// import {ToDo} from "../components/ToDo.js"

function HomePage() {

   // 模拟数据源
   let data =  [{
      todo:"事务1",
      finshed:false
    },
    {
      todo:"事务2",
      finshed:true
    }]


  const [constlist,setlist] = useState(data);   //数据源
  const txtAdd = useRef(null);                  //添加dom对象
  // const [ToDoText,SetToDoText] = useState(0);   //编辑状态
  // const [EditBtn,SetEditBtn] = useState(null);

  // 添加事务
  function AddToDo(){
    // 获取事务信息
    var te = txtAdd.current.value;
    if (te ===''|| te ==='点击添加ToDo') {
      alert("添加内容不能为空，请输入添加内容。");
      return;
    }


    txtAdd.current.value = "";
    // 构建数据模型
    let item = {
      todo:te,
      finshed:false
    }
    let temp = constlist;
    temp.push(item);
    console.log(temp);
    setlist([...temp]);
  }

  // 删除事务
  function DeleteToDo(e,params){

    if (confirm("您确定要删除"+constlist[params].todo))
    {
      var temp = constlist;
      temp.splice(params,1);
      setlist([...temp]);
      console.log(setlist);
    }
    console.log(constlist);
  }

  // 编辑事务
  function EditToDo(e,id){

    let inputEl = document.getElementById("input"+id)
    var value = inputEl.value;
    if (value == "") {
      alert("修改内容不能为空"); 
      return false}
    var tempe = constlist;
    tempe[id].todo = value
    setlist([...tempe]);
    // ToDoText.target.value="";  
    inputEl.value="";
  }


  return (
    <ThemeProvider>

      {/* 标题栏 */}
      <Box>
        <Box w="100%" h="80px" verticalAlign="80px" backgroundColor="#1A202C"  >
          <Box w="60%" h="80px" verticalAlign="80px" margin="auto" display="flex"  justifyContent="space-between" alignContent="center">
            <Text fontSize={26} color="#fff" >ToDoList</Text>
            <Box  display="flex" justifyContent="space-between" alignItems="center" >
              <Input ref={txtAdd} size="md" placeholder="点击添加ToDo" backgroundColor="#E2E8F0" outline="none"  ></Input>
              <Button variantColor="teal" variant="solid" onClick={AddToDo}>添加事务</Button>
            </Box>
          </Box>
        </Box>

        {/* 事务信息 */}
        <Box>    
          {constlist.map((item,index) => {
              return (
                <Flex justify="Left" align="center" margin="auto" w={800} key={index}>
                  {/* <Input  id={"input"+index} w={180} onChange={inner=>SetToDoText(inner)}></Input> */}
                  <Input  id={"input"+index} w={180}></Input>
                  <p>
                    {index}----{item.todo}----{item.finshed?"已完成":"未完成"}
                  </p>
                  <Button id={"btn"+index} onClick={EditToDo.bind(this,"",index)}>点击修改</Button>
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