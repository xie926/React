module.exports = function (babel) {
  const { types } = babel
  return {
    visitor: {
      Identifier(path) {
        // path.node.name = 'aaa'
      },
      ImportDeclaration(path) {
        const specify = path.node.specifiers
        const source = path.node.source
        if (!types.isImportDefaultSpecifier(specify[0]) && !types.isImportNamespaceSpecifier(specify[0])) {
          const declare = specify.map(spec => {

            const transformName = spec.local.name
            // import {} -> import transformName 
            const importDefault = types.ImportDeclaration(
              [types.importDefaultSpecifier(spec.local)],
              types.StringLiteral(`${source.value}/${transformName}`)
            )
            return importDefault
            
          })
          // 替换
          // path.replaceWith()
          path.replaceWithMultiple(declare)
        }
      }
    }
  }
}