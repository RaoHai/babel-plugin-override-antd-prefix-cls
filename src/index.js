
import template from "babel-template";
import * as t from "babel-types";

const buildRequire = template(`
  IMPORT_NAME.defaultProps = Object.assign(
    IMPORT_NAME.defaultProps || {},
    { prefixCls: (IMPORT_NAME.defaultProps.prefixCls || '').replace(/ant/g, 'deer')
  });
`);


export default function () {
  let specified = [];
  let libraryObjs = [];
  return {
    visitor: {
      ImportDeclaration(path) {
        const { node } = path;
        const { value } = node.source;
        if (!node) return;
        if (value === 'antd' || value.indexOf('antd/') !== -1) {
          node.specifiers.forEach(spec => {
            const name = spec.local.name;
            path.insertAfter(
              buildRequire({
                IMPORT_NAME: t.identifier(name)
              })
            );
          });
        }
      }
    }
  };
}