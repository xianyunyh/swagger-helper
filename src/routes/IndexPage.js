import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import 'antd/dist/antd.css'
import { Input, Select,Button } from 'antd';
const SwaggerParser = require('swagger-parser');
const YAML = SwaggerParser.YAML;
require('json-schema-editor-visual/dist/main.css')

const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const Option = Select.Option;
const { TextArea } = Input;
const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const option = {}
const SchemaEditor = schemaEditor(option)
const IndexPage =  ({ dispatch, index }) => {
  console.log(index)
  const onChange = (value)=>{
    dispatch({
      type: 'index/updateJson',
      jsonData: JSON.parse(value),
    });
  }
  const {jsonData} = index
  var jsonString = YAML.stringify(jsonData);
  return (
    
    <div className={styles.container}>
    <div className={styles.normal}>
        <div style={{ marginBottom: 16 }}>
      <Input addonBefore={selectBefore} addonAfter={<Button icon="search" size="small">Search</Button>} defaultValue="mysite" />
    </div>
      <SchemaEditor showEdito={true} onChange={(v)=>{onChange(v)}} />
      <p>YAML展示</p>
      <TextArea rows={10} value={jsonString} />
    </div>
  
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ index }) => ({
  index,
}))(IndexPage);
