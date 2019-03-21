import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import 'antd/dist/antd.css'
import { Input, Select,Button } from 'antd';
const InputGroup = Input.Group;
const SwaggerParser = require('swagger-parser');
const YAML = SwaggerParser.YAML;
require('json-schema-editor-visual/dist/main.css')

const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const Option = Select.Option;
const { TextArea } = Input;
const option = {}
const SchemaEditor = schemaEditor(option)
const IndexPage =  ({ dispatch, index }) => {
 const {host,method,path,jsonData} = index;
  const onChange = (value)=>{
    dispatch({
      type: 'index/updateJson',
      jsonData: JSON.parse(value),
    });
  }
  const hosts = [
    {"type":"dev","value":"http://www.qq.com"},
    {"type":"product","value":"https://www.qq.com"}
  ]
  const onClick = (v) =>{
    dispatch({
      type: 'index/fetch',
      payload:{url:host+path}
    });
  }
  const handleHost = (value)=> {
    console.log(value)
    dispatch({
      type: 'index/updateHost',
      payload:{host:value}
    });
  }
 
  const handleMethod =(value)=>{
    dispatch({
      type: 'index/updateMethod',
      payload:{method:value}
    });
  }
  const handlePath = (e)=>{
    dispatch({
      type: 'index/updatePath',
      payload:{path:e.target.value}
    });
  }
  var yamlString = YAML.stringify(jsonData);
  var jsonString = JSON.stringify(jsonData)
  return (
    
    <div className={styles.container}>
    <div className={styles.normal}>
        <div style={{ marginBottom: 16 }}>
        <InputGroup compact>
          <Select onChange={handleMethod} defaultValue={method}>
            <Option value="GET">GET</Option>
            <Option value="POST">POST</Option>
            <Option value="PUT">PUT</Option>
            <Option value="DELETE">DELETE</Option>
          </Select>
          <Select onChange={handleHost} style={{ width: '20%' }} placeholder={"选择host"} >
            {hosts.map(d => <Option value={d.value} key={d.type}>{d.value}</Option>)}
          </Select>
          <Input onChange={handlePath} path={path} style={{ width: '60%',textAlign:'left' }} defaultValue="/" />
          <Button onClick={(v)=>{onClick(v)}} type="primary" icon="search">发送</Button>
        </InputGroup>
    </div>
      <SchemaEditor showEdito={true} onChange={(v)=>{onChange(v)}} />
      <p>YAML展示</p>
      <TextArea style={{width:"50%"}}  rows={10} value={yamlString} />
      <TextArea style={{width:"50%"}}  rows={10} value={jsonString} />
    </div>
  
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ index }) => ({
  index,
}))(IndexPage);
