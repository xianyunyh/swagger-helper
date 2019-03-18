import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import 'antd/dist/antd.css'
const option = {}
require('json-schema-editor-visual/dist/main.css')
const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const SchemaEditor = schemaEditor(option)
function IndexPage() {
  return (
    
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <SchemaEditor />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
